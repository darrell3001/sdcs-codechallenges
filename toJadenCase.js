String.prototype.toJadenCase = function() {
  var newString = "";
  var newWord = "";

  a = this.split(" ");

  a.forEach(word => {
    newWord = "";

    for (i = 0; i < word.length; i++) {
      if (i == 0) {
        newWord += word[i].toUpperCase();
      } else {
        newWord += word[i].toLowerCase();
      }
    }
    newString += newWord + " ";
  });

  return newString.trim();
};
