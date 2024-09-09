const {
  items,
  nestedArray,
  each,
  map,
  reduce,
  find,
  filter,
  flatten,
} = require("./polyfill1")

console.log(
  "-------------------------------Each Function-------------------------------"
)
each(items, (num, idx, elements) => (elements[idx] = num * 2))
console.log(items)

console.log(
  "-------------------------------Map Function-------------------------------"
)
const myMap = map(items, (x) => x + 2)
console.log(myMap)

console.log(
  "-------------------------------Reduce Function-------------------------------"
)
const reduceNum = reduce(items, (acc, curr) => acc + curr, 5)
console.log(`This is reducedNum: ${reduceNum}`)

console.log(
  "-------------------------------Find Function-------------------------------"
)
const elemToFind = 15
const getNum = find(items, (elem) => elem === elemToFind)
console.log(getNum)

console.log(
  "-------------------------------Filter Function-------------------------------"
)
const filteredNum = filter(items, (x) => x % 2 === 0)
console.log(filteredNum)

console.log(
  "-------------------------------Flatten Function-------------------------------"
)
const flattenArray = flatten(nestedArray)
console.log(flattenArray)
