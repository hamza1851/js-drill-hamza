const arrayOfObjects = require("../persons.js")

function returnMails(arrayOfObjects) {
  let personEmail = []
  for (let i = 0; i < arrayOfObjects.length; i++) {
    personEmail.push(arrayOfObjects[i].email)
  }
  return personEmail
}
module.exports = { returnMails }
