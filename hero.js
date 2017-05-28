// load the database object
var Database = require('./Database');
/*
 *	Hero Class
 *
 *	This class represents a Hero object. 
 *
 */
class Hero{
	constructor(name){
		this.name = name;
	}

	// findHeroes will execute a search 
	// and output to discord the resulting rows
	// Required input is the event e
	printHeroInformation(e){
		// Make sure we have some value
		// and its not empty.
		if(this.name !== undefined && this.name.length >= 1){
			// Open a connection
			this.connection = new Database();

			this.findHeroes();

			this.connection.end();
		}
	}

	findHeroes(){
		var query = 'Select * from heroes where name like "%'+this.name+'%"';
		this.connection.query(query,function(err,rows){
		  	if(err) throw err;
		  	if(rows.length == 0) e.message.channel.sendMessage("No heroes found...");

		  	for (var i = rows.length - 1; i >= 0; i--) {
		  		this.hero[i]['id'] = rows[i].id;
		  		this.hero[i]['name'] = rows[i].name;
		  		this.hero[i]['role'] = rows[i].role;
		  		//var resultString = "**Found hero:**\t " + rows[i].name;
		  		//resultString +=    "\n**Role:**\t\t\t\t " + rows[i].role;
		  		//resultString +=    "\n**Counters:**\t\t " + rows[i].counters;
		  		//resultString +=    "\n**Synergies:**\t\t " + rows[i].synergies;
		  		//e.message.channel.sendMessage(resultString);
		  		findCounters(rows[i].id);
		  		findSynergies(rows[i].id);
		  	}
		});
		console.log(this.hero);
	}

	findHeroNameById(hero_id){
		console.log('Finding hero name for id ' + hero_id);
		var query = 'Select name from heroes where id = ' + hero_id;
		this.connection.query(query,function(err,rows){
		  	if(err) throw err;
		  	if(rows.length == 0) return 'None';
		  	return rows[0].name;
		});
	}

	findCounters(hero_id){
		console.log('Finding counter for id ' + hero_id);
		var query = 'Select * from counters where hero_id = ' + hero_id;
		this.connection.query(query,function(err,rows){
			if(err) throw err;

		  	for (var i = rows.length - 1; i >= 0; i--) {
		  		this.hero[hero_id]['counters'][row[i].counter_id] = findHeroNameById(row[i].counter_id);
		  	}
		});
	}

	findSynergies(hero_id){
		console.log('Finding synergies for id ' + hero_id);
		var query = 'Select * from synergies where hero_id = ' + hero_id;
		this.connection.query(query,function(err,rows){
			if(err) throw err;
		  	for (var i = rows.length - 1; i >= 0; i--) {
		  		this.hero[hero_id]['synergies'][row[i].syn_id] = findHeroNameById(row[i].syn_id);
		  	}
		});
	}
}

module.exports = Hero;