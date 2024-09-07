const {
  items,
  each,
  map
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