/**
 * Learn about using custom module on more practical example and with EventEmitter
 */
const collectAnswers = require('./lib/collectAnswers')

const questions = [
    "What is your name?",
    "Where do you live?",
    "What are you going to do with Node.js?",
]

const answerEvents = collectAnswers(questions, (answers) => {
    console.log('Thank you for your answers!')
    console.log(answers)
    process.exit(0)
})

answerEvents.on('answer', (answer) => {
    console.log(`The answer is ${answer}`)
})
