const Discord = require('discord.js');

exports.run = (client, member) => {
  
  let memberId = member.id;
  let userId = member.user.username;
  
    console.log(`New User "${member.user.username}" has joined "${member.guild.name}"` );
    //member.guild.channels.name("welcome").send(`"${member.user.username}" has joined this server`member.guild.channels.find("name","welcome"));
    member.user.send(`Hey <@!${memberId}>, welcome to Edmonton & Area Tabletop rpg discord! Please take a minute to read the <#470048003395420161>. A list of bot commands are available by typing !help.`)
  

}
