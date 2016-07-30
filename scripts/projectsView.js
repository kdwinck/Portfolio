var projectView = {};

projectView.populateFilter = function(id) {
  $('article').each(function() {
    var $value = $(this).data(id);
    var optionTag = '<option value="' + $value + '">' + $value + '</option>';
    if ($('#' + id + ' option[value="' + $value + '"]').length === 0) {
      $('#' + id).append(optionTag);
    }
  });
};

projectView.sortByType = function() {
  $('#type').on('change', function() {
    if ($(this).val()) {
      $('article').hide();
      var $type = $(this).val();
      $('article[data-type="' + $type + '"]').fadeIn('slow');
    } else {
      $('article').show(); /// will show all projects except the template
    }
  });
};

projectView.sortByCompletion = function() {
  $('#completion').on('change', function() {
    if ($(this).val()) {
      $('article').hide();
      var $comp = $(this).val();
      $('article[data-completion="' + $comp + '"]').fadeIn('slow');
    } else {
      $('article').show();
    }
  });
};

projectView.sortable = function() {
  $('#projects').sortable();
};

projectView.excitedIcons = function() {
  $('#social').on('mouseover', 'li', function() {
    $(this).effect('bounce', {times: 3, distance: 25}, 1000);
  });
};

$(function() {
  projectView.populateFilter('type');
  projectView.populateFilter('completion');
  projectView.sortByType();
  projectView.sortByCompletion();
  projectView.sortable();
  projectView.excitedIcons();
});
