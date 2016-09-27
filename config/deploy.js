/* jshint node: true */

module.exports = function(deployTarget) {
  var ENV = {
    build: {},
    git: {
      repo: 'git@github.com:fuse-mars/tutorial-ember-cli-1.13.14.git',
      branch: 'deployment',
      worktreePath: '/tmp/deploy-dist'
    }
  };

  if (deployTarget === 'development') {
    ENV.build.environment = 'development';
    // configure other plugins for development deploy target here
  }

  if (deployTarget === 'testing') {
    ENV.build.environment = 'development';
  }

  if (deployTarget === 'production') {
    ENV.build.environment = 'production';
    // configure other plugins for production deploy target here
  }

  // Note: if you need to build some configuration asynchronously, you can return
  // a promise that resolves with the ENV object instead of returning the
  // ENV object synchronously.
  return ENV;
};
