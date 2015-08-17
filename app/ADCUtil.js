#!/usr/bin/env node

var Command = require('../node_modules/commander').Command;
var program = new Command();


program
    .version('1.1.0')
    .option('-o, --output <name>', 'name of the output to display or path to the output directory for the generation')
    .option('-f, --fixture <name>', 'name of the fixture to use for the `show` command')
    .option('-m, --masterPage <path>', 'path of the master page to use for the `show` command')
    .option('-p, --properties <props>', 'ADC properties (in url query string format) to set for the `show` command')
    // .option('-f, --force', 'overwrite the output directory when it exist')
    .option('-T, --no-test', 'skip the execution of ADC unit tests')
    .option('-X, --no-xml', 'skip the validation of the config.xml file')
    .option('-A, --no-autoTest', 'skip the execution of the auto-generated unit tests')
    .option('-t, --template <name>', 'name of the template to use to generate the ADC');


program
    .command('generate <name>')
    .description('generate a new ADC structure')
    .action(function generateADC(name) {
        var adcGenerator = require('./generator/ADCGenerator.js');
        adcGenerator.generate(program, name);
    });

program
    .command('validate [<path>]')
    .description('validate the uncompressed ADC structure')
    .action(function validateADC(path) {
        var adcValidator = require('./validator/ADCValidator.js');
        adcValidator.validate(program, path);
    });

program
    .command('build [<path>]')
    .description('build the ADC file')
    .action(function buildADC(path) {
        var adcBuilder = require('./builder/ADCBuilder.js');
        adcBuilder.build(program, path);
    });

program
    .command('show [<path>]')
    .description('show the output of the ADC')
    .action(function showADC(path) {
        var adcShow = require('./show/ADCShow.js');
        adcShow.show(program, path);
    });

program
    .command('interactive')
    .description('test interactive mode')
    .action(function interactive() {
        var spawn = require('child_process').spawn,
            args     = [
                'interactive',
                process.cwd()
            ];

        var path = require('path');
        var common = require('./common/common.js');
        var proc = spawn('.\\' + common.ADC_UNIT_PROCESS_NAME, args, {
            cwd   : path.join(process.cwd(), common.ADC_UNIT_DIR_PATH),
            env   : process.env
        });
        var callCount = 0;
        proc.stdout.on('data', function (data) {
            if (callCount) {
                console.log(data.toString());
            }
            callCount++;
            if (callCount === 1) {
                proc.stdin.write('show -output:default -fixture:single.xml ' + path.join(process.cwd(), '/tmp/test/\n'));
            }
            if (callCount === 2) {
                proc.stdin.write('show -output:fallback -fixture:single.xml ' + path.join(process.cwd(), '/tmp/test/\n'));
            }
            if (callCount === 3) {
                proc.stdin.write('help\n');
            }
        });


        /*var proc = new InteractveADXShell(dir);
        proc.exec('show ....', function (err, stdout, stderr) {

        });*/
    });

program.parse(process.argv);
