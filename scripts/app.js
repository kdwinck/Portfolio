////////////// Global Variables ///////////////////////////////////////////////
var projectsArray = [];

///////////////////////////////////////////////////////////////////////////////
function Project(obj) {
  this.title = obj.title;
  this.type = obj.type;
  this.completion = obj.completion;
  this.url = obj.url;
  this.body = obj.body;
  this.img = obj.img;
}

Project.prototype.toHtml = function() {
  // get template from the DOM
  var source = $('#project-template').html();
  // create template function
  var template = Handlebars.compile(source);

  // pass in data to the template function
  var html = template(this);

  return html;
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
  $('#' + $whatToShow).toggle('blind');
});

$(function() {
  $('.tab-content').hide();
  $('#projects').show();     //show projects section as default(home)
});

///////////////////////////////////////////////////////////////////////////////
// toggle nav menu ///

$('#banner').on('click', '.icon-menu-1', function() {
  $(this).parent().siblings().slideToggle(500);
});
