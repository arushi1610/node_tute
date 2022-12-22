const amount = 12

if(amount > 10)
console.log('hello')

/* global - no window
require - function to use modules
process = info about env where the program is being excuted
__filename
__dirname
module - info about current module

browser 
dom . 
window
es6


nodejs = env to run js outside the browser
no window
no dom
common js

repl
node -enter
> //inside repl
*/

console.log(__dirname) //C:\Users\HP\Desktop\intro-to-node
setInterval(() => {
    console.log('world')
} , 1000) 
/*world
world
world
world
world
world
world
*/