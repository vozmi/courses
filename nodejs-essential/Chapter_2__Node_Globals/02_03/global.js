/**
 * Learn about process object arguments
 */
function grab(flag) {
  const index = process.argv.indexOf(flag)

  if (index === -1 || process.argv.length <= index + 1) {
    return null
  }

  return process.argv[index + 1]
}

const greeting = grab('--greeting')
const name = grab('--name')

if (greeting && name) {
  console.log(`${greeting}, ${name}!`)
}
