/** Uses the passed function to each element of the collection. */
function each(coll, func) {
  for (var i = 0; i < coll.length; i++) {
    var item = coll[i];
    func(item);
  }
}

/**
 * Applies a function to each element of the collection, stores the result
 * and return it.
 *
 * @param {array} coll - Array of any elements.
 * @param {function} func - Any function. Returns changed element.
 *
 * @return {array} map - New array of elements passed through @func.
 */
function map(coll, func) {
  var map = [];

  for (var i = 0; i < coll.length; i++) {
    var item = coll[i];
    map[i] = func(item);
  }

  return map;
}

/**
 * Applies a function to each element of the collection and rolls a result,
 * starting from the accumulator.
 *
 * @param {array} coll - Array of any elements.
 * @param {function} func - Any function. Returns changed element.
 * @param {number} accumulator - Starting number.
 *
 * @return {value} - Number, or any other value of rolled array.
 */
function reduce(coll, func, accumulator) {
  for (var i = 0; i < coll.length; i++) {
    accumulator = func(accumulator, coll[i]);
  }

  return accumulator;
}

/**
 * Applies predicate function to each element of the collection and returns
 * first element that satisfies the predicate.
 *
 * @param {array} coll - Array of any elements.
 * @param {function} pred - Predicate function.
 *
 * @return {array element} - Element of coll array that satisfies the predicate.
 */
function find(coll, pred) {
  for (var i = 0; i < coll.length; i++) {
    var item = coll[i];
    if (pred(item)) {
      return item;
    }
  }
}

/**
 * Applies predicate function to each element of the collection and returns
 * new array of elements that satisfies the predicate.
 *
 * @param {array} coll - Array of any elements.
 * @param {function} pred - Predicate function.
 *
 * @return {array} result - Array of elements that satisfies the predicate.
 */
function filter(coll, pred) {
  var result = [];

  for (var i = 0; i < coll.length; i++) {
    var item = coll[i];
    if (pred(item)) {
      result.push(item);
    }
  }

  return result;
}
