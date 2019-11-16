function accum(s) {
  var newString = "";

  for (i = 0; i < s.length; i++) {
    if (i !== 0) {
      newString += "-";
    }
    newString += s[i].toUpperCase();
    newString += s[i].repeat(i).toLowerCase();
    console.log(newString);
  }
  console.log(newString);
  return newString;
}
