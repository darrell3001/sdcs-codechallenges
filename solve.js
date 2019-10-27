function solve(st, a, b) {
  var n = "";
  var r = "";

  console.log(`str = ${st}, a = ${a}, b = ${b}`);

  var myArray = st.split("");

  for (j = b; j >= a; j--) {
    if (j < myArray.length) {
      r += myArray[j];
      // console.log(`r = ${r}, j = ${j}, myArray[j] = ${myArray[j]}`);
    }
  }

  console.log(`st.length = ${st.length}`);
  console.log("");

  var f = "";
  var l = "";

  for (i = 0; i < st.length; i++) {
    // console.log(`n = ${n}, i = ${i}, myArray[i] = ${myArray[i]}`);

    // on the "c"
    if (i < a && i < b) {
      f += myArray[i];
    }

    // in the rev part
    // if (i >= a && i <= b) {
    //   n += r;
    // }

    //
    if (i > a && i > b) {
      l += myArray[i];
    }
  }

  n = f + r + l;

  console.log(`n = ${n}`);
  return n;
}

//  ,"cawedors");
solve("codingIsFun", 2, 15);
