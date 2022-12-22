const {readFile, writeFile} = require('fs')
console.log('stating the first task')
readFile('./content/first.txt', 'utf8', (err,result) => {
    if (err){
        console.log(err)
        return
    }
    const first = result
    readFile('./content/second.txt','utf8', (err,result)=>{
        if(err){
        console.log(err)
        return
        }

        const second = result
        writeFile('./content/result-async.txt',
        `result  :${first}, ${second}`,// under tilde
        (err,result)=>{
            if(err)
        {
            console.log(err)
            return 
        }
        //console.log(result)
        console.log('done with the task')
        })
        
    })
})

console.log('starting next task')

//without utf8 it will give buffer
//use of callback function , to handle them we use err,result

// stating the first task
// starting next task
// done with the task

//bit messy ,alt using promises, async-await