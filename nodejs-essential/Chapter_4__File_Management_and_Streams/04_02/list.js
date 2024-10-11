/**
 * Learn about fs readFile
 */
const fs = require('fs')

fs.readFile('./readme.md', 'utf8', (err, data) => {
    if (err) {
        throw err
    }
    console.log(data)
})

console.log('reading file...')
