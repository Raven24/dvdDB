 
app.collections.Ownerships = app.collections.Base.extend({
  url  : "/ownerships",
  
  model: function(attrs, opts) {
    var modelClass = app.models.Ownership;
    return new modelClass(attrs, opts);
  }
});
