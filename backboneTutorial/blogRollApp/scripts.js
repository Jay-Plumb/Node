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

	render: function() {
		this.$el.html(this.template( this.model.toJSON()));
		return this; 
	},
});

// Backbone view for all blogs
var BlogsView = Backbone.View.extend({
	model: blogs,
	el: $('.blogs-list'),
	initialize: function() {
		this.model.on('add', this.render, this);
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


