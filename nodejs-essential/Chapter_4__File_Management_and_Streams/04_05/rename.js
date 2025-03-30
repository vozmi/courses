/**
 * Learn about fs renameSync and unlink
 */
const fs = require('fs')

fs.renameSync('./lib/config.js', './lib/project-config.js')

fs.renameSync('./lib/notes.md', './notes.md')

fs.unlink('./lib/project-config.js', function (err) {
    if (err) {
        throw err
    }
    console.log('File deleted!')
})
