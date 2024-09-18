import {
  createDirectory,
  createMultipleFiles,
  deleteDirectory,
} from "../solution-1.js"

createDirectory("../", "random-JSON-files", (err, msg) => {
  if (err) return console.log(err)
  console.log(msg)

  return createMultipleFiles("../random-JSON-files", 5, (err, msg) => {
    if (err) return console.log(err)
    console.log(msg)
    // using setTimeout to slow down the deletion code to make it easy to observe
    return setTimeout(() => {
      return deleteDirectory("../random-JSON-files", (err, msg) => {
        if (err) return console.log(err)
        console.log(msg)
      })
    }, 5000)
  })
})
