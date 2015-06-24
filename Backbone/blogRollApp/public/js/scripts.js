Backbone.Model.prototype.idAttribute = '_id';
var app = app || {};

// Backbone Model
Blog = Backbone.Model.extend({
	defaults: {
		author: '',
		title: '',
		url: ''
	}
});

/*
// Instantiate two Blogs
var blog1 = new Blog({
	author: 'Jason',
	title: 'Jason\'s Blog',
	url: 'http://jasonblog.com'
});

var blog2 = new Blog({
	author: 'Michael',
	title: 'Machael\'s Blog',
	url: 'http://michaelblog.com'
});
*/
// Backbone Collection (array of models)
var Blogs = Backbone.Collection.extend({
	// GET request made to this address
	url: 'http://localhost:3000/api/blogs'
});

// var blogs = new Blogs([blog1, blog2]);
var blogs = new Blogs();
// Backbone View for one blog
var BlogView = Backbone.View.extend({
	model: new Blog(), 
	tagName: 'tr',
	initialize: function() {
		this.template = _.template($('.blogs-list-template').html())
	},
	// Listen for events e.g. edit-blog class in html is click run edit function
	events: {
		'click .edit-blog': 'edit',
		'click .update-blog': 'update',
		'click .cancel': 'cancel',
		'click .delete-blog': 'delete'
	},

	edit: function() {
		// Hide edit and delete and show two new buttons
		$('.edit-blog').hide();
		$('.delete-blog').hide();
		this.$('.update-blog').show();
		this.$('.cancel').show();

		// We want to make the boxes editable
		// First store the current data
		var author = this.$('.author').html();
		var title = this.$('.title').html();
		var url = this.$('.url').html();

		// Make the field editable and put in the previous values 
		this.$('.author').html('<input type="text" class="form-control author-update" value="' + author + '">')
		this.$('.title').html('<input type="text" class="form-control title-update" value="' + title + '">')
		this.$('.url').html('<input type="text" class="form-control url-update" value="' + url + '">')
	
	},

	update: function() {
		// Set the values of the input boxes to the values of the model
		this.model.set('author', $('.author-update').val());
		this.model.set('title', $('.title-update').val());
		this.model.set('url', $('.url-update').val());

		// This sends a put request to our server
		this.model.save(null, {
			success: function(response) {
				console.log('Successfully UPDATED blog with id:' + response.toJSON()._id)
			},
			error: function() {
				console.log('Failed to update blog! ');
			}
		});
	},
	// Re render and set to defaults
	cancel: function() {
		blogsView.render();
	},

	delete: function() {
		// database for delete/remove
		this.model.destroy({
			success: function(response) {
				console.log('Successfully deleted blog with _id: ' + response.toJSON()._id);
			},
			error: function() {
				console.log('Failed to DELETE blog!');
			}
		});
	},
	render: function() {
		this.$el.html(this.template( this.model.toJSON()));
		return this; 
	}
});

// Backbone view for all blogs
var BlogsView = Backbone.View.extend({
	model: blogs,
	el: $('.blogs-list'),
	initialize: function() {
		var self = this;
		this.model.on('add', this.render, this);
		this.model.on('change', function() {
			// Slight hack.
			setTimeout(function() {
				self.render();
			},30);
		}, this); // Whenever we edit the model, the view updates
		this.model.on('remove', this.render, this);
		// mongd -GET request
		this.model.fetch({
			success: function(response){
				_.each(response.toJSON(), function(item){
					console.log('Successfully GOT blog with _id: ' + item._id);
				});
			},
			error: function() {
				console.log('Failed to get blogs!');
			}
		});
	},
	render: function() {
		var self = this;
		this.$el.html(''); // empty the content
		_.each(this.model.toArray(), function(blog) {
			self.$el.append((new BlogView({model: blog}).render().$el)); // this.$el doesnt work as this changes each time
		});
		return this;
	}
});

var blogsView = new BlogsView();

$(document).ready(function() {
	$('.add-blog').on('click', function() {
		var blog = new Blog({
			author: $('.author-input').val(),
			title: $('.title-input').val(),
			url: $('.url-input').val()
		});

		// Clear the forms once finished entering
		$('.author-input').val('');
		$('.title-input').val('');
		$('.url-input').val('');

		// To test its working
		// console.log(blog.toJSON());

		blogs.add(blog);

		// makes a POST request to server.js
		blog.save(null, {
			success: function(response) {
				console.log('Successfully SAVED blog with _id: ' + response.toJSON()._id);
			},
			error: function() {
				console.log('Failed to save blog! ');
			}
		});
	});
	
});


