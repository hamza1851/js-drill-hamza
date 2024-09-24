/*
Problem 1:

Using callbacks and the fs module's asynchronous functions, do the following:
1. Create a directory of random JSON files
2. Delete those files simultaneously 
*/

const fs = await import("fs/promises")
const path = await import("path")

const createDirectory = (directoryPath, directoryName) => {
  const directoryNameAndPath = path.join(directoryPath, directoryName)

  return fs
    .mkdir(directoryNameAndPath)
    .then(() => {
      return `Directory created successfully: ${directoryNameAndPath}`
    })
    .catch((error) => {
      if (error.code === "EEXIST") {
        return "Warning: The directory already exists"
      } else {
        return new Error(`Error creating directory: ${error.message}`)
      }
    })
}

const createMultipleFiles = (directoryPath, numberOfFiles) => {
  let completed = 0
  const errors = []

  for (let i = 0; i < numberOfFiles; i++) {
    const fileName = `random-json-file-${i}.json`
    const content = `This is file's name is: ${fileName}`
    const filenameAndPath = path.join(directoryPath, fileName)
    try {
      fs.writeFile(filenameAndPath, content)
      completed++
    } catch (error) {
      errors.push(error)
    }
  }
  if (completed === numberOfFiles) {
    if (errors.length > 0) {
      return errors
    } else {
      return "Created all files successfully"
    }
  }
}

const deleteDirectoryFiles = (directoryPathAndName) => {
  let deleted = 0
  const errors = []

  return fs
    .readdir(directoryPathAndName, { encoding: "utf-8" })
    .then((filenames) => {
      const fileDeletionPromises = filenames.map((filename) => {
        const filePath = path.join(directoryPathAndName, filename)
        // Returning promises in the map array
        return fs
          .unlink(filePath)
          .then(() => {
            deleted++
          })
          .catch((error) => {
            errors.push(error)
          })
      })

      // Promise.all to wait for all deletion promises
      return Promise.all(fileDeletionPromises).then(() => {
        if (errors.length > 0) {
          throw new Error(`Errors occurred during file deletion: ${errors}`)
        } else {
          return `All ${deleted} files have been deleted successfully.`
        }
      })
    })
    .catch((error) => {
      return `Error occurred during reading filenames: ${error.message}`
    })
}

export { createDirectory, createMultipleFiles, deleteDirectoryFiles }
