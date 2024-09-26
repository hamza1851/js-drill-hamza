import { error } from "console"

/*
Problem 1:

Using callbacks and the fs module's asynchronous functions, do the following:
1. Create a directory of random JSON files
2. Delete those files simultaneously 
*/
const { default: fs } = await import("fs/promises")
const path = await import("path")

const createDirectory = async (directoryPath, directoryName) => {
  const directoryPathAndName = path.join(directoryPath, directoryName)
  //   console.log(directoryPathAndName)
  try {
    await fs.mkdir(directoryPathAndName)
    return `Directory created successfully: ${directoryPathAndName}`
  } catch (error) {
    if (error.code === "EEXIST")
      return console.error("Warning: Directory already exist")
  }
}

const createMultipleFiles = async (directoryPath, fileCount) => {
  const errors = []
  for (let i = 1; i <= fileCount; i++) {
    const fileNamePathAndName = path.join(directoryPath, `random-JSON-${i}.txt`)
    const content = `This file is ${fileNamePathAndName}`

    try {
      await fs.writeFile(fileNamePathAndName, content, { encoding: "utf-8" })
      console.log(`${fileNamePathAndName} created successfully`)
    } catch (error) {
      errors.push(error)
    }
  }
  return errors.length > 0
    ? errors
    : `All ${fileCount} files created successfully`
}

const deleteFiles = async (directoryPath) => {
  const errors = []
  let completed = 0
  const fileNames = await fs.readdir(directoryPath, "utf-8")

  const deletionPromiseArray = fileNames.map((filename) => {
    const filePath = path.join(directoryPath, filename)
    try {
      fs.unlink(filePath)
      completed++
    } catch (error) {
      errors.push(error)
    }
  })

  await Promise.all(deletionPromiseArray)

  if (completed === fileNames.length) {
    if (errors.length > 0) return errors

    return "All files deleted successfully"
  }
}

export { createDirectory, createMultipleFiles, deleteFiles }
