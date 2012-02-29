 
app.Router = Backbone.Router.extend({

  routes: {
    "media"    : "media",
    "media/:id": "medium",
    "genres"   : "genres",
    "languages": "languages",
  },

  media: function() {
    app.media = new app.collections.Media;
    app.page  = new app.views.Media({
      'collection': app.media
    }).render();
    $('#media').replaceWith(app.page.el);
  },

  medium: function(id) {
    app.medium = new app.models.Medium(modelAttributes);
    app.page   = new app.views.Medium({
      'model'       : app.medium,
      'className'   : 'single',
      'templateName': 'singleMedium'
    }).render();
    $('#medium').replaceWith(app.page.el);
  }
});