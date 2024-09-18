import { createDirectory } from "../solution-1.js"

createDirectory("../", "random-JSON-files")
  .then((message) => console.log(message))
  .catch((err) => console.log(err))
