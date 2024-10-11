/**
 * Learn about process stdin/stdout and exit
 */
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

process.stdin.on('data', (data) => {
  const answer = data.toString().trim()
  answers.push(answer)
  if (answers.length < questions.length) {
    ask(questions[answers.length])
  } else {
    process.exit(0)
  }
})

process.on('exit', () => {
  process.stdout.write('\n\n\n')
  process.stdout.write(`Go ${answers[1]} ${answers[0]} you can finish writing ${answers[2]} later`)
})
