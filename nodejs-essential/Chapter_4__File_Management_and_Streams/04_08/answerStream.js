/**
 * Learn about fs writeable streams
 */
const fs = require('fs')

let answerStream

const questions = [
    "What is your name?",
    "What would you rather be doing?",
    "What is your preferred programming language?",
]
const answers = []

function ask(question) {
    process.stdout.write(`\n${question}: `)
}

ask(questions[0])

process.stdin.once('data', (data) => {
    const name = data.toString().trim()
    const fileName = `./${name}.md`
    if (fs.existsSync(fileName)) {
        fs.unlinkSync(fileName)
    }
    answerStream = fs.createWriteStream(fileName)
    answerStream.write(`Question Answers for ${name}\n==========\n`)
})

process.stdin.on('data', (data) => {
    const answer = data.toString().trim()

    answerStream.write(`Question: ${questions[answers.length]}\nAnswer: ${answer}\n\n`)
    answers.push(answer)

    if (answers.length < questions.length) {
        ask(questions[answers.length])
    } else {
        process.exit(0)
    }
})

process.on('exit', () => {
    answerStream.close()
    process.stdout.write('\n\n\n')
    process.stdout.write(`Go ${answers[1]} ${answers[0]} you can finish writing ${answers[2]} later`)
    process.stdout.write('\n\n\n')
})
