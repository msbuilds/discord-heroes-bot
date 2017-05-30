// load discordie object
var discordie = require("discordie");

// load the database object
var Database = require('./Database');

// load our models
var Hero = require('./Hero');
var Map = require('./Map');

// create the discord client obj
var client = new discordie();
var log;
var connection;

// be sure to authorize the bot to your server/guild
// https://discordapp.com/oauth2/authorize?client_id=256486795389173760&scope=bot

client.connect({
	token: "MzE4NDEwMDQ2MjQzNDcxMzYy.DAyJIg.u9PbGxBbkMtO5u4s8AcmFaZonpM"
});

client.Dispatcher.on("GATEWAY_READY", e => {
	console.log("Connected as: " + client.User.username);
	var channels = client.Channels.toArray();
	for(var x = 0; x < channels.length; x++){
		
		if(channels[x].name='log')
		{
			log = channels[x];
		}
	}
});

client.Dispatcher.on("MESSAGE_CREATE", e => {
	input = e.message.content.match(/[^\s"]+|"([^"]*)"/gi);

	if(input[0] == "!help"){
		var help = "";
		 help += "**Usage:** !hero <heroname>\n";
		 help += "**Output:** <hero-role>\n\n";
		 help += "**Usage:** !counter <heroname>\n";
		 help += "**Output:** <hero-counters>\n\n";
		 help += "**Usage:** !synergies <heroname> | !syn <heroname>\n";
		 help += "**Output:** <hero-synergies>\n\n";
		 help += "**Usage:** !map <mapname> (optional: <hero-role>)\n";
		 help += "**Output:** <best-heroes> <notes>\n\n";

		e.message.channel.sendMessage(help);
	}else if(input[0] == "!hero"){
		if(input[1] != undefined && input[1].length > 2){
			var hero = new Hero(input[1].replace(/\"/g,""));
			hero.printHeroInformation(e);
		}else{
			e.message.channel.sendMessage("To search for a hero, please enter at least 3 characters.");
		}		
	}else if(input[0] == "!counter" || input[0] == "!counters"){
		var hero = new Hero(input[1].replace(/\"/g,""));
		hero.printCounterInformation(e);
	}else if(input[0] == "!synergies" || input[0] == "!syn" || input[0] == "!synergy"){
		var hero = new Hero(input[1].replace(/\"/g,""));
		hero.printSynergiesInformation(e);
	}else if(input[0] == "!add"){
		if(input[1] == "hero"){
			var hero = new Hero(undefined);
			hero.addHero(input[2], input[3], e);
		}else if(input[1] == "counter"){
			var hero = new Hero(undefined);
			hero.addCounter(input[2], input[3], e);
		}else if(input[1] == "syn" || input[1] == "synergy"){
			var hero = new Hero(undefined);
			hero.addSynergy(input[2], input[3], e);
		}else{
			e.message.channel.sendMessage("Error with !add syntax.");
		}
		
	}else if(input[0] == "!remove"){
		if(input[1] == "hero"){
			e.message.channel.sendMessage("Unable to remove hero. Please contact the DB Admin to delete this record.");
		}else if(input[1] == "counter"){
			var hero = new Hero(undefined);
			hero.removeCounter(input[2], input[3], e);
		}else if(input[1] == "syn" || input[1] == "synergy"){
			var hero = new Hero(undefined);
			hero.removeSynergy(input[2], input[3], e);
		}else{
			e.message.channel.sendMessage("Error with !remove syntax.");
		}
	}else if(input[0] == "!map"){
		var options = {};

		if(input[1] !== undefined)
			options.map = input[1];
		if(input[2] !== undefined)
			options.hero = input[2];

		var map = new Map(options);
		map.printBestHeroes(e);
	}
});