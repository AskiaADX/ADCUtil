describe('ADCShow', function () {

    var common,
        InteractiveADXShell,
        adcShow,
        Show,
        spies = {},
        errMsg,
        successMsg;

    beforeEach(function () {
        // Clean the cache, obtain a fresh instance of the adcShow each time
        var adcShowKey   = require.resolve('../../app/show/ADCShow.js'),
            commonKey       = require.resolve('../../app/common/common.js');

        delete require.cache[commonKey];
        common = require('../../app/common/common.js');

        delete require.cache[adcShowKey];
        adcShow = require('../../app/show/ADCShow.js');

        Show = adcShow.Show;

        // Messages
        errMsg      = common.messages.error;
        successMsg  = common.messages.success;

        // Court-circuit the validation outputs
        spies.writeError   = spyOn(common, 'writeError');
        spies.writeSuccess = spyOn(common, 'writeSuccess');
        spies.writeMessage = spyOn(common, 'writeMessage');
        spies.dirExists    = spyOn(common, 'dirExists');

        InteractiveADXShell  = require('../../app/common/InteractiveADXShell.js').InteractiveADXShell;
        spies.interactiveExec = spyOn(InteractiveADXShell.prototype, 'exec');
    });


    function runSync(fn) {
        var wasCalled = false;
        runs( function () {
            fn(function () {
                wasCalled = true;
            });
        });
        waitsFor(function () {
            return wasCalled;
        });
    }


    describe('#show', function () {
        it("should output an error when the `output` option is not defined", function () {
            adcShow.show({});
            expect(common.writeError).toHaveBeenCalledWith(errMsg.noOutputDefinedForShow);
        });

        it("should output an error when the `fixture` option is not defined", function () {
            adcShow.show({
                output : 'Something'
            });
            expect(common.writeError).toHaveBeenCalledWith(errMsg.noFixtureDefinedForShow);
        });

        it("should call the program `ADXShell.exe` with the correct arguments", function () {
            var childProc = require('child_process'),
                spyExec   = spyOn(childProc, 'execFile');

            spyOn(process, 'cwd').andReturn('');

            spyExec.andCallFake(function (file, args) {
                expect(file).toBe('.\\ADXShell.exe');
                expect(args).toEqual(['show', '"-output:something"', '"-fixture:single.xml"', '"\\adc\\path\\dir"']);
            });
            adcShow.show({
                output : 'something',
                fixture : 'single.xml'
            }, '/adc/path/dir');

            expect(childProc.execFile).toHaveBeenCalled();
        });

        it("should call the program `ADCShell.exe` with the `-masterPage` parameter when it's defined", function() {
            var childProc = require('child_process'),
                spyExec   = spyOn(childProc, 'execFile');

            spyOn(process, 'cwd').andReturn('');

            spyExec.andCallFake(function (file, args) {
                expect(file).toBe('.\\ADXShell.exe');
                expect(args).toEqual(['show', '"-output:something"', '"-fixture:single.xml"', '"-masterPage:mp.html"', '"\\adc\\path\\dir"']);
            });
            adcShow.show({
                output : 'something',
                fixture : 'single.xml',
                masterPage : 'mp.html'
            }, '/adc/path/dir');

            expect(childProc.execFile).toHaveBeenCalled();
        });

        it("should call the program `ADCShell.exe` with the `-properties` parameter when it's defined", function() {
            var childProc = require('child_process'),
                spyExec   = spyOn(childProc, 'execFile');

            spyOn(process, 'cwd').andReturn('');

            spyExec.andCallFake(function (file, args) {
                expect(file).toBe('.\\ADXShell.exe');
                expect(args).toEqual(['show', '"-output:something"', '"-fixture:single.xml"', '"-masterPage:mp.html"', '"-properties:prop1=value1&prop2=value2&prop%203=value%2C%223"', '"\\adc\\path\\dir"']);
            });
            adcShow.show({
                output : 'something',
                fixture : 'single.xml',
                masterPage : 'mp.html',
                properties : 'prop1=value1&prop2=value2&prop%203=value%2C%223'
            }, '/adc/path/dir');

            expect(childProc.execFile).toHaveBeenCalled();
        });

        it("should run the `ADXShell` process using the InteractiveADXShell when it's defined in the options", function () {
            spyOn(process, 'cwd').andReturn('');

            var mockCommand;
            spies.interactiveExec.andCallFake(function (command) {
                mockCommand = command;
            });
            adcShow.show({
                output : 'something',
                fixture : 'single.xml',
                masterPage : 'mp.html',
                properties : 'prop1=value1&prop2=value2&prop%203=value%2C%223',
                adxShell : new InteractiveADXShell()
            }, '/adc/path/dir');
            expect(mockCommand).toBe('show "-output:something" "-fixture:single.xml" "-masterPage:mp.html" "-properties:prop1=value1&prop2=value2&prop%203=value%2C%223" "\\adc\\path\\dir"');
        });

        describe("API `callback`", function () {

            it("should call the `callback` function with error when an error occurred", function () {
                var show = new Show('adc/path/dir');
                runSync(function (done) {
                    show.show({}, function (err) {
                        expect(err instanceof  Error).toBe(true);
                        expect(err.message).toEqual(errMsg.noOutputDefinedForShow);
                        done();
                    });
                });
            });

            it("should write in the console when the `silent` option is not defined", function () {
                var childProc = require('child_process'),
                    spyExec = spyOn(childProc, 'execFile');

                spyOn(process, 'cwd').andReturn('');

                spyExec.andCallFake(function (file, args, options, cb) {
                    cb(null,null, new Error("ERROR"));
                });

                var show = new Show('adc/path/dir');
                var spyWriteError = spyOn(show, 'writeError');
                runSync(function (done) {
                    show.show({
                        output: 'something',
                        fixture: 'single.xml'
                    }, function () {
                        expect(spyWriteError).toHaveBeenCalled();
                        done();
                    });
                });
            });

            it("should not write in the console when the `silent` option is defined", function () {
                var childProc = require('child_process'),
                    spyExec = spyOn(childProc, 'execFile');

                spyOn(process, 'cwd').andReturn('');

                spyExec.andCallFake(function (file, args, options, cb) {
                    cb(null,null, new Error("ERROR"));
                });

                var show = new Show('adc/path/dir');
                var spyWriteError = spyOn(show, 'writeError');
                runSync(function (done) {
                    show.show({
                        output: 'something',
                        fixture: 'single.xml',
                        silent : true
                    }, function () {
                        expect(spyWriteError).not.toHaveBeenCalled();
                        done();
                    });
                });
            });

            it("should call the `callback` function with the output generated by the `ADXShell.exe` process", function () {

                var childProc = require('child_process'),
                    spyExec = spyOn(childProc, 'execFile');

                spyOn(process, 'cwd').andReturn('');

                spyExec.andCallFake(function (file, args, options, cb) {
                    cb(null, 'TEST OUTPUT', null);
                });

                var show = new Show('adc/path/dir');
                runSync(function (done) {
                    show.show({
                        output: 'something',
                        fixture: 'single.xml'
                    }, function (err, output) {
                        expect(output).toEqual('TEST OUTPUT');
                        done();
                    });
                });
            });

            it("should write in the console when `silent` option is not defined", function () {

                var childProc = require('child_process'),
                    spyExec = spyOn(childProc, 'execFile');

                spyOn(process, 'cwd').andReturn('');

                spyExec.andCallFake(function (file, args, options, cb) {
                    cb(null, 'TEST OUTPUT', null);
                });

                var show = new Show('adc/path/dir');
                var spyWriteMessage = spyOn(show, 'writeMessage');
                runSync(function (done) {
                    show.show({
                        output: 'something',
                        fixture: 'single.xml'
                    }, function (err, output) {
                        expect(spyWriteMessage).toHaveBeenCalled();
                        done();
                    });
                });
            });

            it("should not write in the console when `silent` option is defined", function () {

                var childProc = require('child_process'),
                    spyExec = spyOn(childProc, 'execFile');

                spyOn(process, 'cwd').andReturn('');

                spyExec.andCallFake(function (file, args, options, cb) {
                    cb(null, 'TEST OUTPUT', null);
                });

                var show = new Show('adc/path/dir');
                var spyWriteMessage = spyOn(show, 'writeMessage');
                runSync(function (done) {
                    show.show({
                        output: 'something',
                        fixture: 'single.xml',
                        silent : true
                    }, function (err, output) {
                        expect(spyWriteMessage).not.toHaveBeenCalled();
                        done();
                    });
                });
            });
        });
    });
});

