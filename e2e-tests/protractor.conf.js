//jshint strict: false


//was not able to get protractor to run using npm run protractor, but was able to get it going using protractor protractor.conf.js (or protractor e2e-tests/protractor.conf.js)
exports.config = {

  allScriptsTimeout: 11000,

  specs: [
    '*.js'
  ],

  capabilities: {
    'browserName': 'chrome'
  },

  baseUrl: 'http://localhost:8000/',

  framework: 'jasmine',

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }

};
