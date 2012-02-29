app.views.Base = Backbone.View.extend({

  presenter : function(){
    return this.defaultPresenter()
  },
  
  defaultPresenter : function(){
    var modelJson = this.model ? this.model.toJSON() : {};
    return modelJson;
  },
  
  render: function() {
    this.preRender();
    this.$el.html("render");
    this.postRender();
  },

  renderTemplate: function() {
    var presenter = _.isFunction(this.presenter) ? this.presenter() : this.presenter;
    var template = JST[this.templateName];
    this.$el.html( template(presenter) );
  },

  preRender: $.noop,

  postRender: $.noop
  
});