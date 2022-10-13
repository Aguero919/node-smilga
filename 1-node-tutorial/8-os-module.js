// "In-built" modules
const os = require("os");  // "operating system" object
// shows all infos about the "OS"

// info about the current user
const user = os.userInfo();
console.log(user);

// method returns the system runtime in secs
console.log(`Ths system is up for: ${os.uptime()} seconds`);

// return info about other system info

const systemOS = {
    name:os.type(),
    release:os.release(),
    totalMem: os.totalmem(),
    freeMem:os.freemem()
};

console.log(systemOS);
