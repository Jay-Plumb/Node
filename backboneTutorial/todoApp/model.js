var Todo = Backbone.Model.extend({
	// initialize called when a new instance of the model is created.
	initialize: function(){
		console.log('This model has been initialized');
	},
	// Give the model set default values
	defaults: {
		title: '',
		completed: false
	}
});

// We can then create our own concrete instance of a (Todo) Model

// With no values
var todo1 = new Todo();
console.log(JSON.stringify(todo1));

// Or with some arbitrary data:
var todo2 = new Todo({
	title: 'Check the attributes of both model instances in the console',
	completed: true
});

console.log(JSON.stringify(todo2));
