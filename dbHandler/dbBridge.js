var mongodb 		= require('mongodb'),
		config      = require('../config/config'),
		MongoClient = mongodb.MongoClient;

var connectionUrl = 'mongodb://' + config.database.host + ':' + config.database.port + '/' + config.database.dbName;		
var db            = "";

exports.createConnection = function(){
	MongoClient.connect(connectionUrl, function(err, database) {
		if(err){
			console.log(err);
			console.log("unable to connect Mongodb database on host: " + config.database.host  + " port: " + config.database.port)
		} else{
			db = database;
			exports.db = database;
			console.log("Mongodb database connected to server on host: " + config.database.host  + " port: " + config.database.port);			
		}
	});
}