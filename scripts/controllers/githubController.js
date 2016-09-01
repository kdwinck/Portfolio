(function(module) {

  var githubController = {};

  githubController.init = function(ctx, next) {
    next();
  };

  module.githubController = githubController;

})(window);
