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

export {createDirectory}
