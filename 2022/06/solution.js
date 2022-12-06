const fs = require("fs");

const STREAM = fs
    .readFileSync("input.txt", "utf8")
    .split('')

const findMarkerPositionByLength = (data, length) =>
    data.findIndex((_, index) =>
        (new Set(data.slice(index - length, index))).size === length
    );

console.log(findMarkerPositionByLength(STREAM, 4));
console.log(findMarkerPositionByLength(STREAM, 14));