 
app.collections.Media = app.collections.Base.extend({
  url  : "/media",

  initialize: function(models, options) {
    if(options.url) this.url = options.url;
  },
  
  model: function(attrs, opts) {
    var modelClass = app.models.Medium;
    return new modelClass(attrs, opts);
  }
});
