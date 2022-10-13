// asynchronous "setInterval"

setInterval( () => {
    console.log("Hello world");
}, 2000);

console.log("I will run first");

// process stays alive until
// KILL process = CTRL + C
// unexpected error 