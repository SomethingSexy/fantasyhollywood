var express = require('express');
var router = express.Router();
var http = require('http');

/* GET home page. */
router.get('/:id', function(req, routeResponse) {
	var query = require('querystring').stringify({
		'api_key' : 'df948910be786425869fc196919661ee'
	});
	console.log(query);
	//array('api_key' => 'df948910be786425869fc196919661ee'), array('header' => array('Accept' => "application/json")));
	http.get("http://api.themoviedb.org/3/person/" + req.param("id") + "?" + query, function(res) {
		// console.dir(res);
		var body = '';
		res.on('data', function(chunk) {
		    body += chunk;
		});
		res.on('end', function() {
		    console.log(body);
		    routeResponse.render('person', { title: 'Person Information', person: JSON.parse(body)});
		});
	  	console.log("Got response: " + res.statusCode);
	}).on('error', function(e) {
	  console.log("Got error: " + e.message);
	});
});

router.get('/:id/credits', function(req, routeResponse) {
	var query = require('querystring').stringify({
		'api_key' : 'df948910be786425869fc196919661ee'
	});
	console.log(query);
	//array('api_key' => 'df948910be786425869fc196919661ee'), array('header' => array('Accept' => "application/json")));
	http.get("http://api.themoviedb.org/3/person/" + req.param("id") + "/combined_credits?" + query, function(res) {
		// console.dir(res);
		var body = '';
		res.on('data', function(chunk) {
		    body += chunk;
		});
		res.on('end', function() {
		    console.log(body);
		    routeResponse.render('person_credits', { title: 'Person Credits Information', credits: JSON.parse(body)});
		});
	  	console.log("Got response: " + res.statusCode);
	}).on('error', function(e) {
	  console.log("Got error: " + e.message);
	});
});

module.exports = router;
