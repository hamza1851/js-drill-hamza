const { arrayOfObjects } = require("../persons.js")
const {getHobbies} = require("../Solutions/solution2.js")

const personHobbies = getHobbies(arrayOfObjects, 30)
console.log(personHobbies)
