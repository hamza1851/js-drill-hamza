function returnMails(arrayOfObjects) {
  let personEmail = []
  for (let i = 0; i < arrayOfObjects.length; i++) {
    personEmail.push(arrayOfObjects[i].email)
  }
  console.log(personEmail)
  // return personEmail
}

returnMails(arrayOfObjects)
