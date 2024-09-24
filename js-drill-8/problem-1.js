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

export { createDirectory, createMultipleFiles }
