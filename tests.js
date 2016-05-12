describe("map", function() {
  simple_test_array = [1, 2, 3]

  it("Should return passed collection if a given function is an identity-function.", function () {
    assert.deepEqual(map(simple_test_array, function(el) {return el;}), simple_test_array);
  });

  it("It should maps collection based on a passed function.", function() {
    assert.deepEqual(map(simple_test_array, function(el) {return el * 2;}), [2, 4, 6]);
  });

});

describe("reduce", function() {
  simple_test_array = [1, 2, 3];

  it("Applies a function to each element of the collection and rolls a result, starting from the start.", function () {
    assert.deepEqual(reduce(simple_test_array, function(memo, num){ return memo + num; }, 0), 6);
    assert.deepEqual(reduce(simple_test_array, function(memo, num){ return memo + num; }, 4), 10);
  });

});


describe("find", function() {
  simple_test_array = [1, 2, 3];

  it("Should return the first element that satisfies the predicate.", function () {
    assert.deepEqual(find(simple_test_array, function(num){ return num % 2 == 0; }), 2);
    assert.deepEqual(find(simple_test_array, function(num){ return num % 3 == 0; }), 3);
  });

});


describe("filter", function() {

  it("Should return a collection of elements that satisfy the predicate.", function () {
    assert.deepEqual(filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; }), [2,4,6]);
    assert.deepEqual(filter([1, 2, 3, 4, 5, 6], function(num){ return num % 3 == 0; }), [3,6]);
  });

});
