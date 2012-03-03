 
app.views.Loader = app.views.Base.extend({

  id: "loader",

  initialize: function() {
    this.hide();
  },

  show: function() {
    this.$el.show();
  },

  hide: function() {
    this.$el.hide();
  },

  render: function() {
    this.$el.html(
      $("<img />", {
        "src"  : "/assets/loading.gif",
        "class": "loader"
      })
    );
    
    return this;
  }

});
