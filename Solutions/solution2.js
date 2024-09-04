function getHobbies(arrayOfObjects, age) {
  for (const obj in arrayOfObjects) {
    if (arrayOfObjects[obj].age === age) {
      console.log(arrayOfObjects[obj].hobbies)

      // return arrayOfObjects[obj].age
    }
  }
}

getHobbies(arrayOfObjects, 30)
