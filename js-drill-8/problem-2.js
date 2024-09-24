import fs from "fs"
import path from "path"
//All the work will be done by the callbacks inside the fs methods

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
function readToUpperCase(filenameAndPath, locationToStore) {
  return new Promise((resolve, reject) => {
    fs.readFile(filenameAndPath, "utf-8", (error, data) => {
      if (error) {
        reject(error)
      } else {
        const upperCaseData = data.toUpperCase()
        fs.writeFile(locationToStore, upperCaseData, (error) => {
          if (error) {
            reject(error)
          } else {
            fs.writeFile(
              "../output/filenames.txt",
              locationToStore + "\n",
              { flag: "a", encoding: "utf-8" },
              (error) => {
                if (error) {
                  reject(error)
                } else {
                  resolve(
                    `Converted ${filenameAndPath} to uppercase and stored in ${locationToStore}.`
                  )
                }
              }
            )
          }
        })
      }
    })
  })
}

function readToLowerCase(filenameAndPath, locationToStore) {
  return new Promise((resolve, reject) => {
    fs.readFile(filenameAndPath, "utf-8", (error, data) => {
      if (error) {
        reject(error)
      } else {
        const lowerCaseData = data.toLowerCase()
        fs.writeFile(locationToStore, lowerCaseData, (error) => {
          if (error) {
            reject(error)
          } else {
            fs.writeFile(
              "../output/filenames.txt",
              locationToStore + "\n",
              { flag: "a", encoding: "utf-8" },
              (error) => {
                if (error) {
                  reject(error)
                } else {
                  resolve(
                    `Converted ${filenameAndPath} to lowercase and stored in ${locationToStore}.`
                  )
                }
              }
            )
          }
        })
      }
    })
  })
}

function readThenSort(filenameAndPath, locationToStore) {
  return new Promise((resolve, reject) => {
    fs.readFile(filenameAndPath, "utf-8", (error, data) => {
      if (error) {
        reject(error)
      } else {
        const sortedContent = data
          .split("\n")
          .sort((a, b) => a.localeCompare(b))
        fs.writeFile(locationToStore, sortedContent.join("\n"), (error) => {
          if (error) {
            reject(error)
          } else {
            fs.writeFile(
              "../output/filenames.txt",
              locationToStore + "\n",
              { flag: "a", encoding: "utf-8" },
              (error) => {
                if (error) {
                  reject(error)
                } else {
                  resolve(
                    `Sorted ${filenameAndPath} and stored in ${locationToStore}.`
                  )
                }
              }
            )
          }
        })
      }
    })
  })
}


export { createFile , readToUpperCase, readToLowerCase, readThenSort}
