import EventEmitter from "events";
//creating instance
const customEmitter = new EventEmitter();
//1. on: listen/register for an event.
//2. once: listen/register for an event.
//3. emit/call an event

customEmitter.on("response", (name, id) => {
  console.log(`user name: ${name}. Id: ${id}`);
});
customEmitter.emit("response", "anugraha", 22);
customEmitter.emit("response", "ramit", 223);
customEmitter.emit("response", "vandai", 23);

customEmitter.once("response", (name, id) => {
  console.log(`user name: ${name}. Id: ${id}`);
});
customEmitter.emit("response", "anugraha", 22);
