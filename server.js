var express = require('express');
var app = express();
var PORT =  3000;

var middleware = {
	requireAuthentication: function (req, res, next) {
		console.log('private route hit!');
		next();
        
	}
};


app.use(middleware.requireAuthentication);
// app.get('/', function (req, res){
//      res.send('Heloo Exprees!')
//  });

// /about
// About Us
app.get('/about', middleware.requireAuthentication, function (req, res) {
	res.send('About Us');
});

app.use(express.static(__dirname + '/public'));
//console.log(__dirname);
app.listen(3000, function () {
	console.log('Exprees sever started on port ' + PORT + '!');

});