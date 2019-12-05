// Karma configuration

function getLocalIP () {
    var ifaces = require('os').networkInterfaces();
    for (var dev in ifaces) {
        var iface = ifaces[dev];
        for (var i = 0; i < iface.length; i++) {
            var alias = iface[i];
            if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
                return alias.address;
            }
        }
    }
}

function createWebdriver (extraConfig) {
    return Object.assign({
        'name': 'Karma',
        'base': 'WebDriver',
        'config': {
            'host': '192.168.220.146',
            'port': 4001
        },
        'f2etest.userid': 'User1574760266225',
        'f2etest.apiKey': 'ff3ab0a91aa479b433f1b8a5d8d78128',
        'pseudoActivityInterval': 30000
    }, extraConfig);
}

module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['mocha', 'chai'],

        // list of files / patterns to load in the browser
        files: [
            'sdk/**/*.min.js',
            'test/**/*.js'
        ],

        // list of files to exclude
        exclude: [
        ],

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            'sdk/**/*.min.js': ['coverage', 'babel'],
            'test/**/*.js': ['babel']
        },

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['mocha', 'coverage'],

        coverageReporter: {
            dir: './coverage',
            reporters: [
                { type: 'text' },
                { type: 'html' }
            ]
        },

        hostname: getLocalIP(),

        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

        customLaunchers: {
            'f2etest-chrome': createWebdriver({ browserName: 'chrome' }),
            'f2etest-firefox': createWebdriver({ browserName: 'firefox' }),
            'f2etest-ie8': createWebdriver({ browserName: 'internet explorer', version: '8' }),
            'f2etest-ie9': createWebdriver({ browserName: 'internet explorer', version: '9' }),
            'f2etest-ie10': createWebdriver({ browserName: 'internet explorer', version: '10' }),
            'f2etest-ie11': createWebdriver({ browserName: 'internet explorer', version: '11' })
        },

        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['Chrome', 'Safari', 'Firefox'],

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity
    })
}
