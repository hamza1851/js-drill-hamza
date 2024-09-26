import {
  createDirectory,
  createMultipleFiles,
  deleteFiles,
} from "../problem-1.js"
;(async () => {
  try {
    const directoryCreated = await createDirectory("../", "random-JSON-files")
    if (directoryCreated) console.log(directoryCreated) //if directory exist then nothing will return

    const fileCreationMsg = await createMultipleFiles("../random-JSON-files", 5)
    console.log(fileCreationMsg)

    const deleteFilesMsg = await deleteFiles("../random-JSON-files")
    console.log(deleteFilesMsg)
  } catch (error) {
    console.log(error)
  }
})()
