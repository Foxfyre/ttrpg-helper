const Discord = require('discord.js');
const fs = require("fs");
const linkList = JSON.parse(fs.readFileSync("./commands/links.json","utf8"));
const races = ["elf", "human", "dwarf", "halfling"];
const genders = ["female", "male"];
let playerRace = "";
let playerGender = "";
let timeOut;

exports.run = (client, message, args) => {

  raceSelection(message);
    

  

function raceSelection (message) {
   message.channel.send("please select your race from the following choices. elf, human, halfling, dwarf");
  // I may be able to shorten this by just making the filter a message from the author. but that may also run with the trigger as well...
  const raceFilter = message => (message.content.includes('elf')||message.content.includes('human') || message.content.includes('halfling') || message.content.includes('dwarf')) && (message.author.bot == false);

  const collector = message.channel.createMessageCollector(raceFilter, {maxMatches: 1,  time: 15000 });
    collector.on('collect', message => {
      playerRace = message.content;
    console.log(`Chosen race is ${playerRace}`);
    collector.stop()
  });
  
  collector.on('end', collected => {
    message.channel.send(`Your race of ${playerRace} has been recorded`);
    genderSelection(message);
});  
  
  return playerRace;
  
}

function genderSelection (message) {
   message.channel.send("please select your gender from the following choices. female, male");
  
  const filter = message => (message.content.includes('female')||message.content.includes('male')) && (message.author.bot == false);

  const collector = message.channel.createMessageCollector(filter, {maxMatches: 1,  time: 15000 });
    collector.on('collect', message => {
      playerGender = message.content;
      console.log(`Chosen race is ${playerGender}`);
  });
  
  collector.on('end', collected => {
    message.channel.send(`Your gender of ${playerGender} has been recorded`);
    message.channel.send(playerRace + " " + playerGender);
});  
  return playerGender;
}
}



 /* message.channel.send("Please select a race from the available races").then(() => {
    message.channel.awaitMessages(filter, { maxMatches: 2, time: 15000, errors: ['time'] })
        .then(collected => { 
          message.channel.send(collected);
          message.channel.send(message.content);
    })
        .catch(collected => {
            message.channel.send('Looks like nobody got the answer this time.');
        });*/
/*
  message.channel.send("please select your race from the following choices. elf, human, halfling, dwarf");
  // I may be able to shorten this by just making the filter a message from the author. but that may also run with the trigger as well...
  const raceFilter = message => (message.content.includes('elf')||message.content.includes('human') || message.content.includes('halfling') || message.content.includes('dwarf')) && (message.author.bot == false);

  const collector = message.channel.createMessageCollector(raceFilter, {maxMatches: 1,  time: 15000 });
    collector.on('collect', message => {
      playerRace = message.content;
    message.channel.send(message.content);
    console.log(`Collected ${message.content}`);
    console.log(`Chosen race is ${playerRace}`);
  });
  
  collector.on('end', collected => {
    message.channel.send(`Your race of ${playerRace} has been recorded`);
}); 
    
  message.channel.send("please select your gender from the following choices. female, male");
  
  const filter = message => (message.content.includes('female')||message.content.includes('male')) && (message.author.bot == false);

  const collector = message.channel.createMessageCollector(filter, {maxMatches: 1,  time: 15000 });
    collector.on('collect', message => {
      playerGender = message.content;
      message.channel.send(message.content);
      console.log(`Collected ${message.content}`);
      console.log(`Chosen race is ${playerGender}`);
  });
  
  collector.on('end', collected => {
    message.channel.send(`Your gender of ${playerGender} has been recorded`);
}); 
  */