const Discord = require('discord.js');

exports.run = (client, member) => {
  
  let memberId = member.id;
  let userName = member.user.username;
  
  member.guild.channels.find("name","admin").send(`${userName} has decided to leave us. They will be missed.`)
  
}