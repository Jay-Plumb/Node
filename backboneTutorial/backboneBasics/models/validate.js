var Todo = Backbone.Model.extend({
	defaults: {
		completed: false
	},

	validate: function(attributes){
		if(attributes.title === undefined) {
			return "Remember to set a title for your todo."
		}
	},

	initialize: function() {
		console.log('This model has been initialized');
		this.on("invalid", function(model, error){
			console.log(error);
		});
	},

});

var myTodo = new Todo();
myTodo.set('completed',true, {validate: true} );
console.log('completed ' + myTodo.get('completed'));

