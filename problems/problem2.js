/*
Write a function that takes a string (a) as argument
Extract the first half a
Return the result
*/


const halfString = () => {
    let fullStr = "fullstrings"
    str = fullStr.split("").reverse().slice(6).reverse().join("")
    return str
}

console.log(halfString("desmonds"))

const halfString2 = (str) => {
    if (str.length % 2 == 0){
        return str.slice(0, str.length / 2)
    }
    return str
}

const halfStringImproved = (str) => {
    const halved = str.split("").reverse().slice(str.length / 2).reverse().join("")
    return halved
}

module.exports = {
    halfString,
    halfString2,
    halfStringImproved
}