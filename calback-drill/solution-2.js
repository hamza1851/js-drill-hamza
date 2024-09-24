/*
    Problem 2:
    
    Using callbacks and the fs module's asynchronous functions, do the following:
        1. Read the given file lipsum.txt
        2. Convert the content to uppercase & write to a new file. Store the name of the new file in filenames.txt
        3. Read the new file and convert it to lower case. Then split the contents into sentences. Then write it to a new file. Store the name of the new file in filenames.txt
        4. Read the new files, sort the content, write it out to a new file. Store the name of the new file in filenames.txt
        5. Read the contents of filenames.txt and delete all the new files that are mentioned in that list simultaneously.
*/

import { error } from "console"

/*
TODO:
        Create a file lipsum.txt
        Fill it with random words
        Read the file - convert the content to upper case
        write to a new_file
        store the name of new_file in filenames.txt


    Then:
        Read new_file
        convert content into lowercase
        Split the content into sentences
        Write it to a new_file
        store the file name in filenames.txt
FIXME:
    Then:
        Read the new files
        sort the content
        write it to new_file
        store the name in filename.txt
    Then:
        Read the filename.txt
        delete all the files mentioned in filename.txt
*/

// ----------------------Third Iteration using fs/promises----------------------
const fs = await import("fs/promises")
const path = await import("path")

const createFile = (directoryPath, filename, fileType) => {
  const filenameAndPath = path.join(directoryPath, `${filename}.${fileType}`)
  const content = `Shall I compare thee to a summer's day?
  Thou art more lovely and more temperate:
  Rough winds do shake the darling buds of May,
  And summer's lease hath all too short a date:
  Sometime too hot the eye of heaven shines,
  And often is his gold complexion dimmed;
  And every fair from fair sometime declines,
  By chance or nature's changing course untrimmed:
  But thy eternal summer shall not fade,
  Nor lose possession of that fair thou'st now;
  Nor shall Death brag thou wand'rest from the way,
  When Time shall age unrinded brow.
  No, when Death shall call thee from this earth,
  Thou shalt live in eternal summer.`

  return fs
    .writeFile(filenameAndPath, content)
    .then(() => {
      return `File created successfully: ${filenameAndPath}`
    })
    .catch((error) => {
      return error
    })
}

const readToUpperCase = (filenameAndPath, locationToStore) => {
  return fs
    .readFile(filenameAndPath, "utf-8")
    .then((data) => {
      return data.toUpperCase()
    })
    .then((data) => {
      fs.writeFile(locationToStore, data)
    })
    .then(() => {
      fs.writeFile("../output/filenames.txt", locationToStore + "\n", {
        flag: "a",
        encoding: "utf-8",
      })
    })
    .then(() => {
      return `${filenameAndPath} Converted to uppercase and filepath stored at filenames.txt`
    })
    .catch((error) => {
      return error
    })
}

const readToLowerCase = (filenameAndPath, locationToStore) => {
  return fs
    .readFile(filenameAndPath, "utf-8")
    .then((data) => {
      return data.toLowerCase()
    })
    .then((data) => {
      fs.writeFile(locationToStore, data)
    })
    .then(() => {
      fs.writeFile("../output/filenames.txt", locationToStore + "\n", {
        flag: "a",
        encoding: "utf-8",
      })
    })
    .then(() => {
      return `${filenameAndPath} Converted to lowercase and filepath stored at filenames.txt`
    })
    .catch((error) => {
      return error
    })
}

const readThenSort = (filenameAndPath, locationToStore) => {
  return fs
    .readFile(filenameAndPath, "utf-8")
    .then((data) => {
      return data.split("\n").sort((a, b) => {
        a.localeCompare(b)
      })
    })
    .then((data) => {
      fs.writeFile(locationToStore, data)
    })
    .then(() => {
      fs.writeFile("../output/filenames.txt", locationToStore + "\n", {
        flag: "a",
        encoding: "utf-8",
      })
    })
    .then(() => {
      return `Sorted data of ${locationToStore} and stored in ${locationToStore}`
    })
    .catch((error) => {
      return error
    })
}

const deleteFilesFromFilenames = (nameCollectionFile) => {
  let deleted = 0
  const errors = []

  return fs
    .readFile(nameCollectionFile, "utf-8")
    .then((filenames) => {
      //filenames(string) to array of names
      filenames.split("\n").map((filename) => {
        //deleting files
        fs.unlink(filename)
          .then(() => deleted++)
          .catch((error) => errors.push(error))
      })
    })
    .then(() => {
      if (errors.length > 0) return new Error(errors) // there should be an error if any deletion failed
      return `Deleted all files from ${nameCollectionFile}`
    })
    .catch((error) => {
      return `Error occurred during file read: ${error}` //if reading operation failed
    })
}

export {
  createFile,
  readToUpperCase,
  readToLowerCase,
  readThenSort,
  deleteFilesFromFilenames,
}

// ----------------------Second Iteration using async await----------------------

// const { default: fs } = await import("fs/promises")
// const path = await import("path")

// const createFile = async (directoryPath, filename, fileType) => {
// const filenameAndPath = path.join(directoryPath, `${filename}.${fileType}`)
//   const content = `Shall I compare thee to a summer's day?
// Thou art more lovely and more temperate:
// Rough winds do shake the darling buds of May,
// And summer's lease hath all too short a date:
// Sometime too hot the eye of heaven shines,
// And often is his gold complexion dimmed;
// And every fair from fair sometime declines,
// By chance or nature's changing course untrimmed:
// But thy eternal summer shall not fade,
// Nor lose possession of that fair thou'st now;
// Nor shall Death brag thou wand'rest from the way,
// When Time shall age unrinded brow.
// No, when Death shall call thee from this earth,
// Thou shalt live in eternal summer.`

//   try {
//     if (fs.access(filenameAndPath)) return "Warning: The file already exist"
//     await fs.writeFile(filenameAndPath, content)
//     return `File created successfully: ${filenameAndPath}`
//   } catch (error) {
//     throw new Error(error)
//   }
// }

// const readToUpperCase = async (filenameAndPath, locationToStore) => {
//   try {
//     const data = await fs.readFile(filenameAndPath, "utf-8")
//     const upperCaseData = data.toUpperCase()
//     await fs.writeFile(locationToStore, upperCaseData)
//     await fs.writeFile("../output/filenames.txt", locationToStore + "\n", {
//       flag: "a",
//       encoding: "utf-8",
//     })

//     return `Data converted to upper case successfully`
//   } catch (error) {
//     console.log(error)
//   }
// }

// const readToLowerCase = async (filenameAndPath, locationToStore) => {
//   try {
//     const data = await fs.readFile(filenameAndPath, { encoding: "utf-8" })
//     const lowerCaseData = data.toLowerCase().split("\n")

//     await fs.writeFile(locationToStore, lowerCaseData.join("\n"))
//     await fs.writeFile("../output/filenames.txt", locationToStore + "\n", {
//       flag: "a",
//       encoding: "utf-8",
//     })

//     return `Successfully converted data to lowercase!`
//   } catch (error) {
//     console.log(error)
//   }
// }

// const readThenSort = async (filenameAndPath, locationToStore) => {
//   try {
//     const data = await fs.readFile(filenameAndPath, "utf-8")
//     const sortedData = data.split("\n").sort((a, b) => a.localeCompare(b))

//     await fs.writeFile(locationToStore, sortedData.join("\n"))
//     await fs.writeFile("../output/filenames.txt", locationToStore + "\n", {
//       flag: "a",
//       encoding: "utf-8",
//     })
//     return `Successfully sorted the content of ${filenameAndPath}`
//   } catch (error) {
//     console.log(error)
//   }
// }

// const deleteFilesFromFilenames = async (nameCollectionFile) => {
//   let fileDeleted = 0
//   const errors = []
//   const fileNames = (await fs.readFile(nameCollectionFile, "utf-8"))
//     .split("\n")
//     .filter((filename) => filename !== "")
//   for (let fileName of fileNames) {
//     try {
//       await fs.unlink(fileName)
//       fileDeleted++
//     } catch (error) {
//       errors.push(error)
//     }
//   }
//   if (fileDeleted === fileNames.length) {
//     if (errors.length > 0) return errors
//     await fs.writeFile(nameCollectionFile, "")
//     return `Deleted all ${fileNames.length} successfully`
//   }
// }

// export {
//   createFile,
//   readToUpperCase,
//   readToLowerCase,
//   readThenSort,
//   deleteFilesFromFilenames,
// }

// ----------------------First Iteration using callbacks----------------------

// import fs from "fs"
// import path from "path"

// function createFile(directoryPath, filename, fileType, callback) {
//   const filenameAndPath = path.join(directoryPath, `${filename}.${fileType}`)
//   const content = `Shall I compare thee to a summer's day?
// Thou art more lovely and more temperate:
// Rough winds do shake the darling buds of May,
// And summer's lease hath all too short a date:
// Sometime too hot the eye of heaven shines,
// And often is his gold complexion dimmed;
// And every fair from fair sometime declines,
// By chance or nature's changing course untrimmed:
// But thy eternal summer shall not fade,
// Nor lose possession of that fair thou'st now;
// Nor shall Death brag thou wand'rest from the way,
// When Time shall age unrinded brow.
// No, when Death shall call thee from this earth,
// Thou shalt live in eternal summer.`

//   fs.writeFile(filenameAndPath, content, (err) => {
//     if (err) {
//       return callback(err)
//     }
//     callback(null, `File created successfully.`)
//   })
// }

// function readToUpperCase(filenameAndPath, locationToStore, callback) {
//   fs.readFile(filenameAndPath, "utf-8", (error, data) => {
//     if (error) {
//       return callback(error)
//     }

//     // Converting the content to upper case
//     const upper = data.toUpperCase()

//     // Writing the uppercase content to a file
//     fs.writeFile(locationToStore, upper, (error) => {
//       if (error) {
//         return callback(error)
//       }

//       // Storing the filename in to filename.txt
//       fs.writeFile(
//         "../output/filenames.txt",
//         locationToStore + "\n",
//         { flag: "a", encoding: "utf-8" }, // flag a opens the file for appending the data from end of file
//         (error) => {
//           if (error) {
//             return callback(error)
//           }

//           callback(
//             null,
//             `Converted ${filenameAndPath} to uppercase and written to ${locationToStore}. Filename stored in filenames.txt.`
//           )
//         }
//       )
//     })
//   })
// }

// function readToLowerCase(filenameAndPath, locationToStore, callback) {
//   // Reading the given file content
//   fs.readFile(filenameAndPath, "utf-8", (error, data) => {
//     if (error) return callback(error)

//     // Converting the content to lowercase and splitting by new lines
//     const lowerCase = data.toLowerCase().split("\n")

//     // Writing the lowerCase-splitted content into locationToStore
//     fs.writeFile(locationToStore, lowerCase.join("\n"), (error) => {
//       if (error) return callback(error)

//       // Appending the filename to filenames.txt
//       fs.writeFile(
//         "../output/filenames.txt",
//         locationToStore + "\n", // Adding a newline for better formatting
//         { flag: "a", encoding: "utf-8" }, // flag 'a' opens the file for appending
//         (error) => {
//           if (error) return callback(error)
//           callback(
//             null,
//             `Converted ${filenameAndPath} to lowercase and written to ${locationToStore}. Filename stored in filenames.txt.`
//           )
//         }
//       )
//     })
//   })
// }

// function readThenSort(filenameAndPath, locationToStore, callback) {
//   // Reading the given file "filenameAndPath"
//   fs.readFile(filenameAndPath, "utf-8", (error, data) => {
//     if (error) return callback(error)

//     // Sorting the content
//     const sortedContent = data
//       .split("\n")
//       // .flatMap((line) => line.split(" ")) // it create the map then operate according to the callback and return the flatten array
//       .sort((a, b) => a.localeCompare(b)) //localCompare sorts the content alphabetically

//     // console.log(sortedContent)

//     // Writing into sortedContent.txt
//     fs.writeFile(locationToStore, sortedContent.join("\n"), (error) => {
//       if (error) return callback(error)
//       console.log(
//         `Sorted the content of ${filenameAndPath} and stored into ${locationToStore}`
//       )
//       // Storing the file name
//       fs.writeFile(
//         "../output/filenames.txt",
//         locationToStore + "\n",
//         { flag: "a", encoding: "utf-8" }, // flag 'a' opens the file for appending
//         (error) => {
//           if (error) return console.log(error)
//           return callback(
//             null,
//             `Stored the path of ${locationToStore} in to filenames.txt`
//           )
//         }
//       )
//     })
//   })
// }

// function deleteTheFilesByFilenames(nameCollectionFile, callback) {
//   fs.readFile(nameCollectionFile, "utf-8", (error, data) => {
//     if (error) {
//       return callback(error)
//     }

//     const fileNames = data.split("\n").filter((filename) => filename !== "")

//     if (fileNames.length === 0) {
//       return callback(null, "No files to delete.")
//     }
//     let filesDeleted = 0
//     let errors = []

//     fileNames.forEach((filename) => {
//       fs.unlink(filename, (err) => {
//         if (err) {
//           errors.push(`Error deleting ${filename}: ${err.message}`)
//         }
//       })
//       filesDeleted++

//       if (filesDeleted === fileNames.length) {
//         if (errors.length > 0) {
//           callback(errors.join("\n"))
//         }
//       }
//     })
//     callback(null, "All files deleted successfully")
//   })
// }

// export {
//   createFile,
//   readToUpperCase,
//   readToLowerCase,
//   readThenSort,
//   deleteTheFilesByFilenames,
// }
