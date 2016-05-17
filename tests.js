strdescribe('map', function () {
  simpleTestArray = [1, 2, 3];

  it('Should return passed collection if a given function is an identity-function.', function () {
    assert.deepEqual(map(simpleTestArray, function (el) {return el;}), simpleTestArray);
  });

  it('It should maps collection based on a passed function.', function () {
    assert.deepEqual(map(simpleTestArray, function (el) {return el * 2;}), [2, 4, 6]);
  });

  it('It should maps collection based on a passed function.', function () {
    assert.deepEqual(map(['a', 'b', 'c'], function (el) {return el + 'z';}), ['az', 'bz', 'cz']);
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

  it('Should return the first element that satisfies the predicate.', function () {
    assert.deepEqual(find(['a', 'b', 'c'], function (str) { return str == 'c'; }), 'c');

    assert.deepEqual(find(['a', 'b', 'c', 'lol'], function (str) { return str == 'lol'; }), 'lol');
  });

});

describe('filter', function () {

  it('Should return a collection of elements that satisfy the predicate.', function () {
    assert.deepEqual(filter([1, 2, 3, 4, 5, 6], function (num) { return num % 2 == 0; }), [2, 4, 6]);

    assert.deepEqual(filter([1, 2, 3, 4, 5, 6], function (num) { return num % 3 == 0; }), [3, 6]);
  });

  it('Should return a collection of elements that satisfy the predicate.', function () {
    assert.deepEqual(filter(['a', 'g', 'c', 'lol', 'd', 'g'], function (str) { return str == 'g'; }), ['g', 'g']);
  });

});

describe('reject', function () {

  it('Should return a collection of elements that does not satisfy the predicate.(num)', function () {
    assert.deepEqual(reject([1, 2, 3, 4, 5, 6], function (num) { return num % 2 == 0; }), [1, 3, 5]);

    assert.deepEqual(reject([1, 2, 3, 4, 5, 6], function (num) { return num % 3 == 0; }), [1, 2, 4, 5]);
  });

  it('Should return a collection of elements that does not satisfy the predicate.(str)', function () {
    assert.deepEqual(reject(['a', 'g', 'c', 'lol', 'd', 'g'], function (str) { return str == 'c'; }), ['a', 'g', 'lol', 'd', 'g']);

    assert.deepEqual(reject(['agg', 'bread', 'butter', 'lol', 'oil', 'gas'], function (str) { return str == 'lol'; }), ['agg', 'bread', 'butter', 'oil', 'gas']);
  });

});

describe('all', function () {

  it('Should return true if all elemnuments satisfy the predicate.', function () {
    assert.deepEqual(all([2, 4, 6, 8, 20, 22], function (num) { return num % 2 === 0; }), true);

    assert.deepEqual(all(['aa', 'aa', 'aa', 'aa', 'aa', 'aa'], function (str) { return str === 'aa'; }), true);
  });

  it('Should return false if not all elements satisfy the predicate.', function () {
    assert.deepEqual(all([2, 4, 6, 8, 20, 21], function (num) { return num % 2 === 0; }), false);

    assert.deepEqual(all([20, 40, 60, 83, 20, 220], function (num) { return num % 10 === 0; }), false);

    assert.deepEqual(all(['lol', 'lol', 'lol', 'lol', 'lal', 'lol'], function (str) { return str === 'lol'; }), false);
  });

});

describe('any', function () {

  it('Should return true if at least one element satisfy the predicate.', function () {
    assert.deepEqual(any([3, 1, 9, 93, 27, 22], function (num) { return num % 2 === 0; }), true);

    assert.deepEqual(any(['hello', 'world', 'how', 'r', 'you', 'lol'], function (str) { return str === 'lol'; }), true);
  });

  it('Should return false if there is not any elements that satisfy the predicate.', function () {
    assert.deepEqual(any([1, 3, 43, 9, 35, 21], function (num) { return num % 2 === 0; }), false);

    assert.deepEqual(any([2, 557, 69, 83, 21, 3], function (num) { return num % 10 === 0; }), false);

    assert.deepEqual(any([31, 65, 94, 8, 2111, 2], function (num) { return num % 3 === 0; }), false);
  });

});
