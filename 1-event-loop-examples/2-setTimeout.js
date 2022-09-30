// asynchronous = setTimeout()

// started operating process

console.log("First");

setTimeout( () => {  // asynchronous
    console.log("Second");
}, 0);

console.log("Third");

// completed and exited operating system process