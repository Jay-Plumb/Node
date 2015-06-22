var TodosView = Backbone.View.extend({
	tagName: 'ul', // required, but defaults to 'div if not set
	className: 'container', // optional, you can assign multiple classes to this property like so: 'container homepage'
	id: 'todos' // optional
});

var todosView = new TodosView();
// el is a reference to a DOM element and all views must have one
console.log(todosView.el);

