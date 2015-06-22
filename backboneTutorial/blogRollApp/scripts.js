// https://www.youtube.com/watch?v=B5P2dId_OtM
// Backbone Model
var Blog = Backbone.Model.extend({
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
var Blogs = Backbone.Collection.extend({});

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
	},
	// Re render and set to defaults
	cancel: function() {
		blogsView.render();
	},

	delete: function() {
		// destroy the model that we are on
		this.model.destroy();
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
		console.log(blog.toJSON());
		blogs.add(blog);
	});
	
});


