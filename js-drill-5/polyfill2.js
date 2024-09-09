const testObject = { name: "Bruce Wayne", age: 36, location: "Gotham" } // use this object to test your functions

// Complete the following underscore functions.
// Reference http://underscorejs.org/ for examples.
// Check and use MDN as well
// PROJECT RESTRICTION: You can't use the built in Object methods.  Only use native JavaScript for loops. No other types of loops are allowed.
// PROJECT RESTRICTION: You can't use the underscore library or any other external library.

function keys(obj) {
  // Retrieve all the names of the object's properties.
  // Return the keys as strings in an array.
  // Based on http://underscorejs.org/#keys
  const temp = []
  for (let key in obj) {
    temp.push(key)
  }
  return temp
}

function values(obj) {
  // Return all of the values of the object's own properties.
  // Ignore functions
  // http://underscorejs.org/#values
  const key = keys(obj)
  const temp = []
  for (let i = 0; i < key.length; i++) {
    temp.push(obj[key[i]])
  }
  return temp
}

function mapObject(obj, cb) {
  // Like map for arrays, but for objects. Transform the value of each property in turn by passing it to the callback function.
  // http://underscorejs.org/#mapObject
  const temp = {}
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      temp[key] = cb(obj[key], key)
    }
  }
  return temp
}

function pairs(obj) {
  // Convert an object into a list of [key, value] pairs.
  // http://underscorejs.org/#pairs
  const temp = []
  for (let key in obj) {
    temp.push([key, obj[key]])
  }
  return temp
}

/* STRETCH PROBLEMS */

function invert(obj) {
  // Returns a copy of the object where the keys have become the values and the values the keys.
  // Assume that all of the object's values will be unique and string serializable.
  // http://underscorejs.org/#invert
  const temp = {}
  for(let key in obj){
    temp[obj[key]] = key
  }
  return temp
}

function defaults(obj, defaultProps) {
  // Fill in undefined properties that match properties on the `defaultProps` parameter object.
  // Return `obj`.
  // http://underscorejs.org/#defaults
  for(let key in defaultProps){
    if(obj[key] === undefined){
      obj[key] = defaultProps[key]
    }
  }
  return obj
}

module.exports = {
  testObject,
  keys,
  values,
  mapObject,
  pairs,
  invert,
  defaults,
}
