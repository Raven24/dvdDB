var JST = new Array;

var app = {

  collections : {},
  models : {},
  views : {},
  
  initialize : function() {

    // compile handlebars templates
    $('script[type="text/x-handlebars-template"]').each(function(){
      var elem = $(this);
      JST[elem.attr("id")] = Handlebars.compile(elem.html());
    });
    
    app.router = new app.Router();
    
    Backbone.history.start({
      pushState: true
    });
    
  }
};
