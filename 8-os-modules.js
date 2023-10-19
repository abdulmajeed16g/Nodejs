const os = require(`os`)

//info about the user
const user = os.userInfo()
console.log(user)


//methods return the sys uptime  in secconds
console.log(`the system uptime is ${os.uptime}`)

const currentos = {
    name:os.type(),
    release:os.release(),
    totalMen:os.totalmem(),
    freeMem:os.freemem(),
}

console.log(currentos)