const fs = require("fs");

const TREES = fs
    .readFileSync("input.txt", "utf8")
    .split('\n')
    .map(row => row.split('').map(tree => parseInt(tree)))

const column = columnIndex => TREES.map(row => row[columnIndex])

const resultOne = TREES
    .map((row, i) => row
        .map((tree, j) =>
            (
                row.slice(0, j).every(t => t < tree) ||
                row.slice(j + 1).every(t => t < tree) ||
                column(j).slice(0, i).every(t => t < tree) ||
                column(j).slice(i + 1).every(t => t < tree)
            ) ? 1 : 0)
    )
    .flat()
    .reduce((acc, curr) => acc + curr)

console.log(`Number of trees visible from outside: ${resultOne}`)

const numberOfVisibleTrees = (adjacentTrees, tree) =>
    adjacentTrees.every(t => t < tree)
        ? adjacentTrees.length || 0
        : adjacentTrees.findIndex(t => t >= tree) + 1

const resultTwo = TREES
    .map((row, i) => row
        .map((tree, j) =>
            numberOfVisibleTrees(row.slice(0, j).reverse(), tree) *
            numberOfVisibleTrees(row.slice(j + 1), tree) *
            numberOfVisibleTrees(column(j).slice(0, i).reverse(), tree) *
            numberOfVisibleTrees(column(j).slice(i + 1), tree)
        )

    )
    .flat()
    .reduce((acc, curr) => curr > acc ? curr : acc, 0)

console.log(`Maximum view score: ${resultTwo}`)
