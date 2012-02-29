 
app.collections.Base = Backbone.Collection.extend({

  fetch: function() {
    var self = this;
    Backbone.Collection.prototype.fetch.apply(this, arguments).done(function(){
      self.trigger("fetched", self);
    });
  }
});
