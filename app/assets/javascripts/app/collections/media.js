 
app.collections.Media = app.collections.Base.extend({
  url  : "/media",

  model: function(attrs, opts) {
    var modelClass = app.models.Medium;
    return new modelClass(attrs, opts);
  }
});
