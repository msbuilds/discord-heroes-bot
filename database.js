"use strict"

var mysql = require('mysql');

// Creates and manages the database connections
class Database{

	constructor(){
		this.connection = mysql.createConnection({
			host: "localhost",
			user: "discord",
			password: "",
			database: "heroes"
		});

		this.connection.connect(function(err){
			if(err){
				console.log(err);
				return;
			}
		});

		return this.connection;
	}
}

module.exports = Database;