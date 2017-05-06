function confirmTheEnding(str, target) {
    return str.search(target+'$') >= 0;
}

describe("confirmTheEnding", function() {

  function itEndsWith(str, target, expected_result) { 
    it('"' + str + '" and "' + target + '" should return ' + expected_result, function() {
      expect(confirmTheEnding(str,target)).toEqual(expected_result);
    });  
  }

  itEndsWith("Bastian", "n", true);
  itEndsWith("Connor", "n", false);
  itEndsWith("Walking on water and developing software from a specification are easy if both are frozen", "specification", false);
  itEndsWith("He has to give me a new name", "name", true);
  itEndsWith("Open sesame", "same", true);
  itEndsWith("Open sesame", "pen", false);
  itEndsWith("If you want to save our world, you must hurry. We don't know how much longer we can withstand the nothing", "mountain", false);

});
