(function(module) {

  var repos = {};

  repos.all = [];

  repos.getData = function(ctx, next) {
    $.get('/github/users/kdwinck/repos' +
          '?per_page=10' +
          '$sort=updated')
    .done(function(data) {
      repos.all = data.filter(function(ele) {
        return ele.owner.login === 'kdwinck';
      });
      next();
    });
  };

  module.repos = repos;

})(window);
