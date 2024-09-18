import fs from "fs"
import path from "path"

/*
    Problem 1:
    
    Using callbacks and the fs module's asynchronous functions, do the following:
        1. Create a directory of random JSON files
        2. Delete those files simultaneously 
*/

function createDirectory(directoryPath, directoryName) {
  return new Promise((resolve, reject) => {
    const directoryNameAndPath = path.join(directoryPath, directoryName)

    // Create the directory if it doesn't exist
    fs.mkdir(directoryNameAndPath, { recursive: true }, (error) => {
      if (error) {
        return reject(error)
      }
      resolve(`Directory created successfully: ${directoryNameAndPath}`)
    })
  })
}

function createMultipleFiles(directoryPath, numberOfFiles) {
  return new Promise((resolve, reject) => {
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

        // Resolve if all files are created
        if (completed === numberOfFiles) {
          if (errors.length > 0) {
            return reject(errors) // Reject if there are any errors
          }
          resolve(`All ${numberOfFiles} files created successfully.`)
        }
      })
    }
  })
}

export { createDirectory, createMultipleFiles }
