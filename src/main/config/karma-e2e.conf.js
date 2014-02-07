module.exports = function(config) {
  config.set({
basePath : '../',


files : ['**/test/e2e/*.js'],

autoWatch : false,

plugins : [ 'karma-jasmine','karma-junit-reporter','karma-phantomjs-launcher','karma-ng-scenario'],

browsers : ['PhantomJS'],

singleRun : true,

proxies : {  '/': 'http://localhost:3000/'},

logLevel : config.LOG_DEBUG ,

reporters : ['junit'],

junitReporter : {
  outputFile: '../../target/karma-e2e/TEST-karma-e2e.xml'
}
  
  
  });
};

