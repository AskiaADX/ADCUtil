/*

ASP Classic
 asp

ASP.NET
 aspx
 axd
 asx
 asmx
 ashx
 axd
 ascx

CSS
 css
 hss
 sass
 less
 ccss
 pcss

Coldfusion
 cfm

Erlang
 yaws

Flash
 swf

HTML
 html
 htm
 xhtml
 jhtml

Java
 jsp
 jspx
 wss
 do
 action

JavaScript
 js

Perl
 pl

PHP
 php
 php4
 php3
 phtml

Python
 py

Ruby
 rb
 rhtml
 rjs
 erb

XML
 xml
 rss
 atom
 svg

Other (C, perl etc.)
 cgi
 dll

Executable
 Extension	Format	                                    Operating System(s)
 ACTION	    Automator Action	                        Mac OS
 APK	    Application	                                Android
 APP	    Executable	                                Mac OS
 BAT	    Batch File	                                Windows
 BIN	    Binary Executable	                        Windows, Mac OS, Linux
 CMD	    Command Script	                            Windows
 COM	    Command File	                            Windows
 COMMAND	Terminal Command	                        Mac OS
 CPL	    Control Panel Extension	                    Windows
 CSH	    C Shell Script	                            Mac OS, Linux
 EXE	    Executable	                                Windows
 GADGET	    Windows Gadget	                            Windows
 INF1	    Setup Information File	                    Windows
 INS	    Internet Communication Settings	            Windows
 INX	    InstallShield Compiled Script	            Windows
 IPA	    Application	                                iOS
 ISU	    InstallShield Uninstaller Script	        Windows
 JOB	    Windows Task Scheduler Job File	            Windows
 JSE	    JScript Encoded File	                    Windows
 KSH	    Unix Korn Shell Script	                    Linux
 LNK	    File Shortcut	                            Windows
 MSC	    Microsoft Common Console Document	        Windows
 MSI	    Windows Installer Package	                Windows
 MSP	    Windows Installer Patch	                    Windows
 MST	    Windows Installer Setup Transform File	    Windows
 OSX	    Executable	                                Mac OS
 OUT	    Executable	                                Linux
 PAF	    Portable Application Installer File	        Windows
 PIF	    Program Information File	                Windows
 PRG	    Executable	                                GEM
 PS1	    Windows PowerShell Cmdlet	                Windows
 REG	    Registry Data File	                        Windows
 RGS	    Registry Script	                            Windows
 RUN	    Executable	                                Linux
 SCT	    Windows Scriptlet	                        Windows
 SHB	    Windows Document Shortcut	                Windows
 SHS	    Shell Scrap Object	                        Windows
 U3P	    U3 Smart Application	                    Windows
 VB	        VBScript File	                            Windows
 VBE	    VBScript Encoded Script	                    Windows
 VBS	    VBScript File	                            Windows
 VBSCRIPT	Visual Basic Script	                        Windows
 WORKFLOW	Automator Workflow	                        Mac OS
 WS	        Windows Script	                            Windows
 WSF	    Windows Script                              Windows


 Audio File Types and Formats
 .aif	Audio Interchange File Format
 .iff	Interchange File Format
 .m3u	Media Playlist File
 .m4a	MPEG-4 Audio File
 .mid	MIDI File
 .mp3	MP3 Audio File
 .mpa	MPEG-2 Audio File
 .ra	Real Audio File
 .wav	WAVE Audio File
 .wma	Windows Media Audio File
  AddType audio/ogg ogg
 AddType audio/ogg oga
 AddType audio/webm webma



 Video Files Types and Formats
 .3g2	3GPP2 Multimedia File
 .3gp	3GPP Multimedia File
 .asf	Advanced Systems Format File
 .asx	Microsoft ASF Redirector File
 .avi	Audio Video Interleave File
 .flv	Flash Video File
 .mov	Apple QuickTime Movie
 .mp4	MPEG-4 Video File
 .mpg	MPEG Video File
 .rm	Real Media File
 .swf	Shockwave Flash Movie
 .vob	DVD Video Object File
 .wmv	Windows Media Video File

Markdown
 md



white
xml|rss|atom|svg|js|xhtml|htm|html|swf|css|hss|sass|less|ccss|pcss|txt|csv|json|
gif|jpeg|jpg|tif|tiff|png|bmp|pdf|ico|cur|
aif|iff|m4a|mid|mp3|mpa|ra|wav|wma|ogg|oga|webma|
3g2|3gp|avi|flv|mov|mp4|mpg|rm|wmv|webm
md|


black
cgi|dll|erb|rjs|rhtml|rb|py|phtml|php3|php4|php|pl|action|do|wss|jspx|jsp|jhtml|yaws|cfm|aspx|axd|asx|asmx|ashx|axd|ascx|asp|config|
action|apk|app|bat|bin|cmd|com|command|cpl|csh|exe|gadget|inf1|ins|inx|ipa|isu|
job|jse|ksh|lnk|msc|msi|msp|mst|ocx|osx|out|paf|pif|prg|ps1|reg|rgs|run|sct|shb|shs|u3p|
vb|vbe|vbs|vbscript|workflow|ws|wsf|cs|cpp|
zip|rar|sql|ini|dmg|iso|vcd|class|java|htaccess


*/


var fs          = require('fs');
var pathHelper  = require('path');
var xml2js      = require('xml2js');
var util        = require('util');
var common      = require('../common/common.js');
var errMsg      = common.messages.error;
var warnMsg     = common.messages.warning;
var successMsg  = common.messages.success;
var msg         = common.messages.message;
//  Test the file extension
var fileExt     = {
    blacklist : /\.(cgi|dll|erb|rjs|rhtml|rb|py|phtml|php3|php4|php|pl|action|do|wss|jspx|jsp|jhtml|yaws|cfm|aspx|axd|asx|asmx|ashx|axd|ascx|asp|config|action|apk|app|bat|bin|cmd|com|command|cpl|csh|exe|gadget|inf1|ins|inx|ipa|isu|job|jse|ksh|lnk|msc|msi|msp|mst|ocx|osx|out|paf|pif|prg|ps1|reg|rgs|run|sct|shb|shs|u3p|vb|vbe|vbs|vbscript|workflow|ws|wsf|cs|cpp|zip|rar|sql|ini|dmg|iso|vcd|class|java|htaccess)$/gi,
    whitelist : /\.(xml|rss|atom|svg|js|xhtml|htm|html|swf|css|hss|sass|less|ccss|pcss|txt|csv|json|gif|jpeg|jpg|tif|tiff|png|bmp|pdf|ico|cur|aif|iff|m4a|mid|mp3|mpa|ra|wav|wma|ogg|oga|webma|3g2|3gp|avi|flv|mov|mp4|mpg|rm|wmv|ogv|webm|md)$/gi
};
// Hash with all content type
var contentType      = {
    'text'      : 'text',
    'html'      : 'text',
    'javascript': 'text',
    'css'       : 'text',
    'binary'    : 'binary',
    'image'     : 'binary',
    'video'     : 'binary',
    'audio'     : 'binary',
    'flash'     : 'binary'
};

/*
 * Hash with the rule of the <attribute> node in the <content>
 * Indicates if the attribute is overridable or not
 * true for not-overridable
 */
var contentSealAttr = {
    'javascript' : {
        'src'  : true,
        'type' : false
    },
    'css'       : {
        'href' : true,
        'rel'  : false
    },
    'image'     : {
        'src'   : true,
        'alt'   : false
    },
    'video'     : {
        'src'   : true
    },
    'audio'     : {
        'src'   : true
    }
};

// Hash with the rule of the constraint attribute node.
var constraintAttributeRules = {
    questions : ['chapter', 'single', 'multiple', 'open', 'numeric', 'date', 'requireParentLoop'],
    responses : ['min', 'max'],
    controls  : ['label', 'textbox', 'listbox', 'radiobutton', 'responseblock']
};

/*
 * Build a new error messag
 * @param {String} message Error message
 * @return {Error} New error
 */
function newError(message) {
    return new Error(util.format.apply(null, arguments));
}

/**
 * Validate the ADC files structure, configuration and logical
 *
 * @class ADC.Validator
 * @private
 */
function Validator(adcDirPath) {
    /**
     * Root dir of the current ADCUtil
     */
    this.rootdir    = pathHelper.resolve(__dirname, "../../");

    /**
     * Name of the ADC
     * @type {string}
     */
    this.adcName    = '';

    /**
     * Path to the ADC directory
     * @type {string}
     */
    this.adcDirectoryPath = adcDirPath ? pathHelper.normalize(adcDirPath) : process.cwd();

    /**
     * Validators
     *
     * @type {{current: number, sequence: string[]}}
     */
    this.validators =  {
        current  : -1,
        sequence : [
            'validatePathArg',
            'validateADCDirectoryStructure',
            'validateFileExtensions',
            'validateXMLAgainstXSD',
            'initConfigXMLDoc',
            'validateADCInfo',
            'validateADCInfoConstraints',
            'validateADCOutputs',
            'validateADCProperties',
            'runAutoTests',
            'runADCUnitTests'
        ]
    };

    /**
     * Report of the validation
     *
     * @type {{startTime: null, endTime: null, runs: number, total: number, success: number, warnings: number, errors: number}}
     */
    this.report     = {
        startTime : null,
        endTime   : null,
        runs      : 0,
        total     : 0,
        success   : 0,
        warnings  : 0,
        errors    : 0
    };

    /**
     * Map all files in the resources directory
     *
     * @type {{isExist: boolean, dynamic: {isExist: boolean}, statics: {isExist: boolean}, share: {isExist: boolean}}}
     */
    this.dirResources  = {
        isExist  : false,
        dynamic  : {
            isExist : false
        },
        statics  : {
            isExist : false
        },
        share   : {
            isExist : false
        }
    };

    /**
     * Config xml document in json format
     */
    this.configXmlDoc  = null;

    /**
     * Logger to override with an object
     * @type {{writeMessage : function, writeSuccess : function, writeWarning: function, writeError : function}}
     */
    this.logger = null;
}

/**
 * Create a new instance of ADC validator
 *
 * @constructor
 * @param {String} adcDirPath Path of the ADC directory
 */
Validator.prototype.constructor = Validator;

/**
 * Validate the current ADC instance
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
 * @param {Object} [callback.report] Validation report
 */
Validator.prototype.validate = function validate(options, callback) {

    // Start timer
    this.report.startTime  = new Date().getTime();

    // Swap optional options arguments
    if (typeof options === 'function') {
        callback = options;
        options = null;
    }
    if (!options) {
        options = {
            test     : true,
            autoTest : true,
            xml      : true
        }
    }

    // Register the end callback for future usage
    this.validationCallback = callback;


    this._adxShell = (options && options.adxShell) || null;

    // Validate according to the options
    if (options) {

        // Set the logger
        if (options.logger) {
            this.logger = options.logger;
        }

        // --no-autoTest
        if (options.autoTest === false) { // Check bool value not falsy
            this.removeOnSequence(['runAutoTests']);
        }

        // --no-test
        if (options.test === false) { // Check bool value not falsy
            this.removeOnSequence(['runADCUnitTests']);
        }

        // --no-xml
        if (options.xml === false) { // Check bool value not falsy
            this.removeOnSequence([
                'validateXMLAgainstXSD',
                'initConfigXMLDoc',
                'validateADCInfo',
                'validateADCInfoConstraints',
                'validateADCOutputs',
                'validateADCProperties'
            ]);
        }

    }

    this.report.total = this.validators.sequence.length;
    this.resume(null);
};

/**
 * Remove the specified validators on the validators sequence
 *
 * @param {Array} validators Validators to remove
 */
Validator.prototype.removeOnSequence = function removeOnSequence(validators) {
    var sequence = this.validators.sequence,
        index;

    validators.forEach(function (value) {
        index = sequence.indexOf(value);
        if (index !== -1) {
            sequence.splice(index, 1);
        }
    });
};

/**
 * Summarize the validation
 *
 * @param {Error} [err] Last error
 */
Validator.prototype.done  = function done(err) {
    this.report.endTime = new Date().getTime();
    var executionTime = this.report.endTime - this.report.startTime,
        report        = this.report,
        message;

    if (err) {
        this.writeError(err.message);
    }

    // Write the summary
    this.writeMessage(msg.validationFinishedIn, executionTime);
    message = util.format(msg.validationReport,
        report.runs,
        report.total,
        report.success,
        report.warnings,
        report.errors,
        report.total - report.runs);

    if (report.errors) {
        this.writeError(message);
    } else if (report.warnings) {
        this.writeWarning(message);
    } else {
        this.writeSuccess(message);
    }

    if (typeof this.validationCallback === 'function') {
        this.validationCallback(err, this.report);
    }
};

/**
 * Execute the next validation
 *
 * @param {Error|void} err Error which occured during the previous validation
 */
Validator.prototype.resume = function resume(err) {
    if (err) {
        // Mark the error
        this.report.errors++;
        this.done(err);
        return;
    }

    var validators = this.validators;


    // Mark the success
    if (validators.current !== -1 && this[validators.sequence[validators.current]])  {
        this.report.success++;
    }

    validators.current++;
    if (validators.current >= validators.sequence.length) {
        this.done(err);
        return;
    }

    // Search the next validators (recursive call)
    var validatorName = validators.sequence[validators.current];
    if (!this[validatorName]) {
        this.resume(null);
        return;
    }

    // Execute the find validator
    // Mark the runs
    this.report.runs++;
    this[validatorName]();
};

/**
 * Write an error output in the console or in the logger
 * @param {String} text Text to write in the console
 */
Validator.prototype.writeError = function writeError(text) {
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
Validator.prototype.writeWarning = function writeWarning(text) {
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
Validator.prototype.writeSuccess = function writeSuccess(text) {
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
Validator.prototype.writeMessage = function writeMessage(text) {
    if (this.logger && typeof this.logger.writeMessage === 'function') {
        this.logger.writeMessage.apply(this.logger, arguments);
    } else {
        common.writeMessage.apply(common, arguments);
    }
};


/**
* Validate that the `path` argument is correct
*/
Validator.prototype.validatePathArg = function validatePathArg() {
    if (!this.adcDirectoryPath) {
        this.resume(newError(errMsg.missingArgPath));
        return;
    }

    // Validate the existence of the specify ADC directory
    var self = this;
    common.dirExists(self.adcDirectoryPath, function verifyADCDirectory(err, exists) {
        var er;
        if (!exists) {
            er = newError(errMsg.noSuchFileOrDirectory, pathHelper.normalize(self.adcDirectoryPath));
        } else {
            self.writeSuccess(successMsg.pathValidate);
        }
        self.resume(er);
    });
};


/**
 * Validate the structure of the ADC directory
 */
Validator.prototype.validateADCDirectoryStructure = function validateADCDirectoryStructure() {
    // Verify if the config.xml exists
    var self = this;
    fs.exists(pathHelper.join(self.adcDirectoryPath, common.CONFIG_FILE_NAME), function verifyConfigFileExist(exists) {
        var resourcesPath = pathHelper.join(self.adcDirectoryPath, common.RESOURCES_DIR_NAME),
            dirResources  = self.dirResources;

        // Check  the resources directory
        function loadResources() {
            common.dirExists(resourcesPath, function initResourcesFileMap(er, find) {
                if (!find) {
                    self.resume(null);
                    return;
                }
                dirResources.isExist = true;
                loadDynamic();
            });
        }

        // Check the dynamic directory
        function loadDynamic() {
            common.dirExists(pathHelper.join(resourcesPath, common.DYNAMIC_DIR_NAME), function initDynamicFileMap(er, find) {
                var dirDynamic = dirResources.dynamic;
                dirDynamic.isExist = find;
                if (find) {
                    try {
                        var files = fs.readdirSync(pathHelper.join(resourcesPath, common.DYNAMIC_DIR_NAME));
                        files.forEach(function (file) {
                            if (common.isIgnoreFile(file)) {
                                return;
                            }
                            dirDynamic[file.toLocaleLowerCase()] = file;
                        })
                    } catch (ex) {
                        // Do nothing
                    }
                }
                loadStatic();
            });
        }

        // Check the static directory
        function loadStatic(){
            common.dirExists(pathHelper.join(resourcesPath, common.STATIC_DIR_NAME), function initStaticFileMap(er, find) {
                var dirStatic = dirResources.statics;
                dirStatic.isExist = find;
                if (find) {
                    try {
                        var files = fs.readdirSync(pathHelper.join(resourcesPath, common.STATIC_DIR_NAME));
                        files.forEach(function (file) {
                            if (common.isIgnoreFile(file)) {
                                return;
                            }
                            dirStatic[file.toLocaleLowerCase()] = file;
                        })
                    } catch (ex) {
                        // Do nothing
                    }
                }

                loadShare();
            });
        }

        // Check the share directory and resume the validation
        function loadShare() {
            common.dirExists(pathHelper.join(resourcesPath, common.SHARE_DIR_NAME), function initShareFileMap(er, find) {
                var dirShare = dirResources.share;
                dirShare.isExist = find;
                if (find) {
                    try {
                        var files = fs.readdirSync(pathHelper.join(resourcesPath, common.SHARE_DIR_NAME));
                        files.forEach(function (file) {
                            if (common.isIgnoreFile(file)) {
                                return;
                            }
                            dirShare[file.toLocaleLowerCase()] = file;
                        })
                    } catch (ex) {
                        // Do nothing
                    }
                }

                self.resume(null);
            });
        }


        if (!exists) {
            self.resume(newError(errMsg.noConfigFile));
        } else {
            self.writeSuccess(successMsg.directoryStructureValidate);
            loadResources();
        }
    });
};


/**
 * Validate all file extension against the while list and the black list
 */
Validator.prototype.validateFileExtensions = function validateFileExtensions() {
    var dirResources = this.dirResources,
        dir   = [dirResources.dynamic, dirResources.statics, dirResources.share],
        current, i, l, key, match;

    if (!dirResources.isExist) {
        this.resume(null);
    }

    for (i = 0, l = dir.length; i < l; i++) {
        current = dir[i];
        if (current.isExist) {
            for (key in current) {
                if (current.hasOwnProperty(key) && key !== 'isExist') {
                    // Test against the black list
                    match = key.toString().match(fileExt.blacklist);
                    if (match) {
                        this.resume(newError(errMsg.fileExtensionForbidden, match[0]));
                        return;
                    }

                    // Test against the white list
                    match = key.toString().match(fileExt.whitelist);
                    if (!match) {
                        this.report.warnings++;
                        this.writeWarning(warnMsg.untrustExtension, key);
                    }
                }
            }
        }
    }

    this.writeSuccess(successMsg.fileExtensionValidate);
    this.resume(null);
};


/**
 * Validate the config.xml file of the ADC against the XSD schema
 */
Validator.prototype.validateXMLAgainstXSD = function validateXMLAgainstXSD() {
    var exec            = require('child_process').exec,
        xmlLintPath     = pathHelper.join(this.rootdir, common.XML_LINT_PATH),
        xmlSchemaPath   = pathHelper.join(this.rootdir, common.SCHEMA_PATH, common.SCHEMA_CONFIG),
        xmlPath         = pathHelper.join(this.adcDirectoryPath, common.CONFIG_FILE_NAME),

        self = this,

        commandLine = '"' + xmlLintPath + '" --noout --schema "' + xmlSchemaPath + '" "' + xmlPath + '"';

    exec(commandLine, function callback(err) {
        if (!err) {
            self.writeSuccess(successMsg.xsdValidate);
        }
        self.resume(err);
    });
};


/**
 * Initialize the XMLDoc using the config.xml
 */
Validator.prototype.initConfigXMLDoc = function initConfigXMLDoc() {
    var self = this;
    fs.readFile(pathHelper.join(self.adcDirectoryPath, common.CONFIG_FILE_NAME), 'utf8', function readConfigXMLFile(err, data) {
        if (err) {
            self.resume(err);
            return;
        }
        // Remove the BOM characters in UTF-8 string
        data = data.replace(/^\uFEFF/, '');
        xml2js.parseString(data, function parseXML(err, result) {
            self.configXmlDoc = result;
            if (!err) {
                self.writeSuccess(successMsg.xmlInitialize);
            }
            self.resume(err);
        });
    });
};


/**
 * Validate the info of the ADC config file
 */
Validator.prototype.validateADCInfo = function validateADCInfo() {
    var infosEl = this.configXmlDoc.control.info && this.configXmlDoc.control.info[0],
        nameEl  = infosEl && infosEl.name && infosEl.name[0];

    if (!infosEl) {
        this.resume(newError(errMsg.missingInfoNode));
        return;
    }

    if (!nameEl) {
        this.resume(newError(errMsg.missingOrEmptyNameNode));
        return;
    }

    this.adcName = nameEl;
    this.writeSuccess(successMsg.xmlInfoValidate);
    this.resume(null);
};


/**
 * Validate the info/constraints of the ADC config file
 */
Validator.prototype.validateADCInfoConstraints = function validateADCInfoConstraints() {
    var constraintsEl           = this.configXmlDoc.control.info[0].constraints[0],
        constraints             = constraintsEl.constraint || [],
        constraintsOn           = {
            questions : 0,
            responses : 0,
            controls  : 0
        }, attr, i, l, key, hasRule = false;

    for (i = 0, l = constraints.length; i < l; i++) {
        hasRule = false;
        attr = constraints[i].$ || {};
        if (!attr.on) {
            continue;
        }

        // Validate the duplicate constraints
        constraintsOn[attr.on]++;
        if (constraintsOn[attr.on] > 1) {
            this.resume(newError(errMsg.duplicateConstraints, attr.on));
            return;
        }

        // Validate the attribute logic
        for (key in attr) {
            if (attr.hasOwnProperty(key) && key !== 'on') {
                if (constraintAttributeRules[attr.on].indexOf(key) === -1) {
                    this.resume(newError(errMsg.invalidConstraintAttribute, attr.on, key));
                    return;
                }
                if (key !== 'min' && key !== 'max') {
                    if (attr[key] == '1' || attr[key] == 'true') {
                        hasRule = true;
                    }
                } else {
                    hasRule = true;
                }
            }
        }

        // No rule specified
        if (!hasRule) {
            this.resume(newError(errMsg.noRuleOnConstraint, attr.on));
            return;
        }
    }

    if (!constraintsOn.questions) {
        this.resume(newError(errMsg.requireConstraintOn, 'questions'));
        return;
    }

    if (!constraintsOn.controls) {
        this.resume(newError(errMsg.requireConstraintOn, 'controls'));
        return;
    }

    this.writeSuccess(successMsg.xmlInfoConstraintsValidate);
    this.resume(null);
};


/**
 * Validate the outputs of the ADC config file
 */
Validator.prototype.validateADCOutputs = function validateADCOutputs() {
    var outputsEl               = this.configXmlDoc.control.outputs[0],
        outputs                 = outputsEl.output,
        conditions              = {},
        outputsEmptyCondition   = [],
        htmlFallBackCount       = 0,
        lastOutput,
        defaultGeneration, i, l, output, id, condition, err;

    for (i = 0, l = outputs.length; i < l; i++) {
        output      = outputs[i];
        id          = output.$.id;
        condition   = output.condition && output.condition[0];
        defaultGeneration = output.$.defaultGeneration || false;

        if (!condition) {
            outputsEmptyCondition.push(id);
        }
        if (condition && conditions[condition]) {
            this.report.warnings++;
            this.writeWarning(warnMsg.duplicateOutputCondition, conditions[condition], id);
        }

        conditions[condition] = id;
        lastOutput = {
            id                : id,
            defaultGeneration : defaultGeneration,
            contents          : output.content || [],
            condition         : condition,
            dynamicContentCount     : 0,
            javascriptContentCount  : 0,
            flashContentCount       : 0
        };

        err = this.validateADCContents(lastOutput);

        if (defaultGeneration || !lastOutput.javascriptContentCount) {
            htmlFallBackCount++;
        }

        if (err) {
            this.resume(err);
            return;
        }
    }

    if (outputsEmptyCondition.length > 1) {
        err = newError(errMsg.tooManyEmptyCondition, outputsEmptyCondition.join(", "));
    }

    if (!htmlFallBackCount) {
        this.report.warnings++;
        this.writeWarning(warnMsg.noHTMLFallBack);
    }

    if (!err) {
        this.writeSuccess(successMsg.xmlOutputsValidate);
    }
    this.resume(err);
};


/**
 * Validate the contents of an ADC output
 *
 * @param {Object} output Helper output object
 * @return {Error|void} Return the error or null when no error.
 */
Validator.prototype.validateADCContents = function validateADCContents(output) {
    var contents = output.contents,
        i, l,
        err = null,
        condition = output.condition || "";

    if (contents.length && !this.dirResources.isExist) {
        return newError(errMsg.noResourcesDirectory);
    }

    for (i = 0, l = contents.length; i < l; i++) {
        err = this.validateADCContent(output, contents[i]);
        if (err) {
            return err;
        }
    }

    if (!output.defaultGeneration && !output.dynamicContentCount) {
        return newError(errMsg.dynamicFileRequire, output.id);
    }

    if (!output.defaultGeneration && output.javascriptContentCount && !/browser\.support\("javascript"\)/gi.test(condition)) {
        this.report.warnings++;
        this.writeWarning(warnMsg.javascriptUseWithoutBrowserCheck, output.id);
    }

    if (!output.defaultGeneration && output.flashContentCount  && !/browser\.support\("flash"\)/gi.test(condition)) {
        this.report.warnings++;
        this.writeWarning(warnMsg.flashUseWithoutBrowserCheck, output.id);
    }

    return err;
};


/**
 * Validate the content of an ADC output
 *
 * @param {Object} output Helper output object
 * @param {Object} content Content node
 * @return {Error|void} Return the error or null when no error.
 */
Validator.prototype.validateADCContent = function validateADCContent(output, content) {
    var atts        = content.$,
        type        = atts.type,
        position    = atts.position,
        mode        = atts.mode,
        key         = (mode !== 'static') ? mode : 'statics',
        fileName    = atts.fileName,
        yieldNode   = content['yield'] || [],
        dirResources = this.dirResources;

    // Missing directory
    if (!dirResources[key].isExist) {
        return newError(errMsg.cannotFindDirectory, mode);
    }

    // Missing file
    if (!dirResources[key][fileName.toLocaleLowerCase()]) {
        return newError(errMsg.cannotFindFileInDirectory, output.id, fileName, mode);
    }

    // A binary file could not be dynamic
    if (mode === 'dynamic' && contentType[type] === 'binary') {
        return newError(errMsg.typeCouldNotBeDynamic, output.id, type, fileName);
    }

    // A binary file require a 'yield' node or 'position=none'
    if (type === 'binary' && position !== 'none' && !yieldNode.length) {
        return newError(errMsg.yieldRequireForBinary, output.id, fileName);
    }

    // Increment the information about the dynamic content
    if (position !== 'none' && mode === 'dynamic' && (type === 'javascript' || type === 'html')) {
        output.dynamicContentCount++;
    }

    // Increment the information about the javascript content
    if (type === 'javascript') {
        output.javascriptContentCount++;
    }

    // Increment the information about the flash content
    if (type === 'flash') {
        output.flashContentCount++;
    }

    // Validate attribute
    return this.validateADCContentAttribute(output, content);
};


/**
 * Validate the attribute tag of the content node
 *
 * @param {Object} output Helper output object
 * @param {Object} content Content node
 * @return {Error|void} Return error or null when no error
 */
Validator.prototype.validateADCContentAttribute = function validateADCContentAttribute(output, content) {
    if (!content.attribute || !content.attribute.length) {
        return null;
    }

    var atts        = content.$,
        type        = atts.type,
        mode        = atts.mode,
        fileName    = atts.fileName,
        attributes  = content.attribute,
        attribute,
        attName,
        attMap      = {},
        i, l;

    // Attribute nodes are ignored for the following type
    if (/(text|binary|html|flash)/.test(type)) {
        this.report.warnings++;
        this.writeWarning(warnMsg.attributeNodeWillBeIgnored, output.id, type, fileName);
    }

    // Attribute nodes are ignored for dynamic mode
    if (mode === 'dynamic') {
        this.report.warnings++;
        this.writeWarning(warnMsg.attributeNodeAndDynamicContent, output.id, fileName);
    }

    // Attribute nodes are ignored with yield
    if (content['yield'] && content['yield'].length) {
        this.report.warnings++;
        this.writeWarning(warnMsg.attributeNodeAndYieldNode, output.id, fileName);
    }

    for (i = 0, l = attributes.length; i < l; i++) {
        attribute = attributes[i];
        attName     = (attribute.$ && attribute.$.name && attribute.$.name.toLocaleLowerCase()) || '';

        if (contentSealAttr[type] && contentSealAttr[type][attName]) {
            return newError(errMsg.attributeNotOverridable, output.id, attName, fileName);
        }
        if (attMap[attName]) {
            return newError(errMsg.duplicateAttributeNode, output.id, attName, fileName);
        }
        if (attName) {
            attMap[attName] = attName;
        }
    }

    return null;
};

/**
 * Validate the ADC properties node
 */
Validator.prototype.validateADCProperties = function validateADCProperties() {
    var propertiesEl           = (this.configXmlDoc.control.properties && this.configXmlDoc.control.properties[0]) || {},
        categories             = propertiesEl.category || [],
        properties             = propertiesEl.property || [];

    if (!properties.length && !categories.length) {
        this.report.warnings++;
        this.writeWarning(warnMsg.noProperties);
    }
    this.writeSuccess(successMsg.xmlPropertiesValidate);
    this.resume(null);
};

/**
 * Run the ADC Unit tests process with specify arguments
 * @param {Array} args
 * @param {String} message
 */
Validator.prototype.runTests = function runTests(args, message) {
    var self = this;
    // Validate the existence of the specify unit test directory
    common.dirExists(pathHelper.join(self.adcDirectoryPath, common.UNIT_TEST_DIR_PATH), function verifyUnitTestDirectory(err, exists) {
        if (!exists) {
            self.resume(null);
            return ;
        }
        function execCallback(err, data, stderr) {
            if (stderr) {
                err = new Error(stderr);
            }
            self.writeMessage(message);
            if (err) {
                self.report.warnings++;
                self.writeWarning("\r\n" + err.message);
                if (data) {
                    self.writeMessage(data);
                }
            } else {
                self.writeMessage(data);
                self.writeSuccess(successMsg.adcUnitSucceed);
            }
            self.resume(null);
        }

        if (!self._adxShell) {
            var execFile =  require('child_process').execFile;
            execFile('.\\' + common.ADC_UNIT_PROCESS_NAME, args, {
                cwd   : pathHelper.join(self.rootdir, common.ADC_UNIT_DIR_PATH),
                env   : process.env
            }, execCallback);
        } else {
            self._adxShell.exec('test ' + args.join(' '), execCallback);
        }
    });
};

/**
 * Run the ADC unit tests auto-generated
 */
Validator.prototype.runAutoTests = function runAutoTests() {
    this.runTests(['--auto', this.adcDirectoryPath], msg.runningAutoUnit);
};

/**
 * Run the ADC unit tests
 */
Validator.prototype.runADCUnitTests  = function runADCUnitTests() {
    this.runTests([this.adcDirectoryPath], msg.runningADCUnit);
};

// Export the Validator object
exports.Validator = Validator;

/*
 * Validate an ADC (CLI)
 *
 * @param {Command} program Commander object which hold the arguments pass to the program
 * @param {String} path Path to the ADC directory
 * @param {Function} callback Callback function to run at the end it take a single Error argument
 */
exports.validate = function validate(program, path, callback) {
    var validator = new Validator(path);
    validator.validate(program, callback);
};
