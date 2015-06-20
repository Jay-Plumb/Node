var Todo = Backbone.Model.extend({
	initialize: function() {
		title: '';
		completed: false
	}
})

var todo = new Todo({
	title: "Getter and setter test",
	completed: true
});
console.log(todo.get('title'));
console.log(todo.get('completed'));