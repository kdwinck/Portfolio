(function(module) {
  var contactController = {};

  contactController.init = function(ctx, next) {
    next();
  };

  module.contactController = contactController;
})(window);
