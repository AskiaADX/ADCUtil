var fs      = require('fs');
var path    = require('path');
var common  = require('./common/common.js');
var errMsg  = common.messages.error;
var Validator    = require('./validator/ADCValidator.js').Validator;
var Builder      = require('./builder/ADCBuilder.js').Builder;
var Show         = require('./show/ADCShow.js').Show;
var Generator    = require('./generator/ADCGenerator.js').Generator;
var Configurator = require('./configurator/ADCConfigurator.js').Configurator;

/**
 * Object used to generate, validate, show and build an ADC
 *
 *
 * Example of usage of existing ADC
 *
 *      var ADC = require('adcutil').ADC;
 *      var myAdc = new ADC('path/to/adc/dir');
 *
 *      // Validate an ADC
 *      myAdc.validate({test : false, autoTest : false}, function (err, report) {
 *          // Callback when the ADC structure has been validated
 *      });
 *
 *      // Show the output of an ADC
 *      myAdc.show({ output : 'fallback', fixture : 'single.xml'  },  function (err, output) {
 *          // Callback with the output of the ADC
 *      });
 *
 *      // Build the ADC (package it)
 *      myAdc.build({test : false, autoTest : false}, function (err, path, report) {
 *          // Callback when the ADC has been built
 *      });
 *
 * Generate and use the new ADC instance
 *
 *      ADC.generate('myNewADC', {output : '/path/of/parent/dir', template : 'blank'}, function (err, adc) {
 *          console.log(adc.path);
 *          adc.load(function (err) {
 *              if (err) {
 *                  console.log(err);
 *                  return;
 *              }
 *              console.log(adc.configurator.info.get());
 *          });
 *      });
 *
 *
 * @class ADC
 */
function ADC(adcDirPath) {
    if (!adcDirPath) {
        throw new Error(errMsg.invalidPathArg);
    }

    // Let it throw an exception
    fs.statSync(adcDirPath);

    /**
     * Path to the ADC directory
     * @type {string}
     */
    this.path = path.normalize(adcDirPath);

    /**
     * Configurator of the ADC
     * Expose the object to manipulate the config.xml
     *
     * @type {ADC.Configurator}
     */
    this.configurator = null;
}

/**
 * Create a new instance of ADC object
 *
 *
 *      var ADC = require('adcutil').ADC;
 *      var myAdc = new ADC('path/to/adc/dir');
 *
 * @constructor
 * @param {String} adcDirPath Path of the ADC directory
 */
ADC.prototype.constructor = ADC;

/**
 * Load the config of the current ADC instance
 *
 *
 *      var ADC = require('adcutil').ADC;
 *      var myAdc = new ADC('path/to/adc/dir');
 *
 *      // Load an ADC
 *      myAdc.load(function (err) {
 *          // Callback when the ADC has been loaded
 *      });
 *
 * @param {Function} [callback] Callback function
 * @param {Error} [callback.err] Error
 */
ADC.prototype.load = function load(callback) {
    var configurator = new Configurator(this.path),
        self        = this;
    callback = callback || function (){};
    configurator.load(function (err) {
        if (err) {
            callback(err);
            return;
        }
        self.configurator = configurator;
        callback(null);
    });
};

/**
 * Validate the current ADC instance
 *
 *
 *      var ADC = require('adcutil').ADC;
 *      var myAdc = new ADC('path/to/adc/dir');
 *
 *      // Validate an ADC
 *      myAdc.validate({test : false, autoTest : false}, function (err, report) {
 *          // Callback when the ADC structure has been validated
 *      });
 *
 * @param {Object} [options] Options of validation
 * @param {Boolean} [options.test=true] Run unit tests
 * @param {Boolean} [options.autoTest=true] Run auto unit tests
 * @param {Boolean} [options.xml=true] Validate the config.xml file
 * @param {Function} [callback] Callback function
 * @param {Error} [callback.err] Error
 * @param {Object} [callback.report] Validation report
 */
ADC.prototype.validate = function validate(options, callback) {
    var validator = new Validator(this.path);
    validator.validate(options, callback);
};

/**
 * Build the ADC
 *
 *      var ADC = require('adcutil').ADC;
 *      var myAdc = new ADC('path/to/adc/dir');
 *
 *      // Build the ADC (package it)
 *      myAdc.build({test : false, autoTest : false}, function (err, path, report) {
 *          // Callback when the ADC has been built
 *      });
 *
 * @param {Object} [options] Options of validation
 * @param {Boolean} [options.test=true] Run unit tests
 * @param {Boolean} [options.autoTest=true] Run auto unit tests
 * @param {Boolean} [options.xml=true] Validate the config.xml file
 * @param {Function} [callback] Callback function
 * @param {Error} [callback.err] Error
 * @param {String} [callback.outputPath] Path of the output
 * @param {Object} [callback.report] Validation report
 */
ADC.prototype.build = function build(options, callback){
    var builder = new Builder(this.path);
    builder.build(options, callback);
};

/**
 * Show the ADC output
 *
 *      var ADC = require('adcutil').ADC;
 *      var myAdc = new ADC('path/to/adc/dir');
 *
 *      // Show the output of an ADC
 *      myAdc.show({ output : 'fallback', fixture : 'single.xml'  },  function (err, output) {
 *          // Callback with the output of the ADC
 *      });
 *
 * @param {Object} options Options
 * @param {String} options.output Name of the ADC Output to use
 * @param {String} options.fixture FileName of the ADC fixture to use
 * @param {String} [options.masterPage] Path of the master page to use
 * @param {Function} callback Callback function
 * @param {Error} callback.err Error
 * @param {String} callback.output Output string
 */
ADC.prototype.show = function show(options, callback) {
    var show = new Show(this.path);
    show.show(options, callback);
};

/**
 * Generate a new ADC structure
 *
 *      // Generate the ADC structure in '/path/of/parent/dir/myNewADC'
 *      ADC.generate('myNewADC', {output : '/path/of/parent/dir', template : 'blank'}, function (err, adc) {
 *          console.log(adc.path);
 *      });
 *
 * @param {String} name Name of the ADC to generate
 * @param {Object} [options] Options
 * @param {String} [options.output=process.cwd()] Path of the output director
 * @param {String} [options.template="blank"] Name of the template to use
 * @param {Function} [callback]
 * @param {Error} [callback.err] Error
 * @param {ADC} [callback.adc] Instance of the new generated ADC
 * @static
 */
ADC.generate = function generate(name, options, callback) {
    var generator = new Generator();
    // Swap the options
    if (typeof  options === 'function') {
        callback = options;
        options  = null;
    }
    callback = callback || function () {};

    generator.generate(name, options, function (err, outputPath) {
        if (err) {
            callback(err, null);
            return;
        }
        callback(null, new ADC(outputPath));
    });
};


// Make it public
exports.ADC = ADC;

