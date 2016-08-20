(function(module) {
  aboutView = {};

  aboutView.showAbout = function() {
    $('.tab-content').hide();
    $('#about').show();
  };

  module.aboutView = aboutView;
})(window);
