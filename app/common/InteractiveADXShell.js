var childProcess = require('child_process');
var path         = require('path');
var common       = require('./common.js');


/**
 * Manage the ADXShell process in interactive mode.
 *
 * It allow a single instance creation of the ADXShell
 * and a bi-directional communication using the stdio of the spawn process
 *
 * @class InteractiveADXShell
 * @private
 */
function InteractiveADXShell(dir) {
    this.path = dir;
}

/**
 * Create an interactive spawn process with the ADXShell
 *
 * @constructor
 * @param {String} dir Path of the ADC directory
 */
InteractiveADXShell.prototype.constructor = InteractiveADXShell;


/**
 * Send the specified command in the ADXShell process
 *
 * @param {String} command Command to execute
 * @param {Function} callback
 */
InteractiveADXShell.prototype.exec = function exec(command, callback) {
    var self = this;
    var message = [],
        errorMessage = [],
        errTimeout;

    if (!self._process) {
        var root =  path.resolve(__dirname, "../../");
        self._process = childProcess.spawn('.\\' + common.ADC_UNIT_PROCESS_NAME, [
            'interactive',
            self.path
        ], {
            cwd   : path.join(root, common.ADC_UNIT_DIR_PATH),
            env   : process.env
        });
        self._process._firstData = true;
    }

    function onOutput(data) {
        if (self._process._firstData) {
            self._process._firstData = false;
            self._process.stdin.write(command + '\n');
            return;
        }
        var str = data.toString();
        if (!/^\[ADXShell:End\]/m.test(str)) {
            message.push(str);
        } else {
            // Remove the end of the message
            str = str.replace(/(\r?\n\[ADXShell:End\].*)/m, '');
            message.push(str);

            // Remove the listener at the end of the process
            self._process.stdout.removeListener('data', onOutput);
            self._process.stderr.removeListener('data', onError);

            if (typeof callback === 'function') {
                callback(null, message.join('').replace(/(\[ADXShell:End\].*)/m, ''));
            }
        }
    }

    function onError(data) {
        var str = data.toString();
        if (!/^\[ADXShell:End\]/m.test(str)) {
            errorMessage.push(str);
            // If an hard error the message end is never throw,
            // wait half a sec and send the message anyway
            clearTimeout(errTimeout);
            errTimeout = setTimeout(function () {
                onError('[ADXShell:End]');
            }, 500);
        } else {
            // Remove the end of the message
            str = str.replace(/(\r?\n\[ADXShell:End\].*)/m, '');
            errorMessage.push(str);

            // Remove the listener at the end of the process
            self._process.stdout.removeListener('data', onOutput);
            self._process.stderr.removeListener('data', onError);

            if (typeof callback === 'function') {
                callback(new Error(errorMessage.join('').replace(/(\[ADXShell:End\].*)/m, '')), null);
            }
        }
    }

    self._process.stdout.on('data', onOutput);
    self._process.stderr.on('data', onError);
    if (!self._process._firstData) {
        self._process.stdin.write(command  + '\n');
    }

};

exports.InteractiveADXShell = InteractiveADXShell;