/*
Problem 1:

Using callbacks and the fs module's asynchronous functions, do the following:
1. Create a directory of random JSON files
2. Delete those files simultaneously 
*/

const { default: fs } = await import("fs/promises")
const path = await import("path")

const createDirectory = async (directoryPath, directoryName) => {
  const directoryNameAndPath = path.join(directoryPath, directoryName)
  // if the directory created successfully then return msg otherwise error
  try {
    await fs.mkdir(directoryNameAndPath)
    return `Directory created successfully: ${directoryNameAndPath}`
  } catch (error) {
    throw new Error(error)
  }
}

export { createDirectory }

// import fs from "fs"
// import path from "path"
// function createDirectory(directoryPath, directoryName, callback) {
//   const directoryNameAndPath = path.join(directoryPath, directoryName)

//   // Create the directory if it doesn't exist
// fs.mkdir(directoryNameAndPath, { recursive: true }, (error) => {
//   if (error) {
//     return callback(error) // if error occurs
//   }
//   callback(null, `Directory created successfully: ${directoryNameAndPath}`)
// })
// }

// function createMultipleFiles(directoryPath, numberOfFiles, callback) {
//   let completed = 0 // Counter to track completed file creations
//   const errors = [] // Store errors if any

//   for (let i = 1; i <= numberOfFiles; i++) {
//     const filenameAndPath = path.join(directoryPath, `random-file-${i}.json`)
//     const content = JSON.stringify({
//       message: `This is the file random-file-${i}`,
//     })

//     fs.writeFile(filenameAndPath, content, (err) => {
//       if (err) {
//         errors.push(err) // Collect error
//       }

//       completed++ // Increment the completed counter

//       if (completed === numberOfFiles) {
//         if (errors.length > 0) {
//           return callback(errors) // if errors occurs
//         }
//         callback(null, `All ${numberOfFiles} files created successfully.`)
//       }
//     })
//   }
// }

// function deleteDirectory(directoryPathAndName, callback) {
// fs.rm(directoryPathAndName, { recursive: true, force: true }, (err) => {
//   if (err) return callback(err)
//   callback(null, `Directory ${directoryPathAndName} deleted successfully`)
// })
// }

// export { createDirectory, createMultipleFiles, deleteDirectory }
