 const http = require('http')
 const server = http.createServer((req,res) => {
    if(req.url ==='/'){ 
        res.end('welcome')// if it is a home page
    }
    if(req.url==='/about'){
        res.end('here is a short history')
    }
    res.end(`
    <h1>OOPS!</h1>
    <a href = "/"> back home</a>
    `)
    })
 //console.log(req) // will fetch the info about req in terminal
 //res.write('welcome')
 //res.end()//end req

 //we r looking for url property coz its gnna tell what adress it is requesting

 //this function is looking for callbacks and has 2 parameters calling them req, res
 //if client is requestin the your browser it will information about the method and all usegul stuff in req object 
 // req is what u r sending back 
 //at what port u r listening to 

 server.listen(5000)

 // nothing on the terminal , go to localhost and will show welcome
 //srver is waiting for a request
