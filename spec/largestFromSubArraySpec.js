describe("largestFromSubArray", function() {

  function itShouldTransform (input, expected_output) {
    it ("should return [" + expected_output + "]", function() {
		var result = largestFromSubArray(input);
		expect(result).toEqual(expected_output);
	});
  }

  it("should always return array", function() {
    expect(largestFromSubArray([]) instanceof Array).toBeTruthy();
  });
  
  itShouldTransform(
	[[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]], 
	[5, 27, 39, 1001]
  );
  
  itShouldTransform(
	[[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]], 
	[27,5,39,1001]
  );
  
  itShouldTransform(
	[[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]], 
	[9, 35, 97, 1000000]
  );
  
});
