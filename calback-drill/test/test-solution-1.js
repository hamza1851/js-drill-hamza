import {
  createDirectory,
  createMultipleFiles,
  deleteDirectory,
} from "../solution-1.js"

createDirectory("../", "random-JSON-files")
  .then((message) => {
    console.log(message)
    return createMultipleFiles("../random-JSON-files", 5)
  })
  .then((message) => {
    console.log(message)
    return deleteDirectory("../random-JSON-files")
  })
  .then((message) => {
    console.log(message)
  })
  .catch((err) => {
    console.error(err)
  })
