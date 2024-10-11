/**
 * Learn about fs writeFile and appendFile
 */
const fs = require('fs')

const md = `
    This is a New File
    ======================
    
    ES6 template strings are cool! They honor line breaks and indentation.
    
    * Template strings
    * Node File System
    * Readline CLI
`

fs.writeFile('newFile.md', md.trim(), (err) => {
    if (err) {
        throw err
    }
    fs.appendFileSync('newFile.md', '\n\n### Node.js Everyone!')
    console.log('File created!')
})

console.log('writing file...')
