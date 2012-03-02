
app.models.Ownership = Backbone.Model.extend({

  urlRoot: "/ownerships",

  toJSON: function(){
    return {
      ownership: Backbone.Model.prototype.toJSON.call(this)
    };
  }
});
