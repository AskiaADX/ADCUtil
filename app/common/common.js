    // Filesystem
var fs = require('fs'),
    // Path helper
    pathHelper = require('path'),
    // Util
    util   = require('util'),
    // cli-color
    clc      = require('cli-color'),
    // Zip lib
    Zip    = require('JSZip');

exports = module.exports;

// Application name
exports.APP_NAME = 'ADCUtil';

// Preferences
exports.PREFERENCES_FILE_NAME = 'preferences.json';

// Common
// File name of the config.xml
exports.CONFIG_FILE_NAME = 'config.xml';
// File name of the readme.md
exports.README_FILE_NAME = 'readme.md';
// Path of the unit tests directory
exports.UNIT_TEST_DIR_PATH = "tests/units";
// Path of the fixtures directory
exports.FIXTIRES_DIR_PATH = "tests/fixtures";

// Validator
//  Path to the XML Lint program
exports.XML_LINT_PATH   = '/lib/libxml/xmllint.exe';
// Path to the XSD schema file to validate the ADC config.xml
exports.SCHEMA_PATH     = '/schema/';
// Name of the schema to validate the config file
exports.SCHEMA_CONFIG   = 'config.xsd';
// Name of the schema to validate the unit test file
exports.SCHEMA_TEST_UNIT   = 'UnitTests.xsd';
// Path to the directory of the ADCUnit program
exports.ADC_UNIT_DIR_PATH   = '/lib/adxshell_' + ((process.arch === 'x64') ? 'x64' : 'x86') + '/';
// ADCUnit.exe
exports.ADC_UNIT_PROCESS_NAME = 'ADXShell.exe';
// Name of the `resources` directory
exports.RESOURCES_DIR_NAME = "resources";
// Name of the directory `dynamic`
exports.DYNAMIC_DIR_NAME = "dynamic";
// Name of the directory `static`
exports.STATIC_DIR_NAME = "static";
// Name of the directory `share`
exports.SHARE_DIR_NAME = "share";

// File name which contains the list of files to ignore
exports.ADC_IGNORE_FILE_NAME = "ADCIgnore";
// Ignore file list
exports.adcIgnoreFiles = "";
// Rules to ignore files
exports.adcIgnoreFilesRules = undefined;

// Generator
// Path of the templates directory
exports.TEMPLATES_PATH = '/templates/adc/';
exports.DEFAULT_TEMPLATE_NAME = 'blank';


// Builder
// Path to the bin directory of an ADC
exports.ADC_BIN_PATH  = '/bin/';


/**
 * Error messages
 */
exports.messages = {
    error : {
        // Common
        noSuchFileOrDirectory   : "No such file or directory `%s`",

        // Validator
        missingArgPath          : "missing required argument `path`",
        noConfigFile            : "cannot find the `Config.xml` file in the directory",
        fileExtensionForbidden  : "File extension `%s` is forbidden",
        duplicateConstraints    : "Duplicate constraints on `%s`",
        invalidConstraintAttribute : "The constraint on `%s` doesn't accept the `%s` attribute",
        noRuleOnConstraint      : "The constraint on `%s` require at least one rule",
        requireConstraintOn     : "A constraint on `%s` is require",
        tooManyEmptyCondition   : "Too many outputs with empty condition: %s",
        noResourcesDirectory    : "Cannot find the `resources` directory",
        dynamicFileRequire      : "At least one dynamic file is require for the `%s` output, or set the attribute `defaultGeneration=true` in the output node",
        cannotFindDirectory     : "Cannot find the `%s` directory",
        cannotFindFileInDirectory : "Output: `%s`. Cannot find the file `%s` in the `%s` directory",
        typeCouldNotBeDynamic       : "Output: `%s`. Type `%s` could not be dynamic (`%s`)",
        attributeNotOverridable : "Output: `%s`. Attribute `%s` of the `%s` content could not be override",
        yieldRequireForBinary   : "Output: `%s`. `yield` node require for the binary content `%s` or set his position to `none`",
        duplicateAttributeNode  : "Output: `%s`. Duplicate `%s` attribute node in content `%s`",
        missingInfoNode         : "The config.xml must contains the `info` node as a child of the xml root element",
        missingOrEmptyNameNode   : "The node `name` in `info` doesn't exist or is empty",

        // Generator
        missingNameArgument     : "The `name` parameter is require",
        missingOutputArgument   : "The --output path is require",
        directoryAlreadyExist   : "The directory `%s` already exists.",
        incorrectADCName        : "Incorrect ADC name. The name of the ADC should only contains letters, digits, spaces, `_,-,.` characters",
        cannotFoundTemplate     : "Cannot found the `%s` template",

        // Builder
        validationFailed        : "Validation failed",
        buildFailed             : "Build failed with errors.",

        // Show
        noOutputDefinedForShow  : "Please specify the name of the output you want to show, using the option -o or --output.",
        noFixtureDefinedForShow : "Please specify the name of the fixture you want to use, using the option -f or --fixture.",

        // Configurator
        invalidPathArg          : "Invalid `path` argument"
    },
    warning : {
        // Validator
        untrustExtension            : "Untrust extension of the file `%s`",
        duplicateOutputCondition    : "Duplicate conditions in outputs `%s` and `%s`",
        attributeNodeWillBeIgnored  : "Output: `%s`. `attribute` nodes will be ignored for the `%s` content (`%s`)",
        attributeNodeAndDynamicContent : "Output: `%s`. `attribute` nodes will be ignored for dynamic content (`%s`)",
        attributeNodeAndYieldNode   : "Output: `%s`. `attribute` nodes will be ignored when using `yield` (`%s`)",
        javascriptUseWithoutBrowserCheck : "Output: `%s`. It's recommended to test the `Browser.Support(\"Javascript\") in the condition node, before to use `javascript` content.",
        flashUseWithoutBrowserCheck : "Output: `%s`. It's recommended to test the `Browser.Support(\"Flash\") in the condition node, before to use `flash` content.",
        noHTMLFallBack              : "It's recommended to have at least one fallback with HTML only",
        noProperties                : "It's recommended to define at least one properties"
    },
    success : {
        // Validator
        pathValidate               : "ADC path validation done",
        directoryStructureValidate : "ADC directory structure validation done",
        fileExtensionValidate      : "File extension validation done",
        xsdValidate                : "XSD validation done",
        xmlInitialize              : "Config.xml parsing done",
        xmlInfoValidate            : "Config#info validation done",
        xmlInfoConstraintsValidate : "Config#info#constraints validation done",
        xmlOutputsValidate         : "Config#outputs validation done",
        xmlPropertiesValidate      : "Config#properties validation done",
        adcUnitSucceed             : "ADC Unit tests succeeded",

        // Generator
        adcStructureGenerated : "Project structure\r\n\r\n%s\r\n\r\nADC `%s` was successfully generated in `%s`\r\n",

        // Builder
        buildSucceed           : "ADC file was successfully generated.\r\nOutput: file:///%s",
        buildSucceedWithWarning: "ADC file was successfully generated with %d warnings.\r\nOutput: file:///%s"
    },
    message : {
        // Validator
        runningADCUnit   : 'Running ADC Unit tests',
        runningAutoUnit  : 'Running the auto-generated ADC Unit tests',
        validationFinishedIn       : "\r\nValidations finished in %d milliseconds",
        validationReport : "\r\n%d/%d validations runs, %d success, %d warnings, %d failures, %d skipped",

        // Preferences
        noPreferences  : 'No preferences defined'
    }
};

/**
 * Write an error output in the console
 * @param {String} text Text to write in the console
 */
exports.writeError = function writeError(text) {
    console.error(clc.red.bold("[ERROR]: " + text));
};

/**
 * Write a warning output in the console
 * @param {String} text Text to write in the console
 */
exports.writeWarning = function writeWarning(text) {
    console.log(clc.yellowBright("[WARNING]: " + util.format.apply(null, arguments)));
};

/**
 * Write a success output in the console
 * @param {String} text Text to write in the console
 */
exports.writeSuccess = function writeSuccess(text) {
    console.log(clc.greenBright("[SUCCESS]: " + util.format.apply(null, arguments)));
};

/**
 * Write an arbitrary message in the console without specific prefix
 * @param {String} text Text to write in the console
 */
exports.writeMessage = function writeMessage(text) {
    console.log(util.format.apply(null, arguments));
};

/**
 * Get a new zip object
 */
exports.getNewZip = function getNewZip() {
    return new Zip();
};

/**
 * Format the date for xml.
 * If no date in arg, use the current date
 * @param {Date} [date] Date to format
 */
exports.formatXmlDate = function formatXmlDate(date) {
    (date = date || new Date());
    return padStr(date.getFullYear()) + '-' + padStr(1 + date.getMonth()) + '-' + padStr(date.getDate());
};

/**
 * Pad the number with one 0 when < 10
 * @param {Number} i Number to pad
 * @return {String}
 */
function padStr(i) {
    return (i < 10) ? "0" + i : "" + i;
}

/**
 * Test if a directory exists
 * @param {String} path Path of the directory
 * @param {Function} callback Callback function with err, exists arguments
 */
exports.dirExists = function dirExists (path, callback) {
    fs.stat(path, function(err) {
        // errno 2 -- ENOENT, No such file or directory
        if (err && err.errno === 2) {
            callback(null, false);
        } else {
            callback(err, err ? false : true);
        }
    });
};

/**
 * Indicates if the file should be ignore
 *
 * @param {String} filename Name of the file
 * @return {Boolean} True when should be ignored
 */
exports.isIgnoreFile = function isIgnoreFile(filename) {
    if (!exports.adcIgnoreFiles) {
        exports.adcIgnoreFiles = fs.readFileSync(pathHelper.resolve(__dirname, "../" + exports.ADC_IGNORE_FILE_NAME), 'utf8');
    }

    if (!exports.adcIgnoreFilesRules) {
        var lines = exports.adcIgnoreFiles.split('\n'),
            rgExp = [];
        lines.forEach(function (line) {
            line = line.replace(/(#.*)/g, '');
            line = line.replace(/\s/g, '');
            line = line.replace(/\r/g, '');
            if (!line) return;
            line = line.replace(/\./g, "\\.");
            line = line.replace(/-/g, "\\-");
            line = line.replace(/\*/g, ".*");
            rgExp.push(line);
        });

        exports.adcIgnoreFilesRules = new RegExp("(" + rgExp.join("|") + ")$", "gi");
    }

    return exports.adcIgnoreFilesRules.test(filename);
};

/**
 * Return the entire directory structure
 *
 *  [
 *      {
 *          name : 'folder',
 *          sub  : [
 *              {
 *                  name : 'sub folder',
 *                  sub  : []
 *              },
 *              {
 *                  name : 'sub folder 2'
 *                  sub  : [
 *                      'file',
 *                      'file2'
 *                  ]
 *              }
 *          ]
 *      }
 * ]
 *
 * @param {String} path Path of the root directory
 * @param {Function} callback Callback function
 */
exports.getDirStructure = function getDirStructure(path, callback) {
    fs.stat(path, function verifyRoot(err, stat) {
        if (err) {
            return callback(err);
        }
        if (!stat.isDirectory()) {
            return callback(new Error("path: " + path + " is not a directory"));
        }

        function record(root, file, struct, cb) {
            var fullPath = root + '/' + file,
                stat;
            try {
                stat = fs.statSync(fullPath);
            } catch(err) {
                if (cb) cb();
                return;
            }

            if (!stat.isDirectory()) {
                struct.push(file);
            } else {
                struct.push({
                    name : file,
                    sub  : []
                });

                // Recurse
                var files      = fs.readdirSync(fullPath),
                    lastStruct = struct[struct.length -1].sub;
                if (files && Array.isArray(files)) {
                    files.forEach(function (f) {
                        record(fullPath, f, lastStruct);
                    });
                }
            }
            if (cb) cb();
        }

        // Read through all the files in this directory
        var structure = [],
            files     = fs.readdirSync(path),
            treat     = 0,
            rootLength = files && files.length;

        if (!files || !Array.isArray(files) || !rootLength) {
            callback(null, structure);
        }

        function incrementTreat() {
            treat++;
            if (treat === rootLength) {
                callback(null, structure);
            }
        }
        files.forEach(function (file) {
            record(path, file, structure, incrementTreat);
        });
    });
};

/**
 * Returns the list of templates directory
 *
 * It searches in the user data folder, the program data folder and the installation program folder
 *
 * @param {Function} callback Callback
 * @param {Error} callback.err Error
 * @param {Object[]} callback.dirs List of template
 * @param {String} callback.dirs[].name Name of the template
 * @param {String} callback.dirs[].path Path of the template directory
 */
exports.getTemplateList = function getTemplateList(callback) {
    // 1. Get the templates from the application path
    // 2. Get the templates from the PROGRAM_DATA path
    // 3. Get the templates from the USER_DATA path
    var result = [], map = {};
    function addFiles(parent, files) {
        for (var i = 0, l = files.length; i < l; i++) {
            var fullPath = pathHelper.join(parent, files[i]),
                stat = fs.statSync(fullPath),
                name, lowerName, dir;
            if (stat.isDirectory()) {
                name = pathHelper.basename(files[i]);
                lowerName = name.toLowerCase();
                dir = {
                    name : name,
                    path : fullPath
                };
                if (lowerName in map) {
                    result[map[lowerName]] = dir;
                } else {
                    map[lowerName] = result.length;
                    result.push(dir);
                }
            }
        }
    }

    // 1.
    var sysTemplatePath = pathHelper.resolve(__dirname, '../../');
    sysTemplatePath = pathHelper.join(sysTemplatePath, exports.TEMPLATES_PATH);
    fs.readdir(sysTemplatePath, function (err, files) {
        if (!err) {
            addFiles(sysTemplatePath, files);
        }

        // 2.
        var programDataPath = process.env.ALLUSERSPROFILE || process.env.ProgramData || '';
        programDataPath = pathHelper.join(programDataPath, exports.APP_NAME , exports.TEMPLATES_PATH);
        fs.readdir(programDataPath, function (err, files) {
            if (!err) {
                addFiles(programDataPath, files);
            }

            // 3.
            var userDataPath = process.env.APPDATA || '';
            userDataPath = pathHelper.join(userDataPath, exports.APP_NAME , exports.TEMPLATES_PATH);
            fs.readdir(userDataPath, function (err, files) {
                if (!err) {
                    addFiles(userDataPath, files);
                }

                callback(null, result);
            });
        });
    });
};


/**
 * Returns the path of the template according to his name
 *
 * It searches in the user data folder, the program data folder and the installation program folder
 *
 * @param {Function} callback Callback
 * @param {Error} callback.err Error
 * @param {String} callback.path Path of the template
 */
exports.getTemplatePath = function getTemplatePath(name, callback) {
    // 1. Search in the USER_DATA path
    // 2. Search in the PROGRAM_DATA path
    // 3. Search in the installation path

    // 1.
    var userDataPath = process.env.APPDATA || '';
    userDataPath = pathHelper.join(userDataPath, exports.APP_NAME , exports.TEMPLATES_PATH, name);
    exports.dirExists(userDataPath, function (err, exist) {
        if (exist) {
            callback(null, userDataPath);
            return;
        }

        // 2.
        var programDataPath = process.env.ALLUSERSPROFILE || process.env.ProgramData || '';
        programDataPath = pathHelper.join(programDataPath, exports.APP_NAME , exports.TEMPLATES_PATH, name);
        exports.dirExists(programDataPath, function (err, exist) {
            if (exist) {
                callback(null, programDataPath);
                return;
            }

            // 3.
            var sysTemplatePath = pathHelper.resolve(__dirname, '../../');
            sysTemplatePath = pathHelper.join(sysTemplatePath, exports.TEMPLATES_PATH, name);
            exports.dirExists(sysTemplatePath, function (err, exist) {
                if (exist) {
                    callback(null, sysTemplatePath);
                    return;
                }

                callback(new Error(util.format(exports.messages.error.cannotFoundTemplate, name)), null);
            });
        });
    });
};

/**
 * Create a new sequence of function to call
 * @param {Array} sequence Array of function to call one by one
 * @param {Function} callback Callback function to execute at the end of the sequence
 * @param {Object} [scope] Scope of function to execute (this)
 * @constructor
 */
function Sequence(sequence, callback, scope) {
    this.current  = -1;
    this.sequence = sequence;
    this.callback = callback;
    this.scope    = scope;
}

/**
 * Return the index of the next function to execute
 * @return {Number}
 */
Sequence.prototype.nextIndex = function nextIndex() {
    if (!this.sequence || !Array.isArray(this.sequence) || !this.sequence.length) {
        return -1;
    }
    var i  = (this.current + 1),
        l  = this.sequence.length;
    for (;i < l; i++) {
        if (typeof this.sequence[i] === 'function') {
            return i;
        }
    }
    return -1;
};

/**
 * Indicates if there is another function to call in the sequence stack
 * @returns {boolean}
 */
Sequence.prototype.hasNext = function hasNext() {
    return (this.nextIndex() !== -1);
};


/**
 * Execute the next function
 * @param {Error} err Error
 */
Sequence.prototype.resume = function resume(err) {
    var index = this.nextIndex();
    if (index === -1 || err) {
        if (typeof this.callback === 'function') {
            this.callback.call(this.scope, err);
        }
        return;
    }
    this.current = index;
    this.sequence[this.current].call(this.scope);
};

exports.Sequence = Sequence;




