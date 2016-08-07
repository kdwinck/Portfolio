//////////// wrap entire file in an IIFE to protect scope ///////////////////////

(function(module) {

  var projectView = {};

  //////// populate filter helper function ////////////////////////////
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
        Project.all.sort(function (a, b) {
          return (new Date(a.date) - new Date(b.date));
        });
        projectView.appendToPage();
      } else {
        // sort by most recent
        Project.all.sort(function (a, b) {
          return (new Date(b.date) - new Date(a.date));
        });
        projectView.appendToPage();
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
      $(this).effect('bounce', {times: 3, distance: 15}, 1000);
    });
  };

  projectView.handleNavigation = function() {
    $('nav li').on('click', function() {
      var $whatToShow = $(this).data('tab');
      $('.tab-content').hide();
      $('#' + $whatToShow).show();
    });

    $(function() {
      $('.tab-content').hide();
      $('#projects-section').show();   //show projects section as default(home)
    });
  };

  projectView.toggleNavIcon = function() {
    $('#banner').on('click', '.icon-menu-1', function() {
      $(this).parent().siblings().slideToggle(500);
    });
  };

  projectView.appendToPage = function() {
    Project.all.forEach(function(proj) {
      $('#projects').append(proj.toHtml());
    });
    $('#fact').append(Project.totalCss);
  };

  projectView.initIndexPage = function() {
    projectView.appendToPage();
    projectView.populateFilter('type');
    projectView.populateFilter('completion');
    projectView.handleNavigation();
    projectView.sortByType();
    projectView.sortByCompletion();
    projectView.sortByDate();
    projectView.sortable();
    projectView.excitedIcons();
    projectView.toggleNavIcon();
  };

  module.projectView = projectView;  // create a projectView property on the window object

})(window);
