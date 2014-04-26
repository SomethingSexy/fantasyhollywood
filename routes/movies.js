var express = require('express');
var router = express.Router();
var http = require('http');

/* GET users listing. */
router.get('/movie/:id', function(req, res) {

	var query = require('querystring').stringify({
		'api_key' : 'df948910be786425869fc196919661ee'
	});
	console.log(query);
	//array('api_key' => 'df948910be786425869fc196919661ee'), array('header' => array('Accept' => "application/json")));
	http.get("http://api.themoviedb.org/3/movie/" + req.param("id") + "?" + query, function(res) {
		// console.dir(res);
		res.on("data", function(chunk) {
    		console.log("BODY: " + chunk);
  		});
	  	console.log("Got response: " + res.statusCode);
	}).on('error', function(e) {
	  console.log("Got error: " + e.message);
	});

	res.render('movie', { title: 'Express' });
});

module.exports = router;
