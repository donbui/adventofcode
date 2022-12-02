const fs = require("fs");

const totalScoreOne = fs
  .readFileSync("input.txt", "utf8")
  .toString()
  .replace(/A|X/gi, "1")
  .replace(/B|Y/gi, "2")
  .replace(/C|Z/gi, "3")
  .trim()
  .split("\n")
  .map((round) => {
    [oppHand, myHand] = round.split(" ").map((x) => parseInt(x, 10));

    let result = 0;
    if (oppHand === myHand) {
      result += 3;
    } else if (myHand - oppHand === 1 || myHand - oppHand === -2) {
      result += 6;
    }

    return myHand + result;
  })
  .reduce((acc, curr) => acc + curr, 0);

console.log(totalScoreOne);

const totalScoreTwo = fs
  .readFileSync("input.txt", "utf8")
  .toString()
  .replace(/A/gi, "1")
  .replace(/B/gi, "2")
  .replace(/C/gi, "3")
  .replace(/X/gi, "0")
  .replace(/Y/gi, "3")
  .replace(/Z/gi, "6")
  .trim()
  .split("\n")
  .map((round) => {
    [oppHand, result] = round.split(" ").map((x) => parseInt(x, 10));

    let myHand;
    if (result === 0) {
      myHand = oppHand === 1 ? 3 : oppHand - 1;
    } else if (result === 3) {
      myHand = oppHand;
    } else if (result === 6) {
      myHand = oppHand === 3 ? 1 : oppHand + 1;
    }

    return myHand + result;
  })
  .reduce((acc, curr) => acc + curr, 0);

console.log(totalScoreTwo);
