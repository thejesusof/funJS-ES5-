describe('map', function () {
  simpleTestArray = [1, 2, 3];

  it('Should return passed collection if a given function is an identity-function.', function () {
    assert.deepEqual(map(simpleTestArray, function (el) {return el;}), simpleTestArray);
  });

  it('It should maps collection based on a passed function.', function () {
    assert.deepEqual(map(simpleTestArray, function (el) {return el * 2;}), [2, 4, 6]);
  });

});

describe('reduce', function () {
  simpleTestArray = [1, 2, 3];

  it('Applies a function to each element of the collection and rolls a result, starting from the start.', function () {
    assert.deepEqual(reduce(simpleTestArray, function (memo, num) { return memo + num; }, 0), 6);

    assert.deepEqual(reduce(simpleTestArray, function (memo, num) { return memo + num; }, 4), 10);
  });

});

describe('find', function () {
  simpleTestArray = [1, 2, 3];

  it('Should return the first element that satisfies the predicate.', function () {
    assert.deepEqual(find(simpleTestArray, function (num) { return num % 2 == 0; }), 2);

    assert.deepEqual(find(simpleTestArray, function (num) { return num % 3 == 0; }), 3);
  });

});

describe('filter', function () {

  it('Should return a collection of elements that satisfy the predicate.', function () {
    assert.deepEqual(filter([1, 2, 3, 4, 5, 6], function (num) { return num % 2 == 0; }), [2, 4, 6]);

    assert.deepEqual(filter([1, 2, 3, 4, 5, 6], function (num) { return num % 3 == 0; }), [3, 6]);
  });

});

describe('reject', function () {

  it('Should return a collection of elements that does not satisfy the predicate.', function () {
    assert.deepEqual(reject([1, 2, 3, 4, 5, 6], function (num) { return num % 2 == 0; }), [1, 3, 5]);

    assert.deepEqual(reject([1, 2, 3, 4, 5, 6], function (num) { return num % 3 == 0; }), [1, 2, 4, 5]);
  });

});

describe('all', function () {

  it('Should return true if all elements satisfy the predicate.', function () {
    assert.deepEqual(all([2, 4, 6, 8, 20, 22], function (num) { return num % 2 === 0; }), true);

    assert.deepEqual(all([20, 40, 60, 80, 20, 220], function (num) { return num % 10 === 0; }), true);
  });

  it('Should return false if not all elements satisfy the predicate.', function () {
    assert.deepEqual(all([2, 4, 6, 8, 20, 21], function (num) { return num % 2 === 0; }), false);

    assert.deepEqual(all([20, 40, 60, 83, 20, 220], function (num) { return num % 10 === 0; }), false);

    assert.deepEqual(all([3, 60, 90, 83, 20, 220], function (num) { return num % 3 === 0; }), false);
  });

});
