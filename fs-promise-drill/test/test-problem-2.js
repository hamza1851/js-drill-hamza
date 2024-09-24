import {
  createFile,
  readToLowerCase,
  readToUpperCase,
  readThenSort,
  deleteFilesFromFilenames,
} from "../problem-2.js"

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
    return readToLowerCase(
      "../output/uppercaseContent.txt",
      "../output/splittedLowercaseContent.txt"
    )
  })
  .then((msg) => {
    console.log(msg)
    return readThenSort(
      "../output/splittedLowercaseContent.txt",
      "../output/sortedContent.txt"
    )
  })
  .then((msg) => {
    console.log(msg)
    return deleteFilesFromFilenames("../output/filenames.txt")
  })
  .then((msg) => {
    console.log(msg)
  })
  .catch((error) => {
    console.log(error)
  })
