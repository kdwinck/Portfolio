////////////// Global Variables ///////////////////////////////////////////////
var projectsArray = [];

///////////////////////////////////////////////////////////////////////////////
function Project(obj) {
  this.title = obj.title;
  this.type = obj.type;
  this.url = obj.url;
  this.body = obj.body;
  this.img = obj.img;
}

Project.prototype.toHtml = function() {
  // create a cloned version of the blank project article
  var $newProject = $('article.template').clone();

  // fill in the unique values of each project
  $newProject.find('h1').text(this.title);
  $newProject.find('header p').text(this.type);
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

$('nav li').on('click', function() {
  var $whatToShow = $(this).data('tab');
  $('.tab-content').hide();
  $('#' + $whatToShow).fadeIn(1000);
});

$(function() {
  $('.tab-content').hide();
  $('#projects').show();     //show projects section as default(home)
});

///////////////////////////////////////////////////////////////////////////////
// toggle nav menu ///

$('#banner').on('click', '.icon-menu-1', function() {
  $(this).parent().siblings().toggle(500);
});
