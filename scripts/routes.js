page('/', projectsController.init);
page('/about', aboutController.init);
page('/contact', contactController.init);
page('/github', githubController.init);

page('*', function() {
  console.log('404');
});

page();
