const fs = require("fs");

const MOVES = fs
    .readFileSync("input.txt", "utf8")
    .toString()
    .trim()
    .split("\n")
    .map(str => str
        .replace(/move /gi, '')
        .replace(/ from|to /gi, ",")
        .split(',')
        .map(str => parseInt(str, 10))
    )
    .map((([crates, from, to]) => [crates, from - 1, to - 1]));

const STACKS = [
    'BWN',
    'LZSPTRDMB',
    'QHZWR',
    'WDVJZR',
    'SHMB',
    'LGNJHVPB',
    'JQZFHDLS',
    'WSFJGQB',
    'ZWMSCDJ'
]

const resultOne = MOVES
    .reduce((acc, [crates, from, to]) => {
        // for (let i = 0; i < crates; i++) {
        //     acc[to].push(acc[from].pop());
        // }
        acc[to].push(...acc[from]
            .splice(acc[from].length - crates)
            .reverse()
        );
        return acc;
    }, STACKS.map(stack => stack.split('')))
    .map(stack => stack.pop())
    .join('');

console.log(resultOne);

const resultTwo = MOVES
    .reduce((acc, [crates, from, to]) => {
        acc[to].push(...acc[from]
            .splice(acc[from].length - crates)
        );
        return acc;
    }, STACKS.map(stack => stack.split('')))
    .map(stack => stack.pop())
    .join('');

console.log(resultTwo);
