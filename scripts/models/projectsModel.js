(function workDamnit(module) {

  function Project(obj) {
    this.title = obj.title;
    this.type = obj.type;
    this.completion = obj.completion;
    this.date = obj.date;
    this.url = obj.url;
    this.body = obj.body;
    this.img = obj.img;
    this.video = obj.video;
    this.css = obj.css;
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

  Project.getCssTotal = function() {
    Project.totalCss = Project.all.map(function(obj) {
      return obj.css;
    })
    .reduce(function(a, b) {
      return a + b;
    });
  };

  Project.addSemicolons = function() {
    Project.semis = 0;  // initalize value of semis to zero
    Project.semis += workDamnit.toString().split(';').length; // total semicolons in this file
  };

  //////////////////////////////////////////////////////////////////////////////
  Project.getDataFromFile = function(callback) {
    $.getJSON('/data/projects.json', function(rawData, status, XHR) {
      Project.loadContent(rawData);
      Project.getCssTotal();
      Project.addSemicolons();
      localStorage.eTag = JSON.stringify(XHR.getResponseHeader('eTag'));
      localStorage.rawData = JSON.stringify(rawData);
      callback();
    });
  };

  Project.getDataFromStorage = function(callback) {
    Project.loadContent(JSON.parse(localStorage.rawData));
    Project.getCssTotal();
    Project.addSemicolons();
    callback();
  };

  Project.fetchContent = function(callback) {
    if (localStorage.rawData) {
      $.ajax({
        url: '/data/projects.json',
        type: 'head',
        success: function(data, status, jqXHR) {
          if (JSON.parse(localStorage.eTag) === jqXHR.getResponseHeader('eTag')) {
            Project.getDataFromStorage(callback);
          } else {
            Project.getDataFromFile(callback);
          }
        }
      });
    } else {
      Project.getDataFromFile(callback);
    }
  };

  module.Project = Project;

})(window);
