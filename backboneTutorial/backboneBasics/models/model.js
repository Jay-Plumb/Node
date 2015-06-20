/* Creating models using Backbone.Model */
var Todo = Backbone.Model.extend({
	
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
