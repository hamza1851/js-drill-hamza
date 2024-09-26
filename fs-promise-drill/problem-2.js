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

const { default: fs } = await import("fs/promises")
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
