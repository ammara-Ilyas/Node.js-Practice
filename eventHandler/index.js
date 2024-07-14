const EventEmitter = require("events");

const event = new EventEmitter();
console.log(event);
event.on("Say my name", () => {
  console.log("My name is Ammara Ilyas");
});
event.on("What are you doing", () => {
  console.log("I'm doing coding");
});
event.emit("Say my name");
event.emit("What are you doing");
event.on("checkPage", (status, msg) => {
  console.log(`Status code is ${status} and page is ${msg}`);
});
event.emit("checkPage", 200, "ok");
