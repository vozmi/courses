/**
 * Learn how to use event emitter
 */
const events = require('events')

const emitter = new events.EventEmitter()

emitter.on('customEvent', (message, user) => {
    console.log(`${user}: ${message}`)
})

emitter.emit('customEvent', 'Hello World', 'Computer')
emitter.emit('customEvent', 'That\'s cool!', 'Maks')

process.stdin.on('data', (data) => {
    const input = data.toString().trim()

    if (input === 'exit') {
        emitter.emit('customEvent', 'Goodbye!', 'process')
        emitter.removeAllListeners()
        process.exit(0)
    }

    emitter.emit('customEvent', input, 'terminal')
})
