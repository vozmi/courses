/**
 * Learn about readline module and callbacks
 */
const readline = require('readline')
const { EventEmitter } = require('events')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

module.exports = (questions, done) => {
    const answers = []
    const [firstQuestion] = questions

    const emitter = new EventEmitter()

    const questionAnswered = (answer) => {
        emitter.emit('answer', answer)
        answers.push(answer)
        if (answers.length < questions.length) {
            rl.question(`${questions[answers.length]}\n> `, questionAnswered)
        } else {
            rl.close()
            return done(answers)
        }
    }

    rl.question(`${firstQuestion}\n> `, questionAnswered)
    return emitter
}
