import { createDirectory, createMultipleFiles } from "../solution-1.js"

createDirectory("../", "random-JSON-files")
  .then((message) => console.log(message))
  .catch((err) => console.log(err))

createMultipleFiles("../random-JSON-files", 5)
  .then((message) => console.log(message))
  .catch((err) => console.log(err))
