var Todo = Backbone.Model.extend({
	initialize: function() {
		title: '';
		completed: false
	}
})

var todo = new Todo({
	title: "Getter and setter test",
	completed: false
});
console.log(todo.get('title'));
console.log(todo.get('completed'));

var todo1 = new Todo({});

todo1.set('title',"Setting the title");
todo1.set('completed', "true");
console.log(todo1.get('title'))
console.log(todo1.get('completed'));