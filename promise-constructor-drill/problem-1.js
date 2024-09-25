import fs from "fs"
import path from "path"

const createDirectory = (directoryPath, directoryName) => {
  const directoryNameAndPath = path.join(directoryPath, directoryName)

  return new Promise((resolve, reject) => {
    //Creating the directory
    fs.mkdir(directoryNameAndPath, (error) => {
      if (error) {
        if (error.code === "EEXIST") {
          //EEXIST is the code which tell that the directory exist already
          resolve("Warning: The directory already exists")
        } else {
          reject(new Error(`Error creating directory: ${error.message}`))
        }
      } else {
        resolve(`Directory created successfully: ${directoryNameAndPath}`)
      }
    })
  })
}

const createMultipleFiles = (directoryPath, numberOfFiles) => {
  return new Promise((resolve, reject) => {
    let completed = 0
    const errors = []

    for (let i = 0; i < numberOfFiles; i++) {
      const fileName = `random-json-file-${i}.json`
      const content = `This file's name is: ${fileName}`
      const filenameAndPath = path.join(directoryPath, fileName)

      //Creating the file and writing the content
      fs.writeFile(filenameAndPath, content, (error) => {
        if (error) {
          errors.push(error)
        } else {
          completed++
        }

        // If any of the file creation failed then there should be something inside errors
        if (errors.length > 0) {
          reject(errors)
        } else {
          resolve("Created all files successfully")
        }
      })
    }
  })
}

const deleteFilePromise = (directoryPathAndName, filenames, errors) => {
  // Storing promises in an array to track in future through Promise.all

  const fileDeletionPromises = filenames.map((filename) => {
    return new Promise((res, rej) => {
      const filePath = path.join(directoryPathAndName, filename)
      fs.unlink(filePath, (error) => {
        if (error) {
          errors.push(error)
          rej(error)
        } else {
          res()
        }
      })
    })
  })

  // Wait for all file deletions to complete
  return Promise.all(fileDeletionPromises)
}

const deleteDirectoryFiles = (directoryPathAndName) => {
  return new Promise((resolve, reject) => {
    const errors = []

    fs.readdir(
      directoryPathAndName,
      { encoding: "utf-8" },
      (error, filenames) => {
        // Taking errors to prior check and reject
        if (error) {
          return reject(`Error reading directory: ${error.message}`)
        }

        deleteFilePromise(directoryPathAndName, filenames, errors)
          .then(() => {
            const deletedCount = filenames.length - errors.length
            if (errors.length > 0) {
              reject(`Errors occurred during file deletion: ${errors}`)
            } else {
              resolve(
                `All ${deletedCount} files have been deleted successfully.`
              )
            }
          })
          .catch((error) => {
            reject(`Error occurred during deletion: ${error.message}`)
          })
      }
    )
  })
}

export { createDirectory, createMultipleFiles, deleteDirectoryFiles }
