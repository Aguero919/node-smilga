// other built in modules utilizes "events" module
const EventEmitter = require("events");  // is a class

const customEmitter = new EventEmitter();  // is now an object(is a custom made)
/*   two types of events =  1) on >> listen for an event
                            2) emit >> emits an event
*/

// intuition = when an event is emitted it will invoke a callback
customEmitter.on("response", (name, age) => {  // custom built event handler(listener) and custom built event "response"
    console.log(`data recieved, user: ${name}, age: ${age} `)
});

// do other logic with the same event
customEmitter.on('response', () => {
    console.log("some other logic here");
})

  // calling the event to happen which in turns invokes a callback
  customEmitter.emit("response", "John", 35); // can pass in argument