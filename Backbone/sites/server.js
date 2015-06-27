/*
Run in browser:
http://localhost:3001
run mongod

run mongo
commands within mongo terminal:

show dbs
use library_database
show collections
db.books.find().pretty()
*/
// Module dependencies
var application_root = __dirname,
		express = require('express'), // Web framework
		bodyParser = require('body-parser'), // Parser for reading request body
		path = require('path'), // Utilities for dealing with file paths
		mongoose = require('mongoose'); // MongoDB integration
		errorhandler = require('errorhandler');
// Create Server
var app = express();


// Start Server
var port = 3001;

// Configure server using an anonymous function
app.listen(port, function() {
	console.log('Express server listening on port %d in %s mode', port, app.settings.env);
});



// Routes {get, put, post, delete}
// Get (Create)
app.get('/api', function(request, response) {
	response.send('Library API is running');
});


// Connect to the database
mongoose.connect('mongodb://localhost/library_database');

// Schemas
var Book = new mongoose.Schema({
	title: String,
	author: String,
	releaseDate: Date
});

// Models
var BookModel = mongoose.model('Book', Book );

// Configure server

// Where to server static content
app.use( express.static( path.join(application_root, 'public') ) );

// Parses request body and populates requet.body
app.use(bodyParser.json());

// Show errors in development
app.use(errorhandler());

// GET a list of all books
app.get( '/api/books', function( request, response ) {
    return BookModel.find( function( err, books ) {
        if( !err ) {
            return response.send( books );
        } else {
            return console.log( err );
        }
    });
});


// POST - insert a new book
app.post('/api/books', function(req, res){
	console.log('Received a POST request');
	for (var key in req.body) {
		console.log(key + ': ' + req.body[key]);
	}
	var book = new BookModel(req.body);
	book.save(function(err, doc){
		res.send(doc);
	});
});

/*
// insert a new book
app.post('/api/books', function( request, response ) {
	var book = new BookModel({
		title: request.body.title,
		author: request.body.author,
		releaseData: request.body.releaseDate
	});

	return book.save( function(err) {
		if ( !err ) {
			console.log('Added new book');
			return response.send( book );
		} else {
			console.log( err );
		}
	});
});
*/

//Delete a book
app.delete( '/api/books/:id', function( request, response ) {
    console.log( 'Deleting book with id: ' + request.params.id );
    return BookModel.findById( request.params.id, function( err, book ) {
        return book.remove( function( err ) {
            if( !err ) {
                console.log( 'Book removed' );
                return response.send( '' );
            } else {
                console.log( err );
            }
        });
    });
});


// TODO: Put into tests dir and use module.exports

var book = new BookModel({
	title: 'Jason',
	author: 'Jason\'s Blog',
	releaseDate: new Date(2008, 4, 1).getTime()
});

book.save(); // Saves to our database



