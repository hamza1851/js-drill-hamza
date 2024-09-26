/*
Problem 1:

Using callbacks and the fs module's asynchronous functions, do the following:
1. Create a directory of random JSON files
2. Delete those files simultaneously 
*/

import fs from "fs"
import path from "path"
function createDirectory(directoryPath, directoryName, callback) {
  const directoryNameAndPath = path.join(directoryPath, directoryName)

  // Create the directory if it doesn't exist
  fs.mkdir(directoryNameAndPath, { recursive: true }, (error) => {
    if (error) {
      return callback(error) // if error occurs
    }
    callback(null, `Directory created successfully: ${directoryNameAndPath}`)
  })
}

function createMultipleFiles(directoryPath, numberOfFiles, callback) {
  let completed = 0 // Counter to track completed file creations
  const errors = [] // Store errors if any

  for (let i = 1; i <= numberOfFiles; i++) {
    const filenameAndPath = path.join(directoryPath, `random-file-${i}.json`)
    const content = JSON.stringify({
      message: `This is the file random-file-${i}`,
    })

    fs.writeFile(filenameAndPath, content, (err) => {
      if (err) {
        errors.push(err) // Collect error
      }

      completed++ // Increment the completed counter

      if (completed === numberOfFiles) {
        if (errors.length > 0) {
          return callback(errors) // if errors occurs
        }
        callback(null, `All ${numberOfFiles} files created successfully.`)
      }
    })
  }
}

function deleteDirectory(directoryPathAndName, callback) {
  fs.rm(directoryPathAndName, { recursive: true, force: true }, (err) => {
    if (err) return callback(err)
    callback(null, `Directory ${directoryPathAndName} deleted successfully`)
  })
}

export { createDirectory, createMultipleFiles, deleteDirectory }

// const fs = await import("fs/promises")
// const path = await import("path")

// const createDirectory = (directoryPath, directoryName) => {
//   const directoryNameAndPath = path.join(directoryPath, directoryName)

//   return fs
//     .mkdir(directoryNameAndPath)
//     .then(() => {
//       return `Directory created successfully: ${directoryNameAndPath}`
//     })
//     .catch((error) => {
//       if (error.code === "EEXIST") {
//         return "Warning: The directory already exists"
//       } else {
//         return new Error(`Error creating directory: ${error.message}`)
//       }
//     })
// }

// const createMultipleFiles = (directoryPath, numberOfFiles) => {
//   let completed = 0
//   const errors = []

//   for (let i = 0; i < numberOfFiles; i++) {
//     const fileName = `random-json-file-${i}.json`
//     const content = `This is file's name is: ${fileName}`
//     const filenameAndPath = path.join(directoryPath, fileName)
//     try {
//       fs.writeFile(filenameAndPath, content)
//       completed++
//     } catch (error) {
//       errors.push(error)
//     }
//   }
//   if (completed === numberOfFiles) {
//     if (errors.length > 0) {
//       return errors
//     } else {
//       return "Created all files successfully"
//     }
//   }
// }

// const deleteDirectoryFiles = (directoryPathAndName) => {
//   let deleted = 0
//   const errors = []

//   return fs
//     .readdir(directoryPathAndName, { encoding: "utf-8" })
//     .then((filenames) => {
//       const fileDeletionPromises = filenames.map((filename) => {
//         const filePath = path.join(directoryPathAndName, filename)
//         // Returning promises in the map array
//         return fs
//           .unlink(filePath)
//           .then(() => {
//             deleted++
//           })
//           .catch((error) => {
//             errors.push(error)
//           })
//       })

//       // Promise.all to wait for all deletion promises
//       return Promise.all(fileDeletionPromises).then(() => {
//         if (errors.length > 0) {
//           throw new Error(`Errors occurred during file deletion: ${errors}`)
//         } else {
//           return `All ${deleted} files have been deleted successfully.`
//         }
//       })
//     })
//     .catch((error) => {
//       return `Error occurred during reading filenames: ${error.message}`
//     })
// }

// export { createDirectory, createMultipleFiles, deleteDirectoryFiles }
// -------------------Second Iteration using async/await -------------------

// const { default: fs } = await import("fs/promises")
// const path = await import("path")

// const createDirectory = async (directoryPath, directoryName) => {
//   const directoryNameAndPath = path.join(directoryPath, directoryName)
//   // if the directory created successfully then return msg otherwise error
//   try {
//     if (fs.access(directoryNameAndPath))
//       return "Warning: The directory already exist"
//     await fs.mkdir(directoryNameAndPath)
//     return `Directory created successfully: ${directoryNameAndPath}`
//   } catch (error) {
//     throw new Error(error)
//   }
// }

// const createMultipleFiles = async (directoryPath, numberOfFiles) => {
//   let completed = 0 // Counter to track completed file creations
//   const errors = [] // Store errors if any

//   for (let i = 1; i <= numberOfFiles; i++) {
//     const filenameAndPath = path.join(directoryPath, `random-file-${i}.json`)
//     const content = JSON.stringify({
//       message: `This is the file random-file-${i}`,
//     })
//     try {
//       await fs.writeFile(filenameAndPath, content)
//       completed++
//     } catch (error) {
//       errors.push(error)
//     }
//   }
//   if (completed === numberOfFiles) {
//     if (errors.length > 0) return errors
//     return `Created all files successfully`
//   }
// }

// const deleteDirectoryFiles = async (directoryPathAndName) => {
//   let completed = 0
//   const errors = []

//   const files = await fs.readdir(directoryPathAndName)

//   for (const file of files) {
//     const filePath = path.join(directoryPathAndName, file)
//     try {
//       await fs.unlink(filePath)
//       completed++
//     } catch (error) {
//       errors.push(error)
//     }
//   }
//   if (completed === files.length) {
//     if (errors.length > 0) return errors

//     return "All files deleted successfully"
//   }
// }

// export { createDirectory, createMultipleFiles, deleteDirectoryFiles }
