const fs = require("fs");

const PRIORITY = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

const DATA = fs
  .readFileSync("input.txt", "utf8")
  .toString()
  .trim()
  .split("\n")
  .map(str => [...str]);

const resultOne = DATA
  .map(line => [line.slice(0, line.length /2), line.slice(line.length /2)])
  .map(([ruck1, ruck2]) => 
    ruck1.find(letter => ruck2.includes(letter))
  )
  .map(letter => PRIORITY.indexOf(letter) + 1)
  .reduce((acc, curr) => acc + curr)

console.log(resultOne);

const resultTwo = DATA
  .reduce((acc, curr) => {
    if (acc[acc.length - 1].length === 3) acc.push([]);
    acc[acc.length - 1].push(curr);
    return acc;
  }, [[]])
  .map(([elf1, elf2, elf3]) => 
    elf1.find(letter => elf2.includes(letter) && elf3.includes(letter))
  )
  .map(letter => PRIORITY.indexOf(letter) + 1)
  .reduce((acc, curr) => acc + curr)

console.log(resultTwo);
