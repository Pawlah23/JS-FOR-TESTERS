function countVowel(str) { 
    let vowelCount = 0;
       vowelCount = str.match(/[aeiou]/gi).length;
      return vowelCount;
  }
  console.log(countVowel("Hello World"))
  console.log(countVowel("Hallelujah"))
  console.log(countVowel("pseudopseudohypoparathyroidism"))
