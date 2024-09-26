import { createDirectory } from "../problem-1.js"
;(async () => {
  const directoryCreated = await createDirectory("../", "random-JSON-files")
  if (directoryCreated) console.log(directoryCreated) //if directory exist then nothing will return
})()
