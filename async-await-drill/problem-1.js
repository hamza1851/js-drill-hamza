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

export { createDirectory }
