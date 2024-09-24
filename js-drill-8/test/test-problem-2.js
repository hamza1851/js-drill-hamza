import { createFile, readToUpperCase } from "../problem-2.js"

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
  })
  .catch((error) => {
    console.log(error)
  })
