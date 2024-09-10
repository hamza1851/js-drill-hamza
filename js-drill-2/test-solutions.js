import users  from "./users.js"
import {
  interestGames,
  userInGermany,
  userWithMasterDeg,
  userBasedOnProgLang,
} from "./solutions.js"

console.log("-------Question-1---------")
const names = interestGames(users)
console.log(names)

console.log("-------Question-2---------")

const germanUser = userInGermany(users)
for (let i = 0; i < germanUser.length; i++) {
  console.log(germanUser[i])
}

console.log("-------Question-3---------")

const userWithMasters = userWithMasterDeg(users)
for (let i = 0; i < userWithMasters.length; i++) {
  console.log(userWithMasters[i])
}

console.log("-------Question-4---------")

const { pythonUsers, golangUsers, jsUsers } = userBasedOnProgLang(users)
console.log(`Users who use Python: ${pythonUsers}`)
console.log(`Users who use Golang: ${golangUsers}`)
console.log(`Users who use JavaScript: ${jsUsers}`)
