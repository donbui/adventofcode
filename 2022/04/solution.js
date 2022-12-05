const fs = require("fs");

const PRIORITY = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

const DATA = fs
    .readFileSync("input.txt", "utf8")
    .toString()
    .trim()
    .split("\n")
    .map(str => str.split(',')
        .map(str => str.split('-').map(str => parseInt(str.trim())))
    )

const resultOne = DATA
    .filter(item =>
        (item[0][0] >= item[1][0] && item[0][1] <= item[1][1]) ||
        (item[0][0] <= item[1][0] && item[0][1] >= item[1][1])
    )
    .length

console.log(resultOne);

const resultTwo = DATA
    .filter(item =>
        (item[0][0] >= item[1][0] && item[0][0] <= item[1][1]) ||
        (item[1][0] >= item[0][0] && item[1][0] <= item[0][1]) ||
        (item[0][1] >= item[1][0] && item[0][1] <= item[1][1]) ||
        (item[1][1] >= item[0][0] && item[1][1] <= item[0][1])
    )
    .length

console.log(resultTwo);