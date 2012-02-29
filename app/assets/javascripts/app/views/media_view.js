 
app.views.Media = app.views.Base.extend({

  id: "media",

  initialize: function() {
    this.collection.bind("fetched", this.removeLoader, this);
    this.collection.bind("add", this.renderModel, this);
  },

  render: function() {
    if(this.collection.fetch({add: true})) {
      this.appendLoader();
    }
    return this;
  },

  renderModel: function(medium) {
    var subView = new app.views.Medium({
      model: medium
    });
    this.$el.append( subView.render().el );
  },

  appendLoader: function() {
    $("#loader").html(
      $("<img />", {
        "src"  : "/assets/loading.gif",
        "class": "loader"
      })
    );
  },

  removeLoader: function() {
    $("#loader").empty();
  }

});
