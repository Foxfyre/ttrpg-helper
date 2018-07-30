module.exports = client => {
    console.log("I am ready to serve");
    //client.channels.get("450061421909245952").send("I am ready to serve");
  const http = require('http');
  const https = require('https');
  const express = require('express');
  const app = express();
  app.get("/", (request, response) => {
    console.log(Date.now() + " Ping Received");
    response.sendStatus(200);
  });

  app.listen(process.env.PORT);
  setInterval(() => {
    https.get(`https://${process.env.PROJECT_DOMAIN}.glitch.me/`);
  }, 280000);
  
}