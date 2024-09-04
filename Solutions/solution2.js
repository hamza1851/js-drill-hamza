const arrayOfObjects = require("../persons.js")

function getHobbies(arrayOfObjects, age) {
  for (const obj in arrayOfObjects) {
    if (arrayOfObjects[obj].age === age) {
      // console.log(arrayOfObjects[obj].hobbies)

      return arrayOfObjects[obj].hobbies
    }
  }
}
module.exports = {getHobbies}