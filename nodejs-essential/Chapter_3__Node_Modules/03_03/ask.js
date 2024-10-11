/**
 * Learn about readline module and callbacks
 */
const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

const questions = [
    "What is your name?",
    "Where do you live?",
    "What are you going to do with Node.js?",
]

function collectAnswers(questions, done) {
    const answers = []

    const questionAnswered = (answer) => {
        answers.push(answer)
        if (answers.length < questions.length) {
            rl.question(`${questions[answers.length]}\n> `, questionAnswered)
        } else {
            rl.close()
            return done(answers)
        }
    }

    rl.question(`${questions[0]}\n> `, questionAnswered)
}

collectAnswers(questions, (answers) => {
    console.log('Thank you for your answers!')
    console.log(answers)
    process.exit(0)
})
