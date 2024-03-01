  function NegativeNumber(numberArray){
    let result = numberArray.filter(function(num)
    {
      return num < 0;
    });
    return result;
  }
  console.log(NegativeNumber([16, 23, -5, -7, -9, -4, 3, 7, 8, -10, 12, 29, -24]))