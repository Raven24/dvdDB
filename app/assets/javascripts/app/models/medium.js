
app.models.Medium = Backbone.Model.extend({

  initialize: function(attr) {
    this.ownerships = new app.collections.Ownerships(attr.ownerships);
  }
});
