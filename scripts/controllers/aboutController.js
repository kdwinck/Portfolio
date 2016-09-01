(function(module) {
  var aboutController = {};

  aboutController.init = function(ctx, next) {
    next();
  };

  module.aboutController = aboutController;
})(window);
