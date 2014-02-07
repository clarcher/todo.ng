module.exports = function(config) {
  config.set({
basePath : '../',
files : [ '**/webapp/lib/angular/angular.js',
          '**/webapp/lib/angular/angular-*.js',
          '**/webapp/lib/restangular/*.js',
          '**/test/lib/angular/angular-mocks.js', 
          '**/webapp/js/*.js',
          '**/test/unit/*.js' ],

preprocessors :
{
//  '**/webapp/js/*.js': 'coverage'
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