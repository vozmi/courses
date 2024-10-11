/**
 * Learn about fs move and remove for directories and files
 */
const fs = require('fs')

fs.renameSync('./assets/logs', './accounts/logs')
console.log('logs folder moved')

fs.rmdir('./assets', (err) => {
    if (err) {
        throw err
    }
    console.log('assets folder deleted')
})

fs.readdirSync('./accounts').forEach((file) => {
    fs.renameSync(`./accounts/${file}`, `./library/${file}`)
})

fs.rmdirSync('./accounts')
