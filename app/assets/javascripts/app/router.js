 
app.Router = Backbone.Router.extend({

  routes: {
    "media"           : "media",
    "media/page/:page": "media",
    "media/new"       : "",
    "media/:id"       : "medium",
    ""                : "overview"/*,
    "genres"          : "genres",
    "languages"       : "languages"*/
  },

  overview: function() {
    app.media = new app.collections.Media(modelAttributes, {});
    app.possessions = new app.collections.Ownerships(userPossessions);
    app.page = new app.views.Media({
      'collection'  : app.media,
      'templateName': 'mediumSmall',
      'className'   : 'shortList',
      'autoFetch'   : false
    }).render();
    $('body #media').replaceWith(app.page.el);
  },

  media: function(page) {
    var attrs, opts;
    if(!page) {
      attrs = modelAttributes;
    } else {
      opts  = { 'url': '/media/page/'+page };
    }
    
    app.media = new app.collections.Media(attrs, opts);
    app.possessions = new app.collections.Ownerships(userPossessions);
    
    app.pagination = new app.models.Pagination({
      'pages'  : pages,
      'page'   : page,
      'baseUrl': "/media"
    });
    app.paginator = new app.views.Pagination({
      model: app.pagination
    }).render();
    app.page  = new app.views.Media({
      'collection': app.media,
      'pagination': app.pagination,
      'autoFetch' : true
    }).render();
    
    $('body #media').replaceWith(app.page.el);
    $('.pagination').replaceWith(app.paginator.el);
  },

  medium: function(id) {
    app.possessions = new app.collections.Ownerships(userPossessions);
    app.medium = new app.models.Medium(modelAttributes);
    app.page   = new app.views.Medium({
      'model'       : app.medium,
      'className'   : 'single',
      'templateName': 'mediumSingle'
    }).render();
    $('body #medium').replaceWith(app.page.el);
  }
});