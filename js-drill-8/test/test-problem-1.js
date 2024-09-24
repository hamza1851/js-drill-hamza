import { createDirectory } from "../problem-1.js"

createDirectory("../", "random-JSON-files")
  .then((msg) => {
    console.log(msg)
  })
  .catch((error) => console.log(error))
