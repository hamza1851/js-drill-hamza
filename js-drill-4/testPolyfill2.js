const { testObject, keys, values, mapObject } = require("./polyfill2")


console.log("----------------------Keys Function----------------------")
const keyOfObject = keys(testObject)
console.log(keyOfObject)

console.log("----------------------Keys Function----------------------")
const val = values(testObject)
console.log(val)

console.log("----------------------Map Object Function----------------------")

const mappedObj = mapObject(testObject, (value) => value.toString().toUpperCase())
console.log(mappedObj)