// const { arrayOfObjects } = require("./persons")

function returnMails(arrayOfObjects) {
  console.log(
    "----------------------------Solution-1----------------------------"
  )
  try {
    if (!Array.isArray(arrayOfObjects)) {
      throw new Error("Array is not passed")
    }
    if (arrayOfObjects.length === 0) {
      throw new Error("Array is empty")
    }
    if (!arrayOfObjects) {
      throw new Error("No Arguments are passed")
    }

    let personEmail = []
    for (let i = 0; i < arrayOfObjects.length; i++) {
      personEmail.push(arrayOfObjects[i].email)
    }

    return personEmail
  } catch (error) {
    console.log(error.message)
  }
}

function getHobbies(arrayOfObjects, age) {
  console.log(
    "----------------------------Solution-2----------------------------"
  )
  try {
    if (!Array.isArray(arrayOfObjects)) {
      throw new Error("Array is not passed")
    }
    if (!age || age < 0) throw new Error("Invalid arguments")
    if (arrayOfObjects.length === 0) {
      throw new Error("Array is empty")
    }

    for (const obj in arrayOfObjects) {
      if (arrayOfObjects[obj].age === age) {
        return arrayOfObjects[obj].hobbies
      }
    }
  } catch (error) {
    console.log(error.message)
  }
}

function getAusStudentName(arrayOfObjects) {
  console.log(
    "----------------------------Solution-3----------------------------"
  )
  try {
    if (!Array.isArray(arrayOfObjects)) {
      throw new Error("Array is not passed")
    }
    if (arrayOfObjects.length === 0) {
      throw new Error("Array is empty")
    }
    if (!arrayOfObjects) {
      throw new Error("No Arguments are passed")
    }

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
  } catch (error) {
    console.log(error.message)
  }
}

function getNameAndCity(arrayOfObjects, ind) {
  console.log(
    "----------------------------Solution-4----------------------------"
  )
  try {
    if (!Array.isArray(arrayOfObjects)) {
      throw new Error("Array is not passed")
    }
    if (!ind || ind === NaN) throw new Error("Passed index is NaN")
    if (arrayOfObjects.length === 0) {
      throw new Error("Array is empty")
    }
    if (!arrayOfObjects) {
      throw new Error("No Arguments are passed")
    }

    const ans = [arrayOfObjects[ind].name, arrayOfObjects[ind].city]
    return ans
  } catch (error) {
    console.log(error.message)
  }
}

function getNameAndAge(arrayOfObjects) {
  console.log(
    "----------------------------Solution-5----------------------------"
  )
  try {
    if (!Array.isArray(arrayOfObjects)) {
      throw new Error("Array is not passed")
    }
    if (arrayOfObjects.length === 0) {
      throw new Error("Array is empty")
    }
    if (!arrayOfObjects) {
      throw new Error("No Arguments are passed")
    }

    let ans = []
    for (let i = 0; i < arrayOfObjects.length; i++) {
      ans.push(arrayOfObjects[i].age)
    }
    return ans
  } catch (error) {
    console.log(error.message)
  }
}

function getFirstHobby(arrayOfObjects) {
  console.log(
    "----------------------------Solution-6----------------------------"
  )
  try {
    if (!Array.isArray(arrayOfObjects)) {
      throw new Error("Array is not passed")
    }
    if (arrayOfObjects.length === 0) {
      throw new Error("Array is empty")
    }
    if (!arrayOfObjects) {
      throw new Error("No Arguments are passed")
    }

    const firstHobby = []
    for (let i = 0; i < arrayOfObjects.length; i++) {
      firstHobby.push(arrayOfObjects[i].hobbies[0])
    }
    return firstHobby
  } catch (error) {
    console.log(error.message)
  }
}

function getNamesAndEmails(arrayOfObjects, ageOfPerson) {
  console.log(
    "----------------------------Solution-7----------------------------"
  )
  const ans = []
  try {
    if (!Array.isArray(arrayOfObjects)) {
      throw new Error("Array is not passed")
    }
    if (!ageOfPerson || ageOfPerson < 0) throw new Error("Passed age is NaN")

    if (arrayOfObjects.length === 0) {
      throw new Error("Array is empty")
    }
    if (!arrayOfObjects) {
      throw new Error("No Arguments are passed")
    }

    for (let i = 0; i < arrayOfObjects.length; i++) {
      if (arrayOfObjects[i].age === ageOfPerson)
        ans.push([arrayOfObjects[i].name, arrayOfObjects[i].email])
    }
    return ans
  } catch (error) {
    console.log(error.message)
  }
}

function getCityAndCountry(arrayOfObjects) {
  console.log(
    "----------------------------Solution-8----------------------------"
  )
  try {
    if (!Array.isArray(arrayOfObjects)) {
      throw new Error("Array is not passed")
    }
    if (arrayOfObjects.length === 0) {
      throw new Error("Array is empty")
    }
    if (!arrayOfObjects) {
      throw new Error("No Arguments are passed")
    }

    const cityAndCountryNames = []
    for (let i = 0; i < arrayOfObjects.length; i++) {
      cityAndCountryNames.push([
        arrayOfObjects[i].city,
        arrayOfObjects[i].country,
      ])
    }
    return cityAndCountryNames
  } catch (error) {
    console.log(error.message)
  }
}

export {
  returnMails,
  getHobbies,
  getAusStudentName,
  getNameAndCity,
  getNameAndAge,
  getFirstHobby,
  getNamesAndEmails,
  getCityAndCountry,
}
