import fs from "fs"
import path from "path"

function createFile(directoryPath, filename, fileType) {
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

  return new Promise((resolve, reject) => {
    fs.writeFile(filenameAndPath, content, (err) => {
      if (err) {
        reject(err)
      } else {
        resolve(`File created successfully: ${filenameAndPath}`)
      }
    })
  })
}
export { createFile }
