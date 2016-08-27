(function(module) {

  var githubView = {};

  var template = Handlebars.compile($('#repo-template').html());

  githubView.showRepos = function() {

    $('.tab-content').hide();
    $('#github').show();

    repos.all.forEach(function(ele) {
      $('#repos').append(template(ele));
    });
  };

  module.githubView = githubView;

})(window);
