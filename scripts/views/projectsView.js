//////////// wrap entire file in an IIFE to protect scope ///////////////////////

(function alsoWork(module) {

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
        // convert date properties to date objects and sort by oldest first
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

  projectView.showProjects = function() {
    $('.tab-content').hide();
    $('#projects-section').show();   //show projects section as default(home)
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
    $('#css-fact').append(Project.totalCss);
    $('#colons-fact').append(Project.semis);
  };

  projectView.addMoreSemis = function() {
    Project.semis += alsoWork.toString().split(';').length; // add semicolons from this file
  };

  projectView.initIndexPage = function() {
    projectView.addMoreSemis();
    projectView.appendToPage();
    projectView.populateFilter('type');
    projectView.populateFilter('completion');
    projectView.showProjects();
    projectView.sortByType();
    projectView.sortByCompletion();
    projectView.sortByDate();
    projectView.sortable();
    projectView.excitedIcons();
    projectView.toggleNavIcon();
  };

  module.projectView = projectView;  // create a projectView property on the window object

})(window);
