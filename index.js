function isPalindrome(word) {
  const letters = word.split("")
  const reversedWordArr = []
  for (const letter of letters) {
    reversedWordArr.unshift(letter)
  }
  const reversedWord = reversedWordArr.join("")
  if (reversedWord === word) {
    return true
  }
  else {return false}
}

/* 
  1. take the string, turn it into an array, reverse it, stringify it
  2. store the reversed word as a var
  3. compare word and reversedWord
  4. if equal, return true, otherwise false
*/

/*
  First split the word into letters.
  Then take each letter left to right and add it to the beginning of a new array, reversing the letters.
  Then rejoin the reversed letters to create a reversed word and save it to a variable.
  Then return true if reversed word and input word is the same, false if not.

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("sandwich"))
}

module.exports = isPalindrome;
