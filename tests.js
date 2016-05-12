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
