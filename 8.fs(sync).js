const {readFileSync , writeFileSync, readFile} = require('fs');
console.log('starting first task')
const first = readFileSync('./content/first.txt','utf-8')
const second = readFileSync('./content/second.txt' , 'utf-8')

// console.log(first,second)

writeFileSync('./content/result-sync.txt' ,`here is the result : ${first}`,{flag :'a'})
//here is the result : hello this is forst text file

console.log('done')
console.log('next task')

// starting first task
// done
// next task
