var projectView = {};

projectView.populateTypeFilter = function() {
  $('article').each(function() {
    if(!$(this).hasClass('template')) {
      var $type = $(this).find('header p').text();
      var optionTag = '<option value="' + $type + '">' + $type + '</option>';
      if ($('select option[value="' + $type + '"]').length === 0) {
        $('select').append(optionTag);
      }
    }
  });
};

projectView.sortByType = function() {
  $('select').on('change', function() {
    if ($(this).val()) {
      $('article').hide();
      var $type = $(this).val();
      $('article[data-type="' + $type + '"]').fadeIn('slow');
    } else {
      $('article').show(); /// will show all projects except the template
    }
  });
};

$(function() {
  projectView.populateTypeFilter();
  projectView.sortByType();
});
