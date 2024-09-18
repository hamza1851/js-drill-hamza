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
    // path will handle the creation of "path" according to the OS the programming running in
    const directoryNameAndPath = path.join(directoryPath, directoryName)
    /* 
    recursive: If the directory path includes some parent directories
    which does not exist in the directory structure then those directory will be created
    */

    fs.mkdir(directoryNameAndPath, { recursive: true }, (error) => {
      if (error) {
        return reject(error)
      }
    })

    resolve(`Directory created successfully: ${directoryNameAndPath}`)
  })
}

export { createDirectory }
