///////////////////////////////////////////////////////////////////////////////
function Project(obj) {
  this.title = obj.title;
  this.type = obj.type;
  this.completion = obj.completion;
  this.date = obj.date;
  this.url = obj.url;
  this.body = obj.body;
  this.img = obj.img;
  this.video = obj.video;
}

Project.all = [];

Project.prototype.toHtml = function() {
  // get template from the DOM
  var source = $('#project-template').html();
  // create template function
  var template = Handlebars.compile(source);

  // pass in data to the template function
  return template(this);
};

///////////////////////////////////////////////////////////////////////////////

Project.loadContent = function(rawData) {
  rawData.forEach(function(obj) {
    Project.all.push(new Project(obj));
  });
};

//////////////////////////////////////////////////////////////////////////////

Project.fetchContent = function() {
  if (localStorage.rawData) {
    var data = JSON.parse(localStorage.getItem('rawData'));
    Project.loadContent(data);
    projectView.initIndexPage();
  } else {
    $.getJSON('../data/projects.json', function(data) {
      console.log(data);
    }).done(function(data) {
      Project.loadContent(data);
      var stringData = JSON.stringify(data);
      localStorage.setItem('rawData', stringData);
      projectView.initIndexPage();
    });
  }
};
