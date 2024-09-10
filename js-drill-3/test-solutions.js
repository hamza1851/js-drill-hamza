import inventory from "./inventory.js"
import {
  findCarById,
  getLastCar,
  sortCarModels,
  getCarYears,
  getOlderCars,
  findBMWAndAudiCars,
} from "./solutions.js"

console.log("----------------Questions-1----------------")

const car33 = findCarById(inventory, 33)
console.log(
  `Car 33 is a ${car33.car_year} ${car33.car_make} ${car33.car_model}`
)

console.log("----------------Questions 2----------------")
const lastCar = getLastCar(inventory)
console.log(`Last car is a ${lastCar.car_make} ${lastCar.car_model}`)

console.log("----------------Questions 3----------------")
const sortedCarModels = sortCarModels(inventory)
console.log(sortedCarModels)

console.log("----------------Questions 4----------------")
const carYears = getCarYears(inventory)
console.log(carYears)

console.log("----------------Questions 5----------------")
const olderCars = getOlderCars(carYears, 2000)
console.log(olderCars.length)

console.log("----------------Question 6----------------")
const bmwAndAudiCars = findBMWAndAudiCars(inventory)
console.log(JSON.stringify(bmwAndAudiCars))
