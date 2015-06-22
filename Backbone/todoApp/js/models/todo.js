var app = app || {};

// This model will have 'title' and 'completed' attributes
app.Todo = Backbone.Model.extend({
	// Default attributes ensure that each todo created has 'title' and completed keys
	defaults: {
		title: '',
		completed: false
	},

	// Toggle the 'completed' state of this todo item. Set and simultaneously persist 
	toggle: function() {
		this.save({
			completed: !this.get('completed')
		});
	}
});