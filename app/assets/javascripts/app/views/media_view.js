 
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
    
    if( this.collection.length == 0 && this.options.autoFetch ) {
      this.collection.fetch({add: true});
      app.loader.show();
    } else {
      this.collection.each(this.renderModel, this)
      this.done();
    }
    
    return this;
  },

  renderModel: function(medium) {
    var opts = { 'model': medium };
    if( this.options.templateName ) opts.templateName = this.options.templateName;

    var subView = new app.views.Medium(opts);
    this.$el.append( subView.render().el );
  },

  noContent: function() {
    this.$el.html('<em class="grey">There is no content to display here</em>');
  },

  pageUpdate: function() {
    this.collection.reset();
    this.collection.url = this.pagination.get("url");
    this.render();
  },

  done: function() {
    if( this.collection.length == 0 ) {
      this.noContent();
    }
    app.loader.hide();
    this.$el.css('minHeight','');
  }

});
