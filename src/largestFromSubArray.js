function largestFromSubArray(arr) {
  var largest_in_sub_arr = [];
  
  for (var i = 0; i < 4; i++)
    {      
      arr[i].sort(compareDigits);
      largest_in_sub_arr[i] = arr[i][3];
    }
  return largest_in_sub_arr;
}

function compareDigits (a, b) {
  return a - b;
}