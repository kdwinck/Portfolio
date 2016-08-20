(function(module) {
  var aboutController = {};

  aboutController.init = function() {
    aboutView.showAbout();
  };

  module.aboutController = aboutController;
})(window);
