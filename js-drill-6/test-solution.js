import {
  counterFactory,
  limitFunctionCallCount,
  cacheFunction,
} from "./solution.js"

console.log("--------------------Counter Function--------------------")
const num = counterFactory()
num.increment()
num.increment()
num.increment()
console.log(num.increment())
num.decrement()
num.decrement()
num.decrement()
num.decrement()
console.log(num.decrement())


console.log("--------------------Limit Function--------------------")

let limit = limitFunctionCallCount((x) => x * 3, 3)
console.log(limit(3))
console.log(limit(12))
console.log(limit(32))
console.log(limit(7))