 
app.collections.Ownerships = app.collections.Base.extend({
  url  : "/ownerships",
  
  model: function(attrs, opts) {
    var modelClass = app.models.Ownership;
    return new modelClass(attrs, opts);
  },

  toJSON: function() {
    return this.map(function(elem) {
      return Backbone.Model.prototype.toJSON.apply(elem);
    });
  }
});
