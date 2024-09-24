import {
  createDirectory,
  createMultipleFiles,
  deleteDirectoryFiles,
} from "../problem-1.js"

createDirectory("../", "random-JSON-files")
  .then((msg) => {
    console.log(msg)
    return createMultipleFiles("../random-JSON-files", 5)
  })
  .then((msg) => {
    console.log(msg)
    return deleteDirectoryFiles("../random-JSON-files")
  })
  .then((msg) => {
    console.log(msg)
  })
  .catch((error) => console.log(error))
