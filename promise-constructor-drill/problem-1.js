import fs from "fs"
import path from "path"

const createDirectory = (directoryPath, directoryName) => {
  const directoryNameAndPath = path.join(directoryPath, directoryName)

  return new Promise((resolve, reject) => {
    fs.mkdir(directoryNameAndPath, (error) => {
      if (error) {
        if (error.code === "EEXIST") {
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

      fs.writeFile(filenameAndPath, content, (error) => {
        if (error) {
          errors.push(error)
        } else {
          completed++
        }

        if (completed === numberOfFiles) {
          if (errors.length > 0) {
            reject(errors)
          } else {
            resolve("Created all files successfully")
          }
        }
      })
    }
  })
}

const deleteDirectoryFiles = (directoryPathAndName) => {
  return new Promise((resolve, reject) => {
    let deleted = 0
    const errors = []

    fs.readdir(
      directoryPathAndName,
      { encoding: "utf-8" },
      (error, filenames) => {
        //taking errors to prior check and reject
        if (error) {
          reject(`Error reading directory: ${error.message}`)
        } else {
          //storing promises in map array to track in future through Promise.all
          const fileDeletionPromises = filenames.map((filename) => {
            return new Promise((res, rej) => {
              const filePath = path.join(directoryPathAndName, filename)
              fs.unlink(filePath, (error) => {
                if (error) {
                  errors.push(error)
                  rej(error)
                } else {
                  deleted++
                  res()
                }
              })
            })
          })

          // Wait for all file deletions to complete
          Promise.all(fileDeletionPromises)
            .then(() => {
              if (errors.length > 0) {
                reject(`Errors occurred during file deletion: ${errors}`)
              } else {
                resolve(`All ${deleted} files have been deleted successfully.`)
              }
            })
            .catch((error) => {
              reject(`Error occurred during deletion: ${error}`)
            })
        }
      }
    )
  })
}

export { createDirectory, createMultipleFiles, deleteDirectoryFiles }
