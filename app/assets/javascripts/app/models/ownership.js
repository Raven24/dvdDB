
app.models.Ownership = Backbone.Model.extend({

  toJSON: function(){
    return {
      ownership: Backbone.Model.prototype.toJSON.call(this)
    };
  }
});
