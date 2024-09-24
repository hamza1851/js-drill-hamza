import { createFile } from "../problem-2.js"

createFile("../output", "lipsum", "txt")
  .then((msg) => {
    console.log(msg)
  })
  .catch((error) => {
    console.log(error)
  })
