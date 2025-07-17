const login = require("fca-unofficial");
const fs = require("fs");

const appState = JSON.parse(fs.readFileSync("appstate.json", "utf8"));

login({ appState }, (err, api) => {
  if (err) return console.error(err);

  api.listenMqtt((err, event) => {
    if (err) return console.error(err);
    
    if (event.body && event.body.toLowerCase() === "hi") {
      api.sendMessage("Hello from Rudra Mirai Bot!", event.threadID);
    }
  });
});
