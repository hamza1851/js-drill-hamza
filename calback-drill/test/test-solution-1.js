import {
  createDirectory,
  createMultipleFiles,
  deleteDirectoryFiles,
} from "../solution-1.js"

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
  .catch((error) => {
    console.log(error)
  })

// import {
//   createDirectory,
//   createMultipleFiles,
//   deleteDirectoryFiles,
// } from "../solution-1.js"

// const testProblem1 = async () => {
//   try {
//     const dirCreationMsg = await createDirectory("../", "random-JSON-files")
//     console.log(dirCreationMsg)

//     const filesCreationMsg = await createMultipleFiles(
//       "../random-JSON-files",
//       5
//     )
//     console.log(filesCreationMsg)

//     setTimeout(async () => {
//       const deletionOfFilesMsg = await deleteDirectoryFiles(
//         "../random-JSON-files"
//       )
//       console.log(deletionOfFilesMsg)
//     }, 3000)
//   } catch (error) {
//     console.log(error)
//   }
// }
// testProblem1()

// createDirectory("../", "random-JSON-files", (err, msg) => {
//   if (err) return console.log(err)
//   console.log(msg)

//   return createMultipleFiles("../random-JSON-files", 5, (err, msg) => {
//     if (err) return console.log(err)
//     console.log(msg)
//     // using setTimeout to slow down the deletion code to make it easy to observe
//     return setTimeout(() => {
//       return deleteDirectory("../random-JSON-files", (err, msg) => {
//         if (err) return console.log(err)
//         console.log(msg)
//       })
//     }, 5000)
//   })
// })
