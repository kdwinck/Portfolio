page('/', projectsController.init, projectView.showProjects);
page('/about', aboutController.init, aboutView.showAbout);
page('/contact', contactController.init, contactView.showContact);
page('/github', githubController.init, repos.getData, githubView.showRepos);

page('*', function() {
  console.log('404');
});

page();
