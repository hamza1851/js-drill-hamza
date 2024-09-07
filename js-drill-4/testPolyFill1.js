const {
  items,
  each,
} = require("./polyfill1")

console.log(
  "-------------------------------Each Function-------------------------------"
)
const myEach = each(items, (num) => num * 2)
console.log(myEach)
