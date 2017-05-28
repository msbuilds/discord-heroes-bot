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
	
	if(log === null)
		console.log("No log found");
	else 
		console.log("Log found");
	
	console.log("Attempting database connection...");
	connection = new Database();
});

client.Dispatcher.on("MESSAGE_CREATE", e => {
	input = e.message.content.match(/[^\s"]+|"([^"]*)"/gi);
	console.log(input);

	if(input[0] == "!help"){
		e.message.channel.sendMessage("Usage: !hero <heroname>");
		e.message.channel.sendMessage("Output: <hero-role> <hero-counters> <hero-synergies>");
		e.message.channel.sendMessage("Usage: !map <mapname> (optional: <hero-role>)");
		e.message.channel.sendMessage("Output: <best-heroes> <notes>");
		console.log('Help command executed by user: ' + e.message.author.username);

		// if(input[1] == "list"){
		// 	var values = connection.getAllBosses();

		// 	e.message.channel.sendMessage("===========Wow Help============");
		// 	e.message.channel.sendMessage("Available Bosses:");

		// 	for(x in values){
		// 		e.message.channel.sendMessage(values[x].name);
		// 	}
		// }
		// else{
		// 	var values = connection.getAllBosses();
		// 	var flag = false;

		// 	for(x in values){
		// 		if(input[1] == values[x].name){
		// 		flag = true;
		// 		e.message.channel.sendMessage("===========Wow Help============");
		// 		e.message.channel.sendMessage("Boss: " + values[x].name);
		// 		e.message.channel.sendMessage("Video: " + values[x].link);
		// 		e.message.channel.sendMessage("Mechanics: " + values[x].mechanics);
		// 		e.message.channel.sendMessage("Notes: " + values[x].notes);

		// 		}
		// 	}
		// }
	}else if(input[0] == "!hero"){
		var hero = new Hero(input[1]);
	}else if(input[0] == "!map"){
		var options = {};
		
		if(input[1] !== undefined)
			options.map = input[1];
		if(input[2] !== undefined)
			options.hero = input[2];

		var map = new Map(options);
	}
});

client.Dispatcher.on("VOICE_CHANNEL_JOIN", e => {
	log.sendMessage(e.user.username + " has joined the channel " + e.channel.name);
});