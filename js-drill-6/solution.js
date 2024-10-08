function counterFactory() {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let count = 0

  const obj = {
    increment() {
      return ++count
    },

    decrement() {
      return --count
    },
  }
  return obj
}

function limitFunctionCallCount(cb, n) {
  // Should return a function that invokes `cb`.
  // The returned function should only allow `cb` to be invoked `n` times.
  // Returning null is acceptable if cb can't be returned
  let count = 0
  return function limit(...args) {
    if (count < n) {
      count++
      return cb(args)
    } else return null
  }
}

function cacheFunction(cb) {
  // Should return a function that invokes `cb`.
  // A cache (object) should be kept in closure scope.
  // The cache should keep track of all arguments have been used to invoke this function.
  // If the returned function is invoked with arguments that it has already seen
  // then it should return the cached result and not invoke `cb` again.
  // `cb` should only ever be invoked once for a given set of arguments.
  let cache = {}

  return function sol(...args) {
    const key = JSON.stringify(args)

    if (cache.hasOwnProperty(key)) {
      console.log("Cached Answer Returned")
      return cache[key]
    } else {
      console.log("Uncached")
      const result = cb(...args)
      cache[key] = result
      return result
    }
  }
}

export { counterFactory, limitFunctionCallCount, cacheFunction }
