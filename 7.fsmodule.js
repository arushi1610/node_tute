const path = require('path')

console.log(path.sep) // return platform specific seperator

const filePath = path.join('/content/', 'subfolder','test.txt')
console.log(filePath)
// \
// \content\subfolder\test.txt

const base = path.basename(filePath)
console.log(base) //test.txt

const absolute = path.resolve('__dirname' , 'subfolder' , 'test.txt')
console.log(absolute)
//C:\Users\HP\Desktop\code_\freecodecamp_nodejs_express\node\intro-to-node\__dirname\subfolder\test.txt