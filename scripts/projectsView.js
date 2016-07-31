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
    // reset other filters
    $('#completion').val('');
    $('#date').val('');
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
    $('#type').val('');
    $('#date').val('');
  });
};

projectView.sortByDate = function() {
  $('#date').on('change', function() {
    $('#projects').empty();
    if ($(this).val()) {
      // sort by oldest
      projectsArray.sort(function (a, b) {
        if (a.date > b.date) {
          return 1;
        }
        if (a.date < b.date) {
          return -1;
        }
        return 0;
      });
      projectsArray.forEach(function(proj) {
        $('#projects').append(proj.toHtml());
      });
    } else {
      // sort by most recent
      projectsArray.sort(function (a, b) {
        if (a.date < b.date) {
          return 1;
        }
        if (a.date > b.date) {
          return -1;
        }
        return 0;
      });
      projectsArray.forEach(function(proj) {
        $('#projects').append(proj.toHtml());
      });
    }
    $('#type').val('');
    $('#completion').val('');
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
  projectView.sortByDate();
  projectView.sortable();
  projectView.excitedIcons();
});
