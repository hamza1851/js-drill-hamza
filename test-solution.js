const {
  returnMails,
  getHobbies,
  getAusStudentName,
  getNameAndCity,
} = require("./solutions")

const { arrayOfObjects } = require("./persons")

const personMails = returnMails(arrayOfObjects)
console.log(personMails)

const personHobbies = getHobbies(arrayOfObjects, 30)
console.log(personHobbies)

const studentNames = getAusStudentName(arrayOfObjects)
for (let i = 0; i < studentNames.length; i++) {
  console.log(studentNames[i])
}

const studNameCityAtInd = getNameAndCity(arrayOfObjects, 3)
console.log(studNameCityAtInd[0], studNameCityAtInd[1])
