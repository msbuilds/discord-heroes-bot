// load the database object
var Database = require('./Database');
"use strict"
/*
 *	Map Class
 *
 *	This class represents a Map object. 
 *
 */
class Map{
	constructor(options){
		if(options.map !== undefined)
			this.map = options.map.replace(/\"/g,"");

		if(options.hero !== undefined)
			this.hero = options.hero.replace(/\"/g,"");
	}

	printBestHeroes(e){
		this.connection = new Database();

		this.findBestHeroes(e);

		this.connection.end();
	}

	findBestHeroes(e){
		if(this.map !== undefined){
			var query = "select m.name, m.notes, group_concat(DISTINCT h.name SEPARATOR ', ') as heroes ";
			query += "from maps m ";
			query += "join heroes_maps hm on hm.map_id = m.id ";
			query += "join heroes h on h.id = hm.hero_id ";
			query += "where m.name like '%" + this.map + "%'";
			query += " group by m.id";
			this.connection.query(query,function(err,rows){
			  	if(err) throw err;
			  	if(rows.length == 0) e.message.channel.sendMessage("No maps found...");

			  	for (var i = rows.length - 1; i >= 0; i--) {
			  		var resultString = "**" + rows[i].name + "**";
			  		resultString +=    "\n\n**Map Notes:** " + rows[i].notes;
			  		resultString += 	"\n\n**Best heroes:** " + rows[i].heroes;
			  		resultString += "\n\n";
			  		e.message.channel.sendMessage(resultString);
			  	}
			});

		}
	}
}

module.exports = Map;