var dbBridge   = require("./dbBridge");
var authQuery = {}

authQuery.insertUser = function(query, cb){
	dbBridge.db.collection("user").insert(query, function(err, res){
		cb(err, res);
	})
}

authQuery.getUser = function(query, cb){
	dbBridge.db.collection("user").findOne(query, function(err, res){
		cb(err, res);
	})
}

authQuery.findOrCreate = function(query, cb) {
	dbBridge.db.collection("user").update(query, {$set: query}, {upsert: true}, function(err, res){
		cb(err, res);
	})
}

module.exports = authQuery;