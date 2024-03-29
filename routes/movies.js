var express = require('express');
var router = express.Router();
var http = require('http');

/* GET users listing. */
router.get('/movie/:id', function(req, routeResponse) {

	var query = require('querystring').stringify({
		'api_key' : 'df948910be786425869fc196919661ee'
	});
	console.log(query);
	//array('api_key' => 'df948910be786425869fc196919661ee'), array('header' => array('Accept' => "application/json")));
	http.get("http://api.themoviedb.org/3/movie/" + req.param("id") + "?" + query, function(res) {
		// console.dir(res);
		var body = '';
		res.on('data', function(chunk) {
		    body += chunk;
		});
		res.on('end', function() {
		    console.log(body);
		    routeResponse.render('movie', { title: 'Movie Information', movie: JSON.parse(body)});
		});
	  	console.log("Got response: " + res.statusCode);
	}).on('error', function(e) {
	  console.log("Got error: " + e.message);
	});
});

router.get('/movie/:id/cast', function(req, routeResponse) {

	var query = require('querystring').stringify({
		'api_key' : 'df948910be786425869fc196919661ee'
	});
	console.log(query);
	//array('api_key' => 'df948910be786425869fc196919661ee'), array('header' => array('Accept' => "application/json")));
	http.get("http://api.themoviedb.org/3/movie/" + req.param("id") + "/credits?" + query, function(res) {
		// console.dir(res);
		var body = '';
		res.on('data', function(chunk) {
		    body += chunk;
		});
		res.on('end', function() {
		    console.log(body);
		    routeResponse.render('cast', { title: 'Cast Information', cast: JSON.parse(body)});
		});
	  	console.log("Got response: " + res.statusCode);
	}).on('error', function(e) {
	  console.log("Got error: " + e.message);
	});
});

module.exports = router;
