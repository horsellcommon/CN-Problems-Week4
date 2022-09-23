/*
Write a function that takes an array (a) and a value (n) as argument
Return the nth element of 'a'
*/

let array1 = ["joe", 32, "gary"]
const nthElement = (a, n) => {
    if (n == 0){
        return a[0]
    } else{
        return (n > 0 ? a.slice(n, n + 1) : a.slice(n));
    }
}

console.log(nthElement(array1, 0))

module.exports = {
    nthElement
}