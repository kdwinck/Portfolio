(function(module) {

  var githubController = {};

  githubController.init = function() {
    repos.getData(githubView.showRepos);
  };

  module.githubController = githubController;

})(window);
