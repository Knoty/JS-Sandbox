describe("largestFromSubArray", function() {
  var array = [[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]];
 
  it("should return array", function() {
    var result = largestFromSubArray(array);
	
    expect(result instanceof Array).toBeTruthy();
  });
  
  it ("should return [5, 27, 39, 1001]", function() {
	var result = largestFromSubArray(array);
	
	expect (result).toEqual([5, 27, 39, 1001]);
  });
  
  it ("should return [27,5,39,1001]", function() {
	var result = largestFromSubArray([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
	
	expect (result).toEqual([27,5,39,1001]);
  });  
  
  it ("should return [9, 35, 97, 1000000]", function() {
	var result = largestFromSubArray([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]);
	
	expect (result).toEqual([9, 35, 97, 1000000]);
  });
  
  
});
