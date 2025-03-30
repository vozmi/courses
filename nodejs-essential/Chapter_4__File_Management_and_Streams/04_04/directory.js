/**
 * Learn about fs mkdir and existsSync
 */
const fs = require('fs')

if (fs.existsSync('your-files-here')) {
    console.log('Directory already exists!')
    process.exit(0)
}

fs.mkdir('your-files-here', (err) => {
    if (err) {
        throw err
    }
    console.log('Directory created!')
})

console.log('creating directory...')
