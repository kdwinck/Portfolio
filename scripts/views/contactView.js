(function(module) {
  contactView = {};

  contactView.showContact = function() {
    $('.tab-content').hide();
    $('#contact').show();
  };

  module.contactView = contactView;
})(window);
