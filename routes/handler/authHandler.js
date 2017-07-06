var authQuery = require("../../dbHandler/authQuery")
var authHandler = {};

authHandler.login = function (req, res) {
	authQuery.getUser(req.body, function(err, response){
		if(!err && !response) {
			return res.json({success: false, res: response, info: "User is not registered yet!!"});
		} else if(!err && response) {
			return res.json({success: true, res: response, info: "Login successful!"});
		} else {
			return res.json({success: false, info: "Error while processing login!"});
		}
	});
}

authHandler.register = function (req, res) {
	authQuery.insertUser(req.body, function(err, response){
		if(response) {
			return res.json({success: true, res: response, info: "User registered successfully!"});
		} else {
			return res.json({success: false, info: "Error while registering user!"});
		}
	});
}

// Create or get user (Facebook login attempt)
authHandler.findOrCreate = function(req, res) {
	authQuery.findOrCreate(req, function(err, response){
		if(response) {
			return res({success: true, res: response, info: "User registered/found successfully!"});
		} else {
			return res({success: false, info: "Error while registering user!"});
		}
	});
}

module.exports = authHandler;