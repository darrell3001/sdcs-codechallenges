function getIssuer(number) {
  // Code your solution here

  var myString = number.toString();

  var firstChar = myString.substring(0, 1);
  var firstTwoChars = myString.substring(0, 2);
  var firstFourChars = myString.substring(0, 3);

  var myLength = myString.length;

  if (firstTwoChars == "34" || firstTwoChars == "37") {
    if (myLength == 15) {
      return "AMEX";
    }
  }

  if (firstFourChars == "6011" && myLength == 16) {
    return "Discover";
  }

  if (
    firstTwoChars == "51" ||
    firstTwoChars == "52" ||
    firstTwoChars == "53" ||
    firstTwoChars == "54" ||
    firstTwoChars == "55"
  ) {
    if (myLength == 16) {
      return "Mastercard";
    }
  }

  if (firstChar == "4") {
    if (myLength == 13 || myLength == 16) {
      return "VISA";
    }
  }

  return "Unknown";
}
//
console.log(getIssuer(4111111111111111));
// console.log(getIssuer(4111111111111111));
// console.log(getIssuer(378282246310005));
// console.log(getIssuer(9111111111111111));

// Test.assertEquals(getIssuer(), 'VISA');
// Test.assertEquals(getIssuer(378282246310005), 'AMEX');
// Test.assertEquals(getIssuer(9111111111111111), 'Unknown');
