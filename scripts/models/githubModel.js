(function(module) {

  var repos = {};

  repos.all = [];

  repos.getData = function(callback) {
    $.ajax({
      url: 'https://api.github.com/user/repos?sort=updated&per_page=10',
      type: 'GET',
      headers: {
        Authorization: 'token ' + githubToken
      }
    })
    .done(function(data) {
      repos.all = data.filter(function(ele) {
        return ele.owner.login === 'kdwinck';
      });
      callback();
    });
  };

  module.repos = repos;

})(window);
