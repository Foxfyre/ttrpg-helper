exports.run = (client, message, args) => {
  let str = 0;
  let dex = 0;
  let con = 0;
  let int = 0;
  let wis = 0;
  let cha = 0;
  let resultsArray = [];
  let resultsSum = 0;
  
  const diceSide = 6
  let shifted;
  let strArray = [];
  let dexArray = [];
  let conArray = [];
  let intArray = [];
  let wisArray = [];
  let chaArray = [];
  const reducer = (( accumulator, currentValue ) => accumulator + currentValue);
  

    if (args[0] === "4d") { 
    const diceQty = 4;
    for (let i = 0; i < diceQty; i++) {
      let randNum = Math.floor(Math.random() * (diceSide)) + 1;
      resultsArray.push(randNum);
      strArray = resultsArray.sort();
    }
    strArray.shift();
    str = strArray.reduce(reducer);
    resultsArray = [];
  
    for (let i = 0; i < diceQty; i++) {
      let randNum = Math.floor(Math.random() * (diceSide)) + 1;
      resultsArray.push(randNum);
      dexArray = resultsArray.sort();
    }
    dexArray.shift();
    dex = dexArray.reduce(reducer);
    resultsArray = [];
  
    for (let i = 0; i < diceQty; i++) {
      let randNum = Math.floor(Math.random() * (diceSide)) + 1;
      resultsArray.push(randNum);
      conArray = resultsArray.sort();
    }
    conArray.shift();
    con = conArray.reduce(reducer);
    resultsArray = [];
  
    for (let i = 0; i < diceQty; i++) {
      let randNum = Math.floor(Math.random() * (diceSide)) + 1;
      resultsArray.push(randNum);
      intArray = resultsArray.sort();
    }
    intArray.shift();
    int = intArray.reduce(reducer);
    resultsArray = [];
  
    for (let i = 0; i < diceQty; i++) {
      let randNum = Math.floor(Math.random() * (diceSide)) + 1;
      resultsArray.push(randNum);
      wisArray = resultsArray.sort();
    }
    wisArray.shift();
    wis = wisArray.reduce(reducer);
    resultsArray = [];
  
    for (let i = 0; i < diceQty; i++) {
      let randNum = Math.floor(Math.random() * (diceSide)) + 1;
      resultsArray.push(randNum);
      chaArray = resultsArray.sort();
    }
    chaArray.shift();
    cha = chaArray.reduce(reducer);
    resultsArray = [];
  } else if (args[0] === "3d") {
  
    const diceQty = 3;
    
    for (let i = 0; i < diceQty; i++) {
      let randNum = Math.floor(Math.random() * (diceSide)) + 1;
      resultsArray.push(randNum);
      str += randNum;
    }
    for (let i = 0; i < diceQty; i++) {
      let randNum = Math.floor(Math.random() * (diceSide)) + 1;
      resultsArray.push(randNum);
      dex += randNum;
    }
    for (let i = 0; i < diceQty; i++) {
      let randNum = Math.floor(Math.random() * (diceSide)) + 1;
      resultsArray.push(randNum);
      con += randNum;
    }
    for (let i = 0; i < diceQty; i++) {
      let randNum = Math.floor(Math.random() * (diceSide)) + 1;
      resultsArray.push(randNum);
      int += randNum;
    }
    for (let i = 0; i < diceQty; i++) {
      let randNum = Math.floor(Math.random() * (diceSide)) + 1;
      resultsArray.push(randNum);
      wis += randNum;
    }
    for (let i = 0; i < diceQty; i++) {
      let randNum = Math.floor(Math.random() * (diceSide)) + 1;
      resultsArray.push(randNum);
      cha += randNum;
    }
  } else {
    message.channel.send("Please use one of the following methods, '!stats 3d' or '!stats 4d'");
    return;
  }
  //message.channel.send(`Strength = ${str}\nDexterity = ${dex}\nConstitution = ${con}\nIntelligence = ${int}\nWisdom = ${wis}\nCharisma = ${cha}`);
    message.channel.send({embed: {
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "Stats roll",
    description: "Stats for generating a new character",
    fields: [{
        name: "Strength",
        value: str
      },
      {
        name: "Dexterity",
        value: dex
      },
      {
        name: "Constitution",
        value: con
      },
      {
        name: "Intelligence",
        value: int
      },
      {
        name: "Wisdom",
        value: wis
      },
      {
        name: "Charisma",
        value: cha
      },
    ],
    timestamp: new Date(),
  }
});
}