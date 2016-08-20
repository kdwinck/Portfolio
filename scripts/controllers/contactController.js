(function(module) {
  var contactController = {};

  contactController.init = function() {
    contactView.showContact();
  };

  module.contactController = contactController;
})(window);
