(function(module) {

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
    Project.all = rawData.map(function(obj) {
      return new Project(obj);
    });
  };

  //////////////////////////////////////////////////////////////////////////////
  Project.getDataFromFile = function() {
    $.getJSON('/data/projects.json', function(rawData, status, XHR) {
      Project.loadContent(rawData);
      localStorage.eTag = JSON.stringify(XHR.getResponseHeader('eTag'));
      localStorage.rawData = JSON.stringify(rawData);
      projectView.initIndexPage();
    });
  };

  Project.getDataFromStorage = function() {
    Project.loadContent(JSON.parse(localStorage.rawData));
    projectView.initIndexPage();
  };

  Project.fetchContent = function() {
    if (localStorage.rawData) {
      $.ajax({
        url: '/data/projects.json',
        type: 'head',
        success: function(data, status, jqXHR) {
          if (JSON.parse(localStorage.eTag) === jqXHR.getResponseHeader('eTag')) {
            Project.getDataFromStorage();
          } else {
            Project.getDataFromFile();
          }
        }
      });
    } else {
      Project.getDataFromFile();
    }
  };

  module.Project = Project;

})(window);
