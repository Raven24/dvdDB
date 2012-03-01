 
app.views.Ownership = app.views.Base.extend({

  initialize: function() {
    if( this.options.templateName ) {
      this.templateName = this.options.templateName;
    }
    this.collection.bind("add", this.posession, this);
    this.posession();
  },
  
  templateName: "ownership",

  className: "ownership",

  events: {
    "click a" : "own"
  },

  presenter: function() {    
    return {
      user_has_it: this.has_it
    };
  },

  render: function() {
    this.renderTemplate();
    return this;
  },

  posession: function() {
    this.has_it = false;
    this.collection.each(function(elem) {
      if(elem.get("medium_id") == this.options.medium.get("id")) {
        this.model = elem;
        this.has_it = true;
        this.render();
        return true;
      }
    }, this);
  },

  own: function(evt) {
    evt.preventDefault();
    var elem = $(evt.currentTarget);
    
    if(!this.model) {
      this.model = this.collection.create({
        medium_id: elem.parents(".medium").data("id")
      }, {wait: true});
    }
  }
});
