 
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
    this.renderSubviews();
    return this;
  },

  renderSubviews: function() {
    var ownership = new app.views.Ownership({
      'collection': this.model.ownerships,
      'medium'    : this.model
    }).render();
    this.$('.user_actions').html(ownership.el);
    ownership.delegateEvents();
  }
});
