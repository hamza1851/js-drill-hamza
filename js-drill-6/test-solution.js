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


