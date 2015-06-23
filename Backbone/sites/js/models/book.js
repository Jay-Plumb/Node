var app = app || {};

app.Book = Backbone.Model.extend({
	// This can be overwritten if defined
	defaults: {
			coverImage: 'img/placeholder.JPG',
			title: 'No title',
			author: 'Unknown',
			releaseDate: 'Unknown',
			keywords: 'None'
		}
});

