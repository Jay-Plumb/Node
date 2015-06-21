// Create two DOM elements representing buttons
var button1 = $('<button></button>');

// Define a view
var View = Backbone.View.extend({
	events: {
		click: function(e) {
			console.log(view.el === e.target);
		}
	}
});

// Create a new instance of the view and apply it to button 1
var view = new View({el: button1});

// Apply the view to button1 using setElement
view.setElement(button1);

button1.trigger('click');
