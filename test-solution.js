const { returnMails, getHobbies } = require("./solutions")
const { arrayOfObjects } = require("./persons")

const personMails = returnMails(arrayOfObjects)
console.log(personMails)

const personHobbies = getHobbies(arrayOfObjects, 30)
console.log(personHobbies)
