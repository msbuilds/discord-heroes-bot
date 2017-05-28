/*
 *	Hero Class
 *
 *	This class represents a Hero object. 
 *
 */
class Hero{
	constructor(name){
		// The initialization of a hero will pull 
		// the information from the database, if the 
		// hero is found.
		console.log('Created new hero: ' + name);
	}
}

module.exports = Hero;