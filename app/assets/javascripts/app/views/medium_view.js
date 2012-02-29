 
app.views.Medium = app.views.Base.extend({

  initialize: function() {
    if( this.options.templateName ) {
      this.templateName = this.options.templateName;
    }
  },

  templateName: "medium",

  className: "medium",

  attributes: function() {
    return {"data-id" : this.model.get("id")};
  },
  
  render: function() {
    this.renderTemplate();
    return this;
  }
});
