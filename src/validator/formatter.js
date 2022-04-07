
const trim = function () {
    const string = 'funcitonUP  ';
    const print = string.trim()
    console.log(print);
    console.log(module);
}

const changeToLoweCase = function () {
    const stringName = "functionUp";

    //The trim() method removes whitespace from both ends of a string and returns a new string, without modifying the original string. 
    // trimRight() and trimLeft() ka use kar sakte hai
    const change = stringName.toLowerCase()
    console.log(change);
}

const changeToUpperCase = function () {
    const stringName = "funcitonUp";
    const chagne = stringName.toUpperCase();
    console.log(chagne)
}
module.exports = { trim, changeToLoweCase, changeToUpperCase }