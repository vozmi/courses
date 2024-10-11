/**
 * Learn about global object
 */
const hello = "Hello World from Node.js"
const justNode = hello.slice(17)

console.log(hello)
global.console.log(`Hello ${justNode}!`)
