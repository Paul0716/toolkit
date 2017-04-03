const request = require("request");

const GMSApiKey = "AIzaSyCmMyiDOpMy4s47zXV04EuDEI8MzVMI3pw";

const base_url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?";

var parameters = {
	key: GMSApiKey,
	location: "23.0171085,120.2307771",
	rankby: "distance",
	language: "zh-TW",
	name: "咖啡",
};

var data = [];
for(var key in parameters) {
	data.push(key+"="+parameters[key]);
}
var query = base_url+encodeURI(data.join('&'));
// console.log(query);
 
request(query, function(err, response, body){
	var r = JSON.parse(body);
	// console.log(r.results[0]);
	

});