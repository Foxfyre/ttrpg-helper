const Discord = require("discord.js");

const client = new Discord.Client();

const fs = require("fs");

const config = require("./config.json");

client.config = require("./config.json");

fs.readdir("./events/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        let eventFunction = require(`./events/${files}`);
        let eventName = file.split(".")[0];
        client.on(eventName, (...args) => eventFunction(client, ...args));
    });
});

client.on("message", message => {
    if (message.author.bot) return;
    if (message.content.indexOf(config.prefix) !== 0) return;
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    try {
        let commandFile = require(`./commands/${command}.js`);
        commandFile.run(client, message, args, config, fs);
    } catch (err) {
        console.error(err);
    }
});

//for event testing

/*client.on('message', msg => {
    if (msg.author.id === config.ownerID  ) {
      client.emit('guildMemberAdd', msg.member);
    }
    else {
      return;
    }
});*/

client.on("guildMemberAdd", (member) => {
  try {
        let commandFile = require(`./commands/greet.js`);
        commandFile.run(client, member);
    } catch (err) {
        console.error(err);
    }
});

client.on("guildMemberRemove", (member) => {
  try {
        let commandFile = require(`./commands/leave.js`);
        commandFile.run(client, member);
    } catch (err) {
        console.error(err);
    }
});

client.login(process.env.TOKEN);
