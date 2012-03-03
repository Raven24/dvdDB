 
app.views.Ownership = app.views.Base.extend({

  initialize: function() {
    if( this.options.templateName ) {
      this.templateName = this.options.templateName;
    }
    app.possessions.bind("add", this.possession, this);
    app.possessions.bind("remove", this.possession, this);
    app.possessions.bind("sync", this.reset, this);
    this.bind("templateChange", this.render, this);
    this.possession();
  },

  templateName: "ownership",

  className: "ownership",

  events: {
    "click .have-it"     : "ownershipForm",
    "click .not-anymore" : "disown",
    "click .save"        : "own",    
    "click .cancel"      : "reset",
    "click .change-something": "ownershipForm",
  },

  presenter: function() {
    var modelJSON = (this.model) ? this.defaultPresenter() : { ownership: {} };
    return _.extend( modelJSON.ownership, {
      user_has_it: this.has_it,
      ownerships: this.options.medium.ownerships.toJSON()
    });
  },

  render: function() {
    this.renderTemplate();
    return this;
  },

  possession: function() {
    this.has_it = false;
    this.model = null;
    this.resetElement();
    app.possessions.each(function(elem) {
      if(elem.get("medium_id") == this.options.medium.get("id")) {
        this.model = elem;
        this.has_it = true;
        return true;
      }
    }, this);
    this.render();
  },

  ownershipForm: function(evt) {
    evt.preventDefault();

    this.templateName = "ownershipForm";
    this.$el.addClass("form");
    this.trigger("templateChange");
  },

  reset: function(evt) {
    if(evt.preventDefault) evt.preventDefault();
    this.resetElement();
    this.trigger("templateChange");
  },

  resetElement: function() {
    this.templateName = "ownership";
    this.$el.removeClass("form");
  },

  own: function(evt) {
    evt.preventDefault();

    if(this.model) {
      this.update();
    } else {
      this.create();
    }
  },

  parseForm: function() {
    return _.extend(app.views.Base.prototype.parseForm.call(this), { medium: {id: this.options.medium.get("id") }});
  },

  setForm: function() {
    this.$('select').each(function() {
      $(this).val($(this).siblings('label').data('selected'));
    });
    this.$('.checkbox').each(function() {
      $(this).find('*[type=checkbox]').val($(this).siblings('label').data('selected'));
    });
  },

  create: function() {
    var opts = this.parseForm();
    this.model = app.possessions.create(opts, {wait: true});
  },

  update: function() {
    var opts = this.parseForm();
    this.model.save(opts,{wait: true});
  },

  disown: function(evt) {
    evt.preventDefault();
    this.options.medium.ownerships.remove(this.model);
    this.model.destroy({wait: true});
    this.has_it = false;
  }
});
