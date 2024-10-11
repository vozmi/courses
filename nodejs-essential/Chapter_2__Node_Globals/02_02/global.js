/**
 * Learn about path module and global __dirname, __filename properties
 */
const path = require('path')

console.log(__dirname)
console.log(__filename)

console.log(`The file name is ${path.basename(__filename)}`)

for (const key in global) {
  console.log(key)
}
