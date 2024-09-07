const {
  items,
  each,
  map,
  reduce,
  find
} = require("./polyfill1")

console.log(
  "-------------------------------Each Function-------------------------------"
)
const myEach = each(items, (num) => num * 2)
console.log(myEach)

console.log(
  "-------------------------------Map Function-------------------------------"
)
const myMap = map(items, (x) => x + 2)
console.log(myMap)

console.log(
  "-------------------------------Reduce Function-------------------------------"
)
const reduceNum = reduce(items, (acc, curr) => acc + curr, 0)
console.log(`This is reducedNum: ${reduceNum}`)

console.log(
  "-------------------------------Find Function-------------------------------"
)
const elemToFind = 15
const getNum = find(items, (elem) => elem === elemToFind)
console.log(getNum)