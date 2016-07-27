////////////// Global Variables ///////////////////////////////////////////////
var projectsArray = [];

///////////////////////////////////////////////////////////////////////////////
function Project(obj) {
  this.title = obj.title;
  this.url = obj.url;
  this.body = obj.body;
  this.img = obj.img;
}

Project.prototype.toHtml = function() {
  // create a cloned version of the blank project article
  var $newProject = $('article.template').clone();

  // fill in the unique values of each project
  $newProject.find('h1').text(this.title);
  $newProject.find('a').attr('href', this.url);
  $newProject.find('img').attr('src', this.img);
  $newProject.find('.article-body').html(this.body);

  // create an HR element after every project
  $newProject.append('<hr>');

  // remove template class so article is visible
  $newProject.removeClass('template');

  return $newProject;
};

///////////////////////////////////////////////////////////////////////////////
projectData.forEach(function(obj) {
  projectsArray.push(new Project(obj));
});

projectsArray.forEach(function(proj) {
  $('#projects').append(proj.toHtml());
});
