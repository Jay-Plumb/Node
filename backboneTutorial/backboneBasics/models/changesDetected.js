var Todo = Backbone.Model.extend({
	defaults: {
		title: '',
		completed: false
	},
	initialize: function(){
		console.log('This model has been initialized');
		// Receive a notification when a Backbone model changes by binding a listener to the model for its changed event. It's convenient to add listeners in the initialize() function
		this.on('change', function(){
			console.log('- Values for this model have changed');
		});
	}
});

var myTodo = new Todo();

myTodo.set('title', 'The listener is triggered whenever an attribute value changes');

// Changing more than one attribute at the same time only triggers the listener once
myTodo.set({
	title: 'Changing more than one attribute at the same time only triggers the listener once',
	completed: true
});