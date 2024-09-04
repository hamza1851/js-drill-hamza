const {
  returnMails,
  getHobbies,
  getAusStudentName,
  getNameAndCity,
  getNameAndAge,
  getFirstHobby,
  getNamesAndEmails,
  getCityAndCountry,
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

const ans = getNameAndAge(arrayOfObjects)
for (let i = 0; i < ans.length; i++) {
  console.log(ans[i])
}

const firstHobby = getFirstHobby(arrayOfObjects)
for (let i = 0; i < firstHobby.length; i++) {
  console.log(firstHobby[i])
}

const nameAndEmail = getNamesAndEmails(arrayOfObjects, 25)
for (let i = 0; i < nameAndEmail.length; i++) {
  console.log(nameAndEmail[0], nameAndEmail[1])
}

const cityAndCountryNames = getCityAndCountry(arrayOfObjects)
for (let i = 0; i < cityAndCountryNames.length; i++) {
  console.log(cityAndCountryNames[i][0], cityAndCountryNames[i][1])
}
