//require http
var http = require('http');
//first port
var port1 = 7000;

//second port
var  port2 = 7500;
//function to handle the request and log confirmation
function handle_request(request, response) {
	response.end(console.log('It works. Path hit: ' + request.url));
}
//create server
var server = http.createServer(handle_request);

//listen to port1
server.listen(port1, function() {
	console.log('Listening to ' + port1);
	console.log(good[n]);
});
//listen to port2
server.listen(port2, function() {
	console.log('Listening to ' + port2);
	console.log(bad[n]);
});

var n = Math.floor(Math.random() * 3);
//array of insults
var bad = [
	'you stuck up, half-witted, scruffy-looking Nerf herder', 'You clinking, clanking, clattering collection of caligenous junk!', 'You\'re a gutless turd.', 'Frankly, my dear, I don\'t give a damn.'
];
//array of good things
var good = [
	'You\'re so pretty', 'I love your shoes!', 'Because I\'m good enough, smart enough, and, doggone it, people like me!'
];