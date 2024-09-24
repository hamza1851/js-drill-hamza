import { createFile, readToUpperCase, readToLowerCase } from "../problem-2.js"

createFile("../output", "lipsum", "txt")
  .then((msg) => {
    console.log(msg)
    return readToUpperCase(
      "../output/lipsum.txt",
      "../output/uppercaseContent.txt"
    )
  })
  .then((msg) => {
    console.log(msg)
    return readToLowerCase(
      "../output/uppercaseContent.txt",
      "../output/splittedLowercaseContent.txt"
    )
  })
  .then((msg) => {
    console.log(msg)
  })
  .catch((error) => {
    console.log(error)
  })
