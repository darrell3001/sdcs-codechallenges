function getMiddle(s) {
  //Code goes here!

  var lenOfString = s.length;
  var midChar = Math.floor(lenOfString / 2);
  var m = "";

  if (lenOfString % 2 == 1) {
    // odd
    m = s[midChar];
  } else {
    // even
    m = s[midChar - 1] + s[midChar];
  }

  return m;
}

console.log(getMiddle("test"));
console.log(getMiddle("testing"));
console.log(getMiddle("middle"));
console.log(getMiddle("A"));
