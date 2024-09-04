const { arrayOfObjects } = require("../persons.js")
const { returnMails } = require("../Solutions/solution1.js")

const personMails = returnMails(arrayOfObjects)
console.log(personMails)
