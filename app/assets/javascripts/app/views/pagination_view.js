 
app.views.Pagination = app.views.Base.extend({

  initialize: function() {
    this.model.bind("change", this.render, this);
  },

  templateName: "pagination",

  id: "pagination",

  events: {
    "click a" : "open"
  },

  render: function() {
    this.renderTemplate();
    return this;
  },

  open: function(evt) {
    evt.preventDefault();
    var elem = $(evt.currentTarget);
    this.model.set({
      url:  elem.attr("href"),
      page: elem.data("page")
    });
    app.router.navigate(elem.attr("href"));
  }

});
