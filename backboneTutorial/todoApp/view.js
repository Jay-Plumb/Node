// Ecample view that creates a DOM element but is not appended to the DOM 
var TodosView = Backbone.View.extend({
	tagName: 'ul', // required but defaults to 'div' if not set
	className: 'container', // Optional. You can assign multiple classes to this property: e.g. 'container homepage'
	id: 'todos', // Optional
});

var todosView = new TodosView();
console.log(todosView.el);