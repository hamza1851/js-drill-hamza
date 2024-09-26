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

    return `Converted lipsum.txt to uppercase and stored the file path to filename.txt`
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
    const storingFileName = fs.writeFile(
      "../output/filenames.txt",
      locationToStore,
      { flag: "a", encoding: "utf-8" }
    )

    Promise.all([await writingToLowerTxt, await storingFileName])

    return `Converted ${filePath} to lowercase and stored the file path to filename.txt`
  } catch (error) {
    return `Error occurred: ${error}`
  }
}

const readThenSort = async (filePath, locationToStore) => {
  const data = await fs.readFile(filePath, "utf-8")
  const sortedData = data.sort((a, b) => a - b)
  console.log(sortedData)
}

export { createFile, readToUpperCase, readToLowerCase }
