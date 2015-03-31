var http = require("http");
var url = require("url");

'use strict';

var MongoClient = require('mongodb').MongoClient;

function startMongo() {
	MongoClient.connect(
		'mongodb://127.0.0.1:27017/accounting',
		function(err, connection) {
			var collection = connection.collection('customers');

			collection.insert({'name': 'Jane Doe'}, function(err, count) {

				collection.find().toArray(function(err, documents) {
					console.dir(documents[0]);
					connection.close();
				});

			});


		});
	// MongoClient.connect(
	// 	'mongodb://127.0.0.1:27017/accounting',
	// 	function(err, connection) {
	// 		posts.find({'name':"Daniel"}).toArray(function(err, results){
 //    		connectiononsole.log(results); // output all records
 //    });
	// }
	// )
}

function stopMongo() {
	MongoClient.connect(
		'mongodb://127.0.0.1:27017/accounting',
		function (err, connection) {
			db.collection.remove();
			connection.close();

		}
	);
}


function start(route) {
	function onRequest(request, response) {
		//stopMongo();
		var pathname = url.parse(request.url).pathname;
		if (pathname === '/favicon.ico') {
			response.writeHead(200, {'Content-Type': 'image/x-icon'} );
			response.end();
			return;
		}
		console.log("Request for " + pathname + " received.");

		var home = route(pathname);

		response.writeHead(200, {"Content-Type": "text/html"});
		response.end(home + '<!DOCTYPE html><html><head><body><button type="button">Click Me!</button></body></head>');
		response.write('HelloWorld...');
		startMongo();
		response.end();
	}

	http.createServer(onRequest).listen(8888);
	console.log("Server has started.");
}

exports.start = start;