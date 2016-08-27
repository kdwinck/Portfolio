(function(module) {

  var repos = {};

  repos.all = [];

  repos.getData = function(callback) {
    $.get('/github/users/kdwinck/repos' +
          '?per_page=10' +
          '$sort=updated')
    .done(function(data) {
      repos.all = data.filter(function(ele) {
        return ele.owner.login === 'kdwinck';
      });
      callback();
    });
  };

  module.repos = repos;

})(window);
