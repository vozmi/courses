/**
 * Learn how to use node module exports/imports
 */
let count = 0

const increment = () => ++count
const decrement = () => --count

const getCount = () => count

module.exports = {
    increment,
    decrement,
    getCount,
}
