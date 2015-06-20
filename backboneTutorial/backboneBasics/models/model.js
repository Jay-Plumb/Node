/* Creating models using Backbone.Model */
var Todo = Backbone.Model.extend({

	// initialize() method is called when new instances of a model is created
	initialize: function(){
		console.log('This model has been initialized');
	}
}); 

// Create our own concrete instance of a (Todo) model
var todo1 = new Todo();
console.log(JSON.stringify(todo1));

// Create with arbitrary data
var todo2 = new Todo({
	title: 'Title',
	completed: true
});

console.log(JSON.stringify(todo2));
