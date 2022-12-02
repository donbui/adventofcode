const fs = require("fs");

const sortedElfTotals = fs
  .readFileSync("input.txt", "utf8")
  .toString()
  .trim()
  .split("\n\n")
  .map((elf) =>
    elf
      .split("\n")
      .map((item) => parseInt(item, 10))
      .reduce((acc, curr) => acc + curr, 0)
  )
  .sort((a, b) => b - a);

console.log(sortedElfTotals[0]);
console.log(sortedElfTotals[0] + sortedElfTotals[1] + sortedElfTotals[2]);
