const {
  testObject,
  keys,
  values,
  mapObject,
  pairs,
  invert,
  defaults,
} = require("./polyfill2")

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

console.log("----------------------Key Val Pair Function----------------------")
const keyValPair = pairs(testObject)
for(let pairs of keyValPair){
    console.log(pairs)
}

console.log("----------------------Invert Function----------------------")
const invertedObj = invert(testObject)
console.log(invertedObj)


const defaultProps = {superHeroName : "Bat Man", lasMovie: "Justice League", age: 36, superPower: "Money"}
console.log("----------------------Defaults Function----------------------")
const newObj = defaults(testObject, defaultProps)
console.log(newObj)
