var Person = new Backbone.Model();

Person.on("change:firstName", function(){
	console.log('Name changed');
});

Person.set({firstName: 'Andrew'});
Person.set({firstName: 'Jeremy'}, {silent:true}); // No log entry

console.log(Person.hasChanged("firstName"));

console.log(Person.hasChanged(null));