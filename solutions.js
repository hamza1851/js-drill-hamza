const { arrayOfObjects } = require("./persons.js")

function returnMails(arrayOfObjects) {
  let personEmail = []
  for (let i = 0; i < arrayOfObjects.length; i++) {
    personEmail.push(arrayOfObjects[i].email)
  }
  return personEmail
}

function getHobbies(arrayOfObjects, age) {
  for (const obj in arrayOfObjects) {
    if (arrayOfObjects[obj].age === age) {
      // console.log(arrayOfObjects[obj].hobbies)

      return arrayOfObjects[obj].hobbies
    }
  }
}

function getAusStudentName(arrayOfObjects) {
  let studentName = []
  for (let i = 0; i < arrayOfObjects.length; i++) {
    if (
      arrayOfObjects[i].isStudent &&
      arrayOfObjects[i].country === "Australia"
    ) {
      studentName.push(arrayOfObjects[i].name)
    }
  }
  return studentName
}

function getNameAndCity(arrayOfObjects, ind) {
  const ans = [arrayOfObjects[ind].name, arrayOfObjects[ind].city]
  return ans
}

function getNameAndAge(arrayOfObjects) {
  let ans = []
  for (let i = 0; i < arrayOfObjects.length; i++) {
    ans.push(arrayOfObjects[i].age)
  }
  return ans
}

function getFirstHobby(arrayOfObjects) {
  const firstHobby = []
  for (let i = 0; i < arrayOfObjects.length; i++) {
    firstHobby.push(arrayOfObjects[i].hobbies[0])
  }
  return firstHobby
}

function getNamesAndEmails(arrayOfObjects, ageOfPerson){
    const ans = []
    for(let i = 0; i < arrayOfObjects.length; i++){
        if(arrayOfObjects[i].age === 25) ans.push([arrayOfObjects[i].name, arrayOfObjects[i].email])
    }
    return ans
}

function getCityAndCountry(arrayOfObjects){
    const cityAndCountryNames = []
    for(let i = 0; i < arrayOfObjects.length; i++){
        cityAndCountryNames.push([arrayOfObjects[i].city, arrayOfObjects[i].country])
    }
    return cityAndCountryNames
}


module.exports = {
  returnMails,
  getHobbies,
  getAusStudentName,
  getNameAndCity,
  getNameAndAge,
  getFirstHobby,
  getNamesAndEmails,
  getCityAndCountry,
}
