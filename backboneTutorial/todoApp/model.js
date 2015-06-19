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

// Getters and setters
console.log(todo1.get('title'));
console.log(todo1.get('completed'));
// Or with some arbitrary data:
var todo2 = new Todo({
	title: 'Check the attributes of both model instances in the console',
	completed: true
});

// Getters
console.log(todo2.get('title'));
console.log(todo2.get('completed'));

// Setters
var todo3 = new Todo({
	title: "set through instantiation"
});

console.log('Todo title: ' + todo3.get('title'));
console.log('Completed: ' + todo3.get('completed'));

// Set single attribute value at a time through Model.set();
todo3.set('title', "Title attribute set through Model.set()");
console.log('Todo title: ' + todo3.get('title'));
console.log('Completed: ' + todo3.get('completed'));

// Set a map of attributes through Model.set()
todo3.set({
	title: "Both attributes set through Model.set()",
	completed: true
});

// Both attributes set through Model.set()
console.log('Todo title: ' + todo3.get('title'));
console.log('Completed: ' + todo3.get('completed'));
