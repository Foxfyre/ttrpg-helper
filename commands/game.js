const Discord = require('discord.js');
const fs = require("fs");
const playerData = JSON.parse(fs.readFileSync("./commands/players.json","utf8"));
const classes = ["barbarian", "bard", "cleric", "druid", "fighter", "monk", "paladin", "ranger", "rogue", "sorcerer", "warlock", "wizard"];

let playerClass = "";
let playerName = "";
let playerLevel = 0;
let playerPoints = 0;
let playerId = 0;
let timeOut;




exports.run = (client, message, args) => {
  
  let playerList = [];
  let playerIndex = 0;
  let playerExists;
  playerName = message.member.displayName;
  playerId = message.member.id;
  console.log("message content " + message.content);
  if (args[0] === "join") {
    
  
    playerData.map((players, index) => {
      playerList.push(players.name);
      if (players.id === message.member.id) {
        playerExists = true;
        playerIndex = index;
        return index;
      } else {
        playerExists = false;
      }
    })
    console.log(playerIndex);
    
    console.log(playerList);
  
    if (playerExists === true) {
      message.channel.send(`You are already in the game as ${playerName} the ${playerData[playerIndex].class}`);
    } else if (playerExists !== true) {
    classSelection(message);
    }
  }


function classSelection (message) {
  message.channel.send("please select your class from the following choices. barbarian, bard, cleric, druid, fighter, monk, paladin, ranger, rogue, sorcerer, warlock, wizard");
  // I may be able to shorten this by just making the filter a message from the author. but that may also run with the trigger as well...
  const classFilter = message => (message.content.includes("barbarian") || message.content.includes("bard") || message.content.includes("cleric") || message.content.includes("druid") || message.content.includes("fighter") || message.content.includes("monk") || message.content.includes("paladin") || message.content.includes("ranger") || message.content.includes("rogue") || message.content.includes("sorcerer") || message.content.includes("warlock") || message.content.includes("wizard")) && (message.author.bot == false) && (message.member.id === playerId);

  const collector = message.channel.createMessageCollector(classFilter, {maxMatches: 1,  time: 15000 });
    collector.on('collect', message => {
      message.content
      playerClass = message.content;
    console.log(`Chosen class is ${playerClass}`);
  });
  
  collector.on('end', collected => {
    let entry = {
      "name": playerName,
      "id": playerId,
      "class": playerClass,
      "level": playerLevel,
      "points": playerPoints
    }
    playerData.push(entry);
    fs.writeFile("./commands/players.json", JSON.stringify(playerData), (err) => console.error);
    message.channel.send(`${playerName} the ${playerClass} has entered the game!`);
  });  
  
  return playerClass;
  }
}

/*
    if (linkArray.includes(url) === true) {
      message.channel.send("That entry already exists");
    } else if (linkArray.includes(url) !== true) {
      let entry = {
      "category": category,
      "url": url,
      "http": http,
      "description": description,
      "created": creator
      }
      linkList.push(entry);
      //insertionSort(linkList);
      fs.writeFile("./commands/links.json", JSON.stringify(linkList), (err) => console.error);
      message.channel.send(url + " created.");
      } 
      */