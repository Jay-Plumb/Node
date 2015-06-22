var Todo = Backbone.Model.extend({
	// Default todo attribute values
	defaults: {
		title: '',
		completed: false
	},

	initialize: function() {
		console.log('This model has been initialized');
		this.on('change:title', function(){
			console.log('Title value for this model has changed');
		});
	},

	setTitle: function(newTitle) {
		this.set({title: newTitle});
	}
});

var myTodo = new Todo();

// Both of the following changes trigger the listener
myTodo.set('title','Setting the title');
myTodo.setTitle('Second style to set the title');

// Note that the following changes do not trigger the listener
myTodo.set('completed',true);

