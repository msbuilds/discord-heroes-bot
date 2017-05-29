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

			this.findHeroes(e);
			this.findCounters(e);
			this.findSynergies(e);

			this.connection.end();
		}
	}

	addHero(name, role, e){
		if(name !== undefined && role !== undefined){
			// Open a connection
			this.connection = new Database();

			var query = 'insert into heroes (name, role) values ("'+name.replace(/\"/g,"")+'", "'+role.replace(/\"/g,"")+'")';

			this.connection.query(query,function(err,rows){
				if(err) throw err;
				e.message.channel.sendMessage("Hero has been added.")
			});

			this.connection.end();
		}
	}

	addCounter(hero_id, counter_id, e){
		if(hero_id !== undefined && counter_id !== undefined){
			// Open a connection
			this.connection = new Database();

			var query = 'insert into counters (hero_id, counter_id) values ("'+hero_id+'", "'+counter_id+'")';

			this.connection.query(query,function(err,rows){
				if(err) throw err;
				e.message.channel.sendMessage("Counter has been added.")
			});

			this.connection.end();
		}
	}

	addSynergy(hero_id, syn_id, e){
		if(hero_id !== undefined && syn_id !== undefined){
			// Open a connection
			this.connection = new Database();

			var query = 'insert into synergy (hero_id, syn_id) values ("'+hero_id+'", "'+syn_id+'")';

			this.connection.query(query,function(err,rows){
				if(err) throw err;
				e.message.channel.sendMessage("Synergies has been added.")
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
			  		var query = 'select h.name, group_concat(DISTINCT c.name) as counters ';
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
					  		var resultString = "**Counters for hero:** " + rows[i].name;
					  		resultString +=    "\n**Counters:** " + rows[i].counters;
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
			  		var query = 'select h.name, group_concat(DISTINCT c.name) as synergies ';
					query += 'from synergies hs ';
					query += 'join heroes h on hs.hero_id = h.id ';
					query += 'join heroes c on hs.syn_id = c.id ';
					query += 'where hero_id = ' + rows[i].id;
					query += ' group by h.id';

					this.connection = new Database();
					this.connection.query(query,function(err,rows){
					  	if(err) throw err;

					  	for (var i = rows.length - 1; i >= 0; i--) {
					  		var resultString = "**Synergies for hero:** " + rows[i].name;
					  		resultString +=    "\n**Synergies:** " + rows[i].synergies;
					  		resultString += 	"\n";
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
		  		var resultString = "**Found hero:** " + rows[i].name + " ("+rows[i].id+")";
		  		resultString +=    "\n**Role:** " + rows[i].role;
		  		resultString += 	"\n";
		  		e.message.channel.sendMessage(resultString);
		  	}
		});
	}
}

module.exports = Hero;