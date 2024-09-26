/*
    Problem 2:
    
    Using callbacks and the fs module's asynchronous functions, do the following:
        1. Read the given file lipsum.txt
        2. Convert the content to uppercase & write to a new file. Store the name of the new file in filenames.txt
        3. Read the new file and convert it to lower case. Then split the contents into sentences. Then write it to a new file. Store the name of the new file in filenames.txt
        4. Read the new files, sort the content, write it out to a new file. Store the name of the new file in filenames.txt
        5. Read the contents of filenames.txt and delete all the new files that are mentioned in that list simultaneously.
*/

const { default: fs } = await import("fs/promises")
const path = await import("path")

const createFile = async (directoryPath) => {
  // Creating lipsum.txt
  const filePathAndName = path.join(directoryPath, "lipsum.txt")
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
  try {
    await fs.writeFile(filePathAndName, content)
    return `lipsum.txt created successfully`
  } catch (error) {
    return `Error occurred ${error}`
  }
}

const readToUpperCase = async (filePath, locationToStore) => {
  const data = await fs.readFile(filePath, "utf-8")
  const upperCaseData = data.toUpperCase()
  try {
    const writingToUpperTxt = fs.writeFile(locationToStore, upperCaseData, {
      encoding: "utf-8",
    })
    const storingFileName = fs.writeFile(
      "../output/filenames.txt",
      locationToStore + "\n",
      { flag: "a", encoding: "utf-8" }
    )

    Promise.all([await writingToUpperTxt, await storingFileName])

    return `Converted lipsum.txt to uppercase and stored the file path to filenames.txt`
  } catch (error) {
    return `Error occurred: ${error}`
  }
}

const readToLowerCase = async (filePath, locationToStore) => {
  const data = await fs.readFile(filePath, "utf-8")
  const lowerCaseData = data.toLowerCase().split("\n")
  try {
    const writingToLowerTxt = fs.writeFile(
      locationToStore,
      lowerCaseData.join("\n"),
      "utf-8"
    )
    const storingPath = fs.writeFile(
      "../output/filenames.txt",
      locationToStore + "\n",
      { flag: "a", encoding: "utf-8" }
    )

    Promise.all([await writingToLowerTxt, await storingPath])

    return `Converted ${filePath} to lowercase and stored the file path to filenames.txt`
  } catch (error) {
    return `Error occurred: ${error}`
  }
}

const readThenSort = async (filePath, locationToStore) => {
  const data = await fs.readFile(filePath, "utf-8")

  try {
    //sorting the data
    const sortedData = data
      .split("\n")
      .sort((a, b) => a.localeCompare(b))
      .join("\n")

    const storingSortedData = fs.writeFile(locationToStore, sortedData, "utf-8")

    const storingPath = fs.writeFile(
      "../output/filenames.txt",
      locationToStore + "\n",
      {
        flag: "a",
        encoding: "utf-8",
      }
    )

    Promise.all([await storingSortedData, await storingPath])

    return `Sorted the data and stored in ${locationToStore} successfully`
  } catch (error) {
    return `Error occurred: ${error}`
  }
}

const deleteFilesFromFilenames = async (fileContainingNames) => {
  const errors = []
  const fileNames = (await fs.readFile(fileContainingNames, "utf-8"))
    .split("\n")
    .filter((filename) => filename !== "") // we will get only names not empty string
  try {
    for (const filename of fileNames) {
      try {
        await fs.unlink(filename) // deleting files
      } catch (error) {
        errors.push(error) // deletion failed push the error
      }
    }

    const deletedFiles = fileNames.length - errors.length // if there is any error then there must be any deletion of file failed
    if (deletedFiles === fileNames.length)
      return "All files deleted successfully"
    else return errors
  } catch (error) {
    console.log(error)
  }
}

export {
  createFile,
  readToUpperCase,
  readToLowerCase,
  readThenSort,
  deleteFilesFromFilenames,
}
