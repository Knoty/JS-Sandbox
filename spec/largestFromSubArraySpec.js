describe("largestFromSubArray", function() {
  var array = [[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]];

  it("should return array", function() {
    var result = largestFromSubArray(array);
	
    expect(result instanceof Array).toBeTruthy();

  });
});
