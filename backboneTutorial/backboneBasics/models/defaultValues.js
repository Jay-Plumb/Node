var Todo = Backbone.Model.extend({
	// Default todo attribute values
	defaults: {
		title: '',
		completed: false
	}
});

// Override all of the default attributes
var todo = new Todo({
	title: 'New title',
	completed: true
})

console.log(JSON.stringify(todo));
