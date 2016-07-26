var projectView = {};

projectView.populateTypeFilter = function() {
  $('article').each(function() {
    if(!$(this).hasClass('template')) {
      var type = $(this).find('header p').text();
      var optionTag = '<option value="' + type + '">' + type + '</option>';
      if ($('select option[value="' + type + '"]').length === 0) {
        $('select').append(optionTag);
      }
    }
  });
};

$(function() {
  projectView.populateTypeFilter();
});
