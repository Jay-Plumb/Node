var Todo = Backbone.Model.extend({
	initialize: function(){
		console.log('This model has been initialized');
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
