const { testObject, keys, values, mapObject, pairs } = require("./polyfill2")

console.log("----------------------Keys Function----------------------")
const keyOfObject = keys(testObject)
console.log(keyOfObject)

console.log("----------------------Keys Function----------------------")
const val = values(testObject)
console.log(val)

console.log("----------------------Map Object Function----------------------")

const mappedObj = mapObject(testObject, (value) =>
  value.toString().toUpperCase()
)
console.log(mappedObj)

console.log("----------------------Map Object Function----------------------")
const keyValPair = pairs(testObject)
for(let pairs of keyValPair){
    console.log(pairs)
}