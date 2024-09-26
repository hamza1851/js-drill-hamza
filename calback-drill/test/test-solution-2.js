import {
  readToUpperCase,
  createFile,
  readToLowerCase,
  readThenSort,
  deleteTheFilesByFilenames,
} from "../solution-2.js"

createFile("../output", "lipsum", "txt", (err, msg) => {
  if (err) {
    console.log(err)
  } else {
    console.log(msg)
    readToUpperCase(
      "../output/lipsum.txt",
      "../output/uppercaseContent.txt",
      (err, msg) => {
        if (err) {
          console.log(err)
        } else {
          console.log(msg)

          readToLowerCase(
            "../output/uppercaseContent.txt",
            "../output/splittedLowercaseContent.txt",
            (error, message) => {
              if (error) console.log(error)
              else {
                console.log(message)
                readThenSort(
                  "../output/splittedLowercaseContent.txt",
                  "../output/sortedContent.txt",
                  (error, message) => {
                    if (error) return console.log(error)
                    else {
                      console.log(message)

                      deleteTheFilesByFilenames(
                        "../output/filenames.txt",
                        (err, msg) => {
                          if (err) console.log("Error during deletion:", err)
                          else console.log(msg)
                        }
                      )
                    }
                  }
                )
              }
            }
          )
        }
      }
    )
  }
})

// import {
//   createFile,
//   readToLowerCase,
//   readToUpperCase,
//   readThenSort,
//   deleteFilesFromFilenames,
// } from "../solution-2.js"

// createFile("../output", "lipsum", "txt")
//   .then((msg) => {
//     console.log(msg)
//     return readToUpperCase(
//       "../output/lipsum.txt",
//       "../output/uppercaseContent.txt"
//     )
//   })
//   .then((msg) => {
//     console.log(msg)
//     return readToLowerCase(
//       "../output/uppercaseContent.txt",
//       "../output/splittedLowercaseContent.txt"
//     )
//   })
//   .then((msg) => {
//     console.log(msg)
//     return readThenSort(
//       "../output/splittedLowercaseContent.txt",
//       "../output/sortedContent.txt"
//     )
//   })
//   .then((msg) => {
//     console.log(msg)
//     return deleteFilesFromFilenames("../output/filenames.txt")
//   })
//   .then((msg) => {
//     console.log(msg)
//   })
//   .catch((error) => {
//     console.log(error)
//   })
// --------------------------------Second iteration using callbacks--------------------------------

// import {
//   createFile,
//   readThenSort,
//   readToLowerCase,
//   readToUpperCase,
//   deleteFilesFromFilenames,
// } from "../solution-2.js"
// ;(async () => {
//   try {
//     const createFileMsg = await createFile("../output", "lipsum", "txt")
//     console.log(createFileMsg)

//     const readToUpperCaseMsg = await readToUpperCase(
// "../output/lipsum.txt",
// "../output/uppercaseContent.txt"
//     )
//     console.log(readToUpperCaseMsg)

//     const readToLowerCaseMsg = await readToLowerCase(
// "../output/uppercaseContent.txt",
// "../output/splittedLowercaseContent.txt"
//     )
//     console.log(readToLowerCaseMsg)

// const readThenSortMsg = await readThenSort(
//   "../output/splittedLowercaseContent.txt",
//   "../output/sortedContent.txt"
// )
//     console.log(readThenSortMsg)

//     const deleteFilesFromFilenamesMsg = await deleteFilesFromFilenames(
//       "../output/filenames.txt"
//     )
//     console.log(deleteFilesFromFilenamesMsg)
//   } catch (error) {
//     console.log(error)
//   }
// })()
// --------------------------------First iteration using callbacks--------------------------------
