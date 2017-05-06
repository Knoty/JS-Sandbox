function confirmTheEnding(str, target) {
    return str.search(target+'$') >= 0;
}

describe("confirmTheEnding", function() {

  it('"Bastian" and "n" should return true', function() {
    expect(confirmTheEnding("Bastian", "n")).toBeTruthy();
  });  
  
  it('"Connor" and "n" should return false', function() {
    expect(confirmTheEnding("Connor", "n")).toBeFalsy();
  });    
  
  it('"...both are frozen" and "specification" should return false', function() {
    expect(confirmTheEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification")).toBeFalsy();
  });  
  
  it('"He has to give me a new name" and "name" should return true', function() {
    expect(confirmTheEnding("He has to give me a new name", "name")).toBeTruthy();
  });  
  
  it('"Open sesame" and "same" should return true', function() {
    expect(confirmTheEnding("Open sesame", "same")).toBeTruthy();
  });  
  
  it('"Open sesame" and "pen" should return false', function() {
    expect(confirmTheEnding("Open sesame", "pen")).toBeFalsy();
  });
  
  it('"...we can withstand the nothing" and "mountain" should return false', function() {
    expect(confirmTheEnding("If you want to save our world, you must hurry. We don't know how much longer we can withstand the nothing", "mountain")).toBeFalsy();
  });

});
