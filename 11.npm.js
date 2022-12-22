//  npm --v
//  npm i <packagename>

//  npm install -g <packagename>
//npm init -y - by default
const _ = require('lodash')

const items = [1, [ 2,[3,5,[4]]]]
const newItem = _.flattenDeep(items)
console.log(newItem)

// able to use lodash as it has a functionality of spliting the array

