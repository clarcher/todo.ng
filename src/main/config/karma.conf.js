module.exports = function(config) {
  config.set({
basePath : '../',
files : [ '**/lib/angular/*.js',
          '**/test/lib/angular/angular-mocks.js', 
          '**/webapp/js/app/*.js',
          '**/test/unit/*.js' ],

preprocessors :
{
  '/webapp/js/app/*.js': 'coverage'
},

frameworks : ['jasmine'],

plugins : ['karma-jasmine','karma-junit-reporter','karma-phantomjs-launcher','karma-coverage'],

autoWatch : false,

browsers : ['PhantomJS'],

singleRun : true,

reporters : ['junit','coverage'],

logLevel : config.LOG_DEBUG ,


coverageReporter: {
    type : 'lcovonly',                
    dir : '../../target/karma-coverage'
  },

  junitReporter: {
      outputFile: '../../target/surefire-reports-karma/TEST-karma.xml'
    },
  });
};