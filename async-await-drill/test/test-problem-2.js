import { createFile, readToUpperCase } from "../problem-2.js"
;(async () => {
  try {
    const createFileMsg = await createFile("../output")
    console.log(createFileMsg)

    const convertToUpperMsg = await readToUpperCase(
      "../output/lipsum.txt",
      "../output/upperCaseContent.txt"
    )
    console.log(convertToUpperMsg)
  } catch (error) {
    console.log(error)
  }
})()
