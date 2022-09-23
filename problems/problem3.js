/* Write a function that takes a number (a) as argument
Round a to the 2nd digit after the comma
Return the rounded number
*/

const numberRound = (a) => {
    return Number.parseFloat(a).toFixed(2);
}
console.log(numberRound(26.1379))

const mathRound = (a) => {
    return Math.round(a * 100) / 100
}
console.log(mathRound(26.1379))

module.exports = {
    numberRound
}