(function(module) {
  var projectsController = {};

  Project.fetchContent(projectView.initIndexPage);

  projectsController.init = function(ctx, next) {
    next();
  };

  module.projectsController = projectsController;
})(window);
