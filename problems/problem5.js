/*
Write a function that takes two strings (a and b) as arguments
Create an object that has a property with key 'a' and a value of 'b'
Return the object
*/

let newObject = {}
const twoStringedArg = (a, b) => {
    newObject[a] = b // head is wrecked
};

console.log(twoStringedArg(newObject))

module.exports = {twoStringedArg}