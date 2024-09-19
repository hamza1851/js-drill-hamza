import {
  readToUpperCase,
  createFile,
  readToLowerCase,
  readThenSort,
} from "../solution-2.js"

createFile("../output", "lipsum", "txt", (err, msg) => {
  if (err) {
    return console.log(err)
  }
  console.log(msg)
  return readToUpperCase(
    "../output/lipsum.txt",
    "../output/uppercaseContent.txt",
    (err, msg) => {
      if (err) {
        return console.log(err)
      }
      console.log(msg)

      return readToLowerCase(
        "../output/uppercaseContent.txt",
        "../output/splittedLowercaseContent.txt",
        (error, message) => {
          if (error) return console.log(error)
          console.log(message)
          return readThenSort(
            "../output/splittedLowercaseContent.txt",
            "../output/sortedContent.txt",
            (error, message) => {
              if (error) return console.log(error)
              return console.log(message)
            }
          )
        }
      )
    }
  )
})
