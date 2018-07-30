exports.run = (client, message, args) => {

  message.channel.send({embed: {
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "Help",
    description: "These are the current help topics for the ttrpg-help bot.",
    fields: [{
        name: "roll",
        value: "tba"
      },
      {
        name: "role",
        value: "tba"
      },
    ],
    timestamp: new Date(),
  }
});
}