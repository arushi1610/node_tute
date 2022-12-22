// os modules used for interacting with os


const os = require('os')
//info about current user

// const user = os.userInfo()
// console.log(user)

//to get up time of system 

console.log(`The system uptime is ${os.uptime()}`);
const currentOS = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),
}

console.log(currentOS)
// The system uptime is 152164
// {
//   name: 'Windows_NT',
//   release: '10.0.22000',
//   totalMem: 4167356416,
//   freeMem: 352198656
// }