 
app.views.Ownership = app.views.Base.extend({

  initialize: function() {
    if( this.options.templateName ) {
      this.templateName = this.options.templateName;
    }
    app.possessions.bind("add", this.possession, this);
    app.possessions.bind("remove", this.possession, this);
    app.possessions.bind("sync", this.possession, this);
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
      ownerships: this.collection.toJSON(),
      language_ids: (this.model) ? _.map(this.model.get('languages'), function(elem){
        return elem.id;
      }).join(", ") : ""
    });
  },

  render: function() {
    this.renderTemplate();
    this.setForm();
    return this;
  },

  possession: function() {
    this.has_it = false;
    if( this.model ) {
      this.has_it = true;
      if( !this.collection.get(this.model.get("id")) && !this.model.get("private") ) {
        this.collection.add(this.model);
      }
      if( this.collection.get(this.model.get("id")) && this.model.get("private") ) {
        this.collection.remove(this.model);
      }
    } else {
      app.possessions.each(function(elem) {
        if(elem.get("medium_id") == this.options.medium.get("id")) {
          this.model = elem;
          this.has_it = true;
          return true;
        }
      }, this);
    }
    this.resetElement();
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
    this.collection.remove(this.model);
    this.model.destroy({wait: true});
    this.model = false;
    this.has_it = false;
  }
});
