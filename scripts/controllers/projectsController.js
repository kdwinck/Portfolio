(function(module) {
  var projectsController = {};

  Project.fetchContent(projectView.initIndexPage);

  projectsController.init = function() {
    projectView.showProjects();
  };

  module.projectsController = projectsController;
})(window);
