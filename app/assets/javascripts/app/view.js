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

  postRender: $.noop,

  parseForm: function() {
    var out = {};
    this.$('input, select, textarea').each(function() {
      var $this = $(this);
      var name = $this.attr('name');
      var type = $this.attr('type');
      var prop = name;
      var val  = null;

      if( name.match(/.*(?=_ids\[\])/) && type == 'checkbox' ) {
        prop = /.*(?=_ids\[\])/.exec(name); // strip the "_ids[]"
        val = (out[prop]) ? out[prop] : [];
        if( $this.is(':checked') ) val.push({ id: $this.val() });
      } else if( name.match(/\[\]/) && $this.is('select') ) {
        prop = /.*(?=\[\])/.exec(name); // strip the "[]"
        val = { id: $this.val() };
      } else if( type == 'checkbox' ) {
        val = $this.is(':checked');
      } else if( type == 'text' || type == 'hidden' || $this.is('textarea') ) {
        val = $this.val();
      }

      if( val != null ) out[prop] = val;
    });
    return out;
  }

});