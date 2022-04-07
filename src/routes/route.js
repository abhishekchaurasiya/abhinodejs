const express = require('express');
const _ = require('lodash');

// const { chunk, tail } = require('lodash');


const router = express.Router();

const logger = require("../logger/logger");
const util = require("../util/helper");
const validater = require("../validator/formatter")

// Solution - 4 { - (a) Create an array of strings containing the names all the months of a year and split the array into 4 equally sized sub - arrays using the chunk function. Print these sub - arrays }

const _monthsOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const chunksMonths = _.chunk(_monthsOfYear, [3]);


// Solution - 4 { - (b) - Create an array containing the first 10 odd numbers. Using the tail function, return the last 9 elements of it and print them on console. }

let OddArry = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
let tailValue = _.tail(OddArry);


// Solution - 4 { - (c) -  Create 5 arrays of numbers containing a few duplicate values. Using the function union create a merged array with only unique values and print them. }
// The _.union() method is used to take n number of arrays and creates an array of unique values in order, from all given arrays using SameValueZero for equality comparisons.

let unioFromUniqueValue = _.union([1, 4, 6, 7, 3, 9, 3,],
    [3, 23, 45, 7, 13, 69, 10,],
    [1, 23, 45, 7, 13, 29, 11,],
    [11, 40, 16, 7, 69, 9, 10,],
    [12, 41, 69, 77, 33, 13, 3,]);

unioFromUniqueValue.sort((a, b) => {
    if (a > b) {
        return 1;
    } else if (a < b) {
        return -1;
    } else {
        return 0;
    }
});


// Use the function fromPairs to create an object containing key value pairs. For example [“horror”,”The Shining"],[“drama”,”Titanic"],[“thriller”,”Shutter Island"],[“fantasy”,”Pans Labyrinth"]
let pairs = [
    ['horror', "The Shining"],
    ['drama', "Titanic"],
    ['thriller', "Shutter Island"],
    ['fantasy', "Pans Labyrinth"]
]
// The _.fromPairs() method returns an object composed form key-value pairs. This method is the inverse of _.toPairs() method.
let keyValueFromPairs = _.fromPairs(pairs);

router.get('/test-me', function (req, res) {
    res.send('First Problem Solve from Welcome()')
    logger.welcome();
});


router.get('/test-me1', function (req, res) {
    res.send('Second Problem Solve')
    util.printDate();
    util.printMonth();
    util.getBatchInfo()
});

router.get('/test-me2', function (req, res) {
    res.send(`I solve problem 3 and using trim() method `)
    validater.trim()
    validater.changeToLoweCase();
    validater.changeToUpperCase();
});

router.get('/hello', function (req, res) {
    res.send(`I solve problem 4 and using lodash library Chunk  `);

    console.log(chunksMonths);
    console.log(tailValue);
    console.log(unioFromUniqueValue)
    console.log(keyValueFromPairs);
    console.log(keyValueFromPairs.horror);

});

module.exports = router;
// adding this comment for no reason