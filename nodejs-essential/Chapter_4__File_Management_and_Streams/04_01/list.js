/**
 * Learn about fs readdir
 */
const fs = require('fs')

fs.readdir('./', (err, files) => {
    if (err) {
        throw err
    }
    console.log(files)
})

console.log('reading files...')
