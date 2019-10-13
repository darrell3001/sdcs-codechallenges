function moveVowel(input) {
  let vowelList = ["a", "e", "i", "o", "u"];

  let consonantArray = [];
  let vowelArray = [];

  let inputArray = input.split("");

  for (var i = 0; i < inputArray.length; i++) {
    let foundVowel = false;

    for (var j = 0; j < vowelList.length; j++) {
      if (vowelList[j] == inputArray[i]) {
        vowelArray.push(inputArray[i]);
        foundVowel = true;
        break;
      }
    }
    if (!foundVowel) {
      consonantArray.push(inputArray[i]);
    }
  }

  let combinedString = consonantArray.join("") + vowelArray.join("");
  return combinedString;
}

console.log(moveVowel("day"));
console.log(moveVowel("apple"));
console.log(moveVowel("peace"));
console.log(moveVowel("maker"));
