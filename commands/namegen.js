const name = require("./name.json");

exports.run = (client, message, args, config, fs) => {
    const race = args[0].toLowerCase();
    const gender = args[1].toLowerCase();
    let charName;
    if (args[0] === "human") {
        let randomFirst = Math.floor(Math.random() * name[args[0]][args[1]].length);
        let randomLast = Math.floor(Math.random() * name[args[0]]["last"].length);
        let nameFirst = name[args[0]][args[1]][randomFirst];
        let nameLast = name[args[0]]["last"][randomLast];
        message.channel.send("Please welcome " + nameFirst + " " + nameLast + "!" + " The " + race + " " + gender);
    }

    else if (args[0] === "dwarf") { 
        let nameLast;
        let randomElement = Math.floor(Math.random() * name[args[0]]["element"].length + 1);
        let randomFirst = Math.floor(Math.random() * name[args[0]][args[1]].length + 1);
        let randomLast = Math.floor(Math.random() * name[args[0]]["male"].length);

        let nameElement = name[args[0]]["element"][randomElement];
        let nameFirst = name[args[0]][args[1]][randomFirst];
        nameFirst = nameElement + nameFirst;
        if (args[1] === "female") {
            let nameLast = name[args[0]]["male"][randomLast] + "sdottir";
            message.channel.send("Please welcome " + nameFirst + " " + nameLast + "!" + " The " + race + " " + gender);
        } else if (args[1] === "male") {
            let nameLast = name[args[0]]["male"][randomLast] + "son";
            message.channel.send("Please welcome " + nameFirst + " " + nameLast + "!" + " The " + race + " " + gender);
        }
    }  

    else if (args[0] === "elf") {
        let randomElement = Math.floor(Math.random() * name[args[0]]["element"].length);
        let randomConnector = Math.floor(Math.random() * name[args[0]]["connector"].length);
        let randomFirst = Math.floor(Math.random() * name[args[0]][args[1]].length);
        let randomLast = Math.floor(Math.random() * name[args[0]]["surname"].length);
        let connectorBool = Math.floor(Math.random() * 100);
        let nameConnector;
        let elfName;
        console.log(connectorBool);
        if (connectorBool > 51) {
            nameConnector = name[args[0]]["connector"][randomConnector];
            //return nameConnector;
        } else {
            nameConnector = "";
            //return nameConnector;
        }
        //console.log(nameConnector);
        let nameFirst = (name[args[0]]["element"][randomElement]) + nameConnector + (name[args[0]][args[1]][randomFirst]);        
        let nameLast = name[args[0]]["surname"][randomLast];
        elfName = nameFirst + " " + nameLast;
        message.channel.send(elfName);
    }

    else if (args[0] === "halfling") {
        let randomElementFirst = Math.floor(Math.random() * name[args[0]]["element"].length);
        let randomElementLast = Math.floor(Math.random() * name[args[0]][args[1]].length);
        let randomLast = Math.floor(Math.random() * name[args[0]]["surname"].length);
        //message.channel.send(random);
        let nameFirst = name[args[0]]["element"][randomElementFirst] + name[args[0]][args[1]][randomElementLast];
        let nameLast = name[args[0]]["surname"][randomLast];

        message.channel.send("Please welcome " + nameFirst + " " + nameLast + "!" + " The " + race + " " + gender);

    }

    else if (args[0] === "gnome") {
        let randomFirst = Math.floor(Math.random() * name[args[0]][args[1]].length);
        let randomLast = Math.floor(Math.random() * name[args[0]]["surname"].length);
        //message.channel.send(random);
        let nameFirst = name[args[0]][args[1]][randomFirst];
        let nameLast = name[args[0]]["surname"][randomLast];
        charName = nameFirst + " " + nameLast;
        message.channel.send(charName + "!" + " The " + race + " " + gender);

    }
}