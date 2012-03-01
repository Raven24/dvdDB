 
app.views.Media = app.views.Base.extend({

  id: "media",

  initialize: function() {
    if( this.options.pagination ) {
      this.pagination = this.options.pagination;
      this.pagination.bind("change", this.pageUpdate, this);
    }
    
    this.collection.bind("fetched", this.done, this);
    this.collection.bind("add", this.renderModel, this);
  },

  render: function() {
    var minHeight = this.$el.height();
    this.$el.empty().css('minHeight', minHeight);    
    
    if( this.collection.length == 0 ) {
      this.collection.fetch({add: true});
      this.appendLoader();
    } else {
      this.collection.each(this.renderModel, this)
      this.done();
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
  },

  pageUpdate: function() {
    this.collection.reset();
    this.collection.url = this.pagination.get("url");
    this.render();
  },

  done: function() {
    this.removeLoader();
    this.$el.css('minHeight','');
  }

});
