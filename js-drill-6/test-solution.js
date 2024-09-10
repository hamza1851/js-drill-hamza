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

console.log("--------------------Cache Function--------------------")

const ans = cacheFunction((x) => x % 2 === 0)
console.log(ans(3))
console.log(ans(4))
console.log(ans(4))
console.log(ans(3))
console.log(ans(6))
console.log(ans(6))
