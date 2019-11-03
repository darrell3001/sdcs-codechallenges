function oneDown(lookup, str) {
  var newStr = "";

  console.log(`input string  = ${str}`);

  // edge case - not a string
  if (typeof str != "string") return "Input is not a string";

  for (var i = 0; i < str.length; i++) {
    var j = lookup.indexOf(str[i]);

    // edge case - char not in lookup string
    if (j == -1) {
      newStr += str[i];
      continue;
    }

    // if j > 0, then just take char before
    // otherwise, lets go to last char of lookup string
    if (j > 0) {
      newStr += lookup.charAt(j - 1);
    } else {
      newStr += lookup.charAt(lookup.length - 1);
    }
  }

  console.log(`output string = ${newStr}`);
  console.log();
  return newStr;
}

var lookup = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

oneDown(lookup, "!@#$%^&*&^%$#@!@#$%^&*  129385719238457987,..Ifmmp");

// try with different lookup
lookup =
  "0987654321^&*&^%$#@!@#ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

oneDown(lookup, "!@#$%^&*&^%$#@!@#$%^&*  129385719238457987,..Ifmmp");

// console.log(oneDown("Ifmmp"));
// console.log(oneDown("Bn  bApo")); //Amazon
// console.log(oneDown(45)); //Amazon

// oneDown("Uif usjdl up uijt lbub jt tjnqmf");
// oneDown(45);
