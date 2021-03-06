var fs          = require('fs');
var pathHelper  = require('path');
var common      = require('../common/common.js');
var errMsg      = common.messages.error;
var successMsg  = common.messages.success;
var Validator   = require('../validator/ADCValidator.js').Validator;

/**
 * Validate and compress the ADC directory to an `.adc` file
 *
 * @class ADC.Builder
 * @private
 */
function Builder(adcDirPath) {
    /**
     * Root dir of the current ADCUtil
     */
    this.rootdir = pathHelper.resolve(__dirname, "../../");

    /**
     * Name of the ADC
     * @type {string}
     */
    this.adcName = '';

    /**
     * Path to the ADC directory
     * @type {string}
     */
    this.adcDirectoryPath = adcDirPath ? pathHelper.normalize(adcDirPath) : process.cwd();

    /**
     * Bin path of the ADC
     * @type {string}
     */
    this.binPath = '';

    /**
     * Path of the output file
     * @type {string}
     */
    this.outputPath = '';

    /**
     * Sequence of calls
     * @type {*|Sequence}
     */
    this.sequence = new common.Sequence([
        this.createBinDir,
        this.compressADC
    ], this.done, this);

    /**
     * Report of the validation
     *
     * @type {{startTime: null, endTime: null, runs: number, total: number, success: number, warnings: number, errors: number}}
     */
    this.validationReport = null;

    /**
     * Logger to override with an object
     * @type {{writeMessage : function, writeSuccess : function, writeWarning: function, writeError : function}}
     */
    this.logger = null;
}

/**
 * Create a new instance of ADC Builder
 *
 * @constructor
 * @param {String} adcDirPath Path of the ADC directory
 */
Builder.prototype.constructor = Builder;

/**
 * Build the ADC
 *
 * @param {Object} [options] Options of validation
 * @param {Boolean} [options.test=true] Run unit tests
 * @param {Boolean} [options.autoTest=true] Run auto unit tests
 * @param {Boolean} [options.xml=true] Validate the config.xml file
 * @param {InteractiveADXShell} [options.adxShell] Interactive ADXShell process
 * @param {Object} [options.logger] Logger
 * @param {Function} [options.writeMessage] Function where regular messages will be print
 * @param {Function} [options.writeSuccess] Function where success messages will be print
 * @param {Function} [options.writeWarning] Function where warning messages will be print
 * @param {Function} [options.writeError] Function where error messages will be print
 * @param {Function} [callback] Callback function
 * @param {Error} [callback.err] Error
 * @param {String} [callback.outputPath] Path of the output
 * @param {Object} [callback.report] Validation report
 */
Builder.prototype.build = function build(options, callback) {

    // Swap the options
    if (typeof  options === 'function') {
        callback = options;
        options = null;
    }

    this.buildCallback = callback;

    this.validator = new Validator(this.adcDirectoryPath);
    var self = this;
    options = options || {};
    options.xml = true;
    options.autoTest = true;
    if (options.logger) {
        this.logger = options.logger;
    }

    this.validator.validate(options, function validateCallback(err, report) {
        if (err) {
            return self.sequence.resume(new Error(errMsg.validationFailed));
        }

        self.adcName          = self.validator.adcName;
        self.binPath          = pathHelper.join(self.adcDirectoryPath, common.ADC_BIN_PATH);
        self.validationReport = report;

        return self.sequence.resume();
    });
};

/**
 * Write an error output in the console or in the logger
 * @param {String} text Text to write in the console
 */
Builder.prototype.writeError = function writeError(text) {
    if (this.logger && typeof this.logger.writeError === 'function') {
        this.logger.writeError.apply(this.logger, arguments);
    } else {
        common.writeError.apply(common, arguments);
    }
};

/**
 * Write a warning output in the console or in the logger
 * @param {String} text Text to write in the console
 */
Builder.prototype.writeWarning = function writeWarning(text) {
    if (this.logger && typeof this.logger.writeWarning === 'function') {
        this.logger.writeWarning.apply(this.logger, arguments);
    } else {
        common.writeWarning.apply(common, arguments);
    }
};

/**
 * Write a success output in the console or in the logger
 * @param {String} text Text to write in the console
 */
Builder.prototype.writeSuccess = function writeSuccess(text) {
    if (this.logger && typeof this.logger.writeSuccess === 'function') {
        this.logger.writeSuccess.apply(this.logger, arguments);
    } else {
        common.writeSuccess.apply(common, arguments);
    }
};

/**
 * Write an arbitrary message in the console  or in the logger without specific prefix or in the  logger
 * @param {String} text Text to write in the console
 */
Builder.prototype.writeMessage = function writeMessage(text) {
    if (this.logger && typeof this.logger.writeMessage === 'function') {
        this.logger.writeMessage.apply(this.logger, arguments);
    } else {
        common.writeMessage.apply(common, arguments);
    }
};


/**
 * End of the sequence chain
 * @param {Error} err Error
 */
Builder.prototype.done = function done(err) {
    if (err) {
        this.writeError(err.message);
        if (typeof this.buildCallback === 'function') {
            this.buildCallback(err, this.outputPath, this.validationReport);
        }
        return;
    }

    var output = pathHelper.join(this.binPath, this.adcName + '.adc');

    if (!this.validationReport.warnings) {
        this.writeSuccess(successMsg.buildSucceed, output);
    } else {
        this.writeSuccess(successMsg.buildSucceedWithWarning, this.validationReport.warnings, output);
    }
    if (typeof this.buildCallback === 'function') {
        this.buildCallback(err, this.outputPath, this.validationReport);
    }
};


/**
 * Create a bin directory
 */
Builder.prototype.createBinDir =  function createBinDir() {
    var self = this;
    common.dirExists(this.binPath, function binPathExist(err, exist) {
        if (!exist || err) {
            var er = fs.mkdirSync(self.binPath);
            if (er) {
                return self.sequence.resume(er);
            }
        }
        return self.sequence.resume();
    });
};

/**
 * Compress the ADC directory
 */
Builder.prototype.compressADC =  function compressADC() {
    var self = this;
    common.getDirStructure(self.adcDirectoryPath, function callbackGetStructure(err, structure) {
        if (err) {
            return self.sequence.resume(err);
        }

        var zip     = common.getNewZip(),
            zipDir = '';

        structure.forEach(function appendInZip(file) {
            var prevDir,
                folderLower,
                zipDirLower = zipDir.toLowerCase();

            if (typeof file === 'string') {  // File
                if (zipDirLower === 'resources/') return; // Exclude extra files
                if (zipDirLower === '' && !/^(config\.xml|readme|changelog)/i.test(file)) return; // Exclude extra files
                if (common.isIgnoreFile(file)) return; // Ignore files
                zip.file(pathHelper.join(zipDir, file), fs.readFileSync(pathHelper.join(self.adcDirectoryPath, zipDir, file)));
            } else { // Directory
                if (!file.sub || !file.sub.length) return;        // Exclude empty folder

                folderLower = file.name.toLowerCase();

                if (folderLower === 'bin') return;   // Exclude the bin folder
                if (folderLower === 'tests') return; // Exclude tests folder
                if (zipDirLower === 'resources/' &&  !/^(dynamic|static|share)$/i.test(folderLower)) return; // Exclude extra directories
                if (zipDirLower === '' && !/^(resources)$/.test(folderLower)) return; // Exclude extra directories

                prevDir = zipDir;
                zipDir += file.name + '/';
                zip.folder(zipDir);
                file.sub.forEach(appendInZip);
                zipDir = prevDir;
            }
        });

        var buffer = zip.generate({type:"nodebuffer"});

        self.outputPath = pathHelper.join(self.binPath, self.adcName + '.adc');
        fs.writeFile(self.outputPath, buffer, function writeZipFile(err) {
            if (err) {
                throw err;
            }
        });

        self.sequence.resume();
    });
};


// Export the Builder object
exports.Builder = Builder;


/*
 * Build the ADC file
 *
 * @param {Command} program Commander object which hold the arguments pass to the program
 * @param {String} path Path of the ADC to directory
 */
exports.build = function build(program, path) {
    var builder = new Builder(path);
    builder.build(program);
};





