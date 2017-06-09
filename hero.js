// load the database object
var Database = require('./Database');

"use strict"
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

			this.findHeroes(e);
			this.findCounters(e);
			this.findSynergies(e);
			this.findStrongAgainst(e);

			this.connection.end();
		}
	}

	addHero(name, role, e){
		if(name !== undefined && role !== undefined){
			// Open a connection
			this.connection = new Database();

			var query = 'insert into heroes (name, role) values ("'+name.replace(/\"/g,"")+'", "'+role.replace(/\"/g,"")+'")';

			this.connection.query(query,function(err,rows){
				if(err) e.message.channel.sendMessage("Unable to add hero. Please check if hero already exists.");
				else{
					e.message.channel.sendMessage("Hero has been added.");
				}
			});

			this.connection.end();
		}
	}

	addCounter(hero_id, counter_id, e){
		if(hero_id !== undefined && counter_id !== undefined){
			// Open a connection
			this.connection = new Database();

			var query = 'insert into counters (hero_id, counter_id) values ('+hero_id+', '+counter_id+')';

			this.connection.query(query,function(err,rows){
				if(err) 
					e.message.channel.sendMessage("Unable to add counter. Please check if counter already exists.");
				else{ 
					e.message.channel.sendMessage("Counter has been added."); 
				}
			});

			this.connection.end();
		}
	}

	removeCounter(hero_id, counter_id, e){
		if(hero_id !== undefined && counter_id !== undefined){
			// Open a connection
			this.connection = new Database();

			var query = 'delete from counters where hero_id = '+hero_id+' and counter_id = '+counter_id;

			this.connection.query(query,function(err,rows){
				if(err) 
					e.message.channel.sendMessage("Unable to delete counter. Please check if counter exists.");
				else{ 
					e.message.channel.sendMessage("Counter has been removed."); 
				}
			});

			this.connection.end();
		}
	}

	removeSynergy(hero_id, syn_id, e){
		if(hero_id !== undefined && syn_id !== undefined){
			// Open a connection
			this.connection = new Database();

			var query = 'delete from synergies where hero_id = '+hero_id+' and syn_id = '+syn_id;

			this.connection.query(query,function(err,rows){
				if(err) 
					e.message.channel.sendMessage("Unable to delete synergy. Please check if synergy exists.");
				else{ 
					e.message.channel.sendMessage("Synergy has been removed."); 
				}
			});

			this.connection.end();
		}
	}

	addSynergy(hero_id, syn_id, e){
		if(hero_id !== undefined && syn_id !== undefined){
			// Open a connection
			this.connection = new Database();

			var query = 'insert into synergies (hero_id, syn_id) values ('+hero_id+', '+syn_id+')';

			this.connection.query(query,function(err,rows){
				if(err) e.message.channel.sendMessage("Unable to add synergy. Please check if synergy already exists.");
				else{
					e.message.channel.sendMessage("Synergy has been added.");
				}
			});

			this.connection.end();
		}
	}

	printCounterInformation(e){
		this.connection = new Database();

		this.findCounters(e);

		this.connection.end();
	}

	printSynergiesInformation(e){
		this.connection = new Database();

		this.findSynergies(e);

		this.connection.end();
	}

	findCounters(e){
		if(this.name !== undefined && this.name.length >= 1){


			var query = 'Select * from heroes where name like "%'+this.name+'%"';
			this.connection.query(query,function(err,rows){
			  	if(err) throw err;
			  	if(rows.length == 0) e.message.channel.sendMessage("No counters found...");

			  	for (var i = rows.length - 1; i >= 0; i--) {
			  		var query = "select h.name, group_concat(DISTINCT c.name SEPARATOR ', ') as counters ";
					query += 'from counters hc ';
					query += 'join heroes h on hc.hero_id = h.id ';
					query += 'join heroes c on hc.counter_id = c.id ';
					query += 'where hero_id = ' + rows[i].id;
					query += ' group by h.id';

					this.connection = new Database();
					this.connection.query(query,function(err,rows){
					  	if(err) throw err;
					  	if(rows.length == 0) e.message.channel.sendMessage("No counters found...");

					  	for (var i = rows.length - 1; i >= 0; i--) {
					  		var resultString = "Counters for **" + rows[i].name + "**";
					  		resultString +=    " include heros such as " + rows[i].counters;
					  		resultString += 	"\n";
					  		e.message.channel.sendMessage(resultString);
					  	}
					});
					this.connection.end();
			  	}
			});

		}
	}

	findSynergies(e){
		if(this.name !== undefined && this.name.length >= 1){
			// Open a connection
			var query = 'Select * from heroes where name like "%'+this.name+'%"';
			this.connection.query(query,function(err,rows){
			  	if(err) throw err;
			  	if(rows.length == 0) e.message.channel.sendMessage("No heroes found...");

			  	for (var i = rows.length - 1; i >= 0; i--) {
			  		var query = "select h.name, group_concat(DISTINCT c.name SEPARATOR ', ') as synergies ";
					query += 'from synergies hs ';
					query += 'join heroes h on hs.hero_id = h.id ';
					query += 'join heroes c on hs.syn_id = c.id ';
					query += 'where hero_id = ' + rows[i].id;
					query += ' group by h.id';

					this.connection = new Database();
					this.connection.query(query,function(err,rows){
					  	if(err) throw err;
					  	if(rows.length == 0) e.message.channel.sendMessage("No synergies found...");

					  	for (var i = rows.length - 1; i >= 0; i--) {
					  		var resultString = "Heroes who synergize with **" + rows[i].name + "**";
					  		resultString +=    " include " + rows[i].synergies;
					  		resultString += 	"\n";
					  		e.message.channel.sendMessage(resultString);
					  	}
					});
					this.connection.end();
			  	}
			});

		}
	}

	findStrongAgainst(e){
		if(this.name !== undefined && this.name.length >= 1){
			// Open a connection
			var query = 'Select * from heroes where name like "%'+this.name+'%"';
			this.connection.query(query,function(err,rows){
			  	if(err) throw err;
			  	if(rows.length == 0) e.message.channel.sendMessage("No heroes found...");

			  	for (var i = rows.length - 1; i >= 0; i--) {
			  		var query = "select h.name, group_concat(DISTINCT c.name SEPARATOR ', ') as strong_against ";
					query += 'from counters hc ';
					query += 'join heroes h on hc.counter_id = h.id ';
					query += 'join heroes c on hc.hero_id = c.id ';
					query += 'where counter_id = ' + rows[i].id;
					query += ' group by c.id';

					this.connection = new Database();
					this.connection.query(query,function(err,rows){
					  	if(err) throw err;
					  	if(rows.length == 0) e.message.channel.sendMessage("No strengths found...");
					  	else{
					  		var resultString = "**" + rows[0].name + "**";
						  	resultString +=    " is strong against heroes like ";
						  	for (var i = rows.length - 1; i >= 0; i--) {
						  		resultString += rows[i].strong_against;
						  		if(i != 0){
						  			resultString += ", ";
						  		}
						  	}
						  	e.message.channel.sendMessage(resultString);
					  	}
					  	
					});
					this.connection.end();
			  	}
			});

		}
	}

	findHeroes(e){
		var query = 'Select * from heroes where name like "%'+this.name+'%"';
		this.connection.query(query,function(err,rows){
		  	if(err) throw err;
		  	if(rows.length == 0) e.message.channel.sendMessage("No heroes found...");

		  	for (var i = rows.length - 1; i >= 0; i--) {
		  		var resultString = "**" + rows[i].name + "** ("+rows[i].id+") ";
		  		resultString +=    "is a **" + rows[i].role + "**";
		  		resultString += 	"\n";
		  		e.message.channel.sendMessage(resultString);
		  	}
		});
	}
}

module.exports = Hero;