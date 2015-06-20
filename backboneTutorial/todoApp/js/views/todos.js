/*
TodoView is in charge of:

1) individual Todo records
2) Making sure the view updates with the todo does (we will add event listeners to the view that listen for events on an individual todo's HTMl representation)
*/

var app = app || {};

app.TodoView = Backbone.View.extend({

	// This is a list tag
	tagName: 'li',

	// Cache the template function for a single item
	template: _.template( $('#item-template').html() ),

	// The DOM events specific to an item
	events: {
		'dblclick label': 'edit',
		'keypress .edit': 'updateOnEnter',
		'blur .edit': 'close'
	},

	// The TodoView listens for changes to its model, re-rendering. Since theres a one-to-one correspondence between a **Todo** and a **TodoView** we set a direct reference on the model for convenience
	initialize: function() {
		this.listenTo(this.model, 'change', this.render);
	},

	// Re-renders the titles of the todo item
	render: function() {
		this.$el.html( this.template( this.model.attributes ) );
		this.$input = this.$('.edit');
		return this;
	},

	// Switch this view into 'editing' mode, displaying the input field
	edit: function() {
		this.$el.addClass('editing');
		this.$input.focus();
	},

	close: function() {
		var value = this.$input.val().trim();

		if ( vlaue ) {
			this.model.save( {title: value });
		}

		this.$el.removeClass('editing');
	},

	updateOnEnter: function( e ) {
		if (e.which === ENTER_KEY ) {
			this.close();
		}
	}

});