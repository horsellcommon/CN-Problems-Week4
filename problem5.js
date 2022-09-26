/*
Write a function that takes two strings (a and b) as arguments
Create an object that has a property with key 'a' and a value of 'b'
Return the object
*/


const twoStringedArg = (a, b) => {
    const keyName = a
    let newObject = {}
    newObject[keyName] = b
    return newObject
};

module.exports = {twoStringedArg}