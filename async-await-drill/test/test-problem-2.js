import { createFile, readToLowerCase, readToUpperCase } from "../problem-2.js"
;(async () => {
  try {
    //Creating lipsum.txt
    const createFileMsg = await createFile("../output")
    console.log(createFileMsg)

    // Converting lipsum.txt data to uppercase then storing into new file
    const convertToUpperMsg = await readToUpperCase(
      "../output/lipsum.txt",
      "../output/upperCaseContent.txt"
    )
    console.log(convertToUpperMsg)

    // Converting uppercase data to lowercase and storing to new file
    const convertToLowerMsg = await readToLowerCase(
      "../output/upperCaseContent.txt",
      "../output/lowerCaseContent.txt"
    )
    console.log(convertToLowerMsg)
  } catch (error) {
    console.log(error)
  }
})()
