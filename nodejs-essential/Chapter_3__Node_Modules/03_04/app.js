/**
 * Learn how to use node module exports/imports
 */
const { increment, decrement, getCount } = require('./myModule')

console.log(getCount())
increment()
console.log(getCount())
decrement()
console.log(getCount())
