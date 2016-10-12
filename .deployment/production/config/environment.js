/* jshint node: true */
module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'app-test',
    environment: environment,
    baseURL: '/tutorial-ember-cli-1.13.14/',
    locationType: 'hash',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    contentSecurityPolicy: {
      'connect-src': "'self' https://mister-trainer.appspot.com http://www.google-analytics.com https://www.google-analytics.com",
      'script-src': "'self' 'unsafe-inline' *.google-analytics.com",
      'img-src': "'self' *.google-analytics.com"
    },
    
    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
    knowledgeUrl: 'https://mister-trainer.appspot.com'
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};

