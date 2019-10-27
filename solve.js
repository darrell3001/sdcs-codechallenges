function solve(st, a, b) {
  // handle edge cases
  if ((st.length = 0)) return st;
  if (a > b) return st;
  if (a > st.length) return st;
  if (a < 1) return st;

  var first = st.slice(0, a < st.length ? a : st.length);
  var last = st.slice(b < st.length ? b : st.length);
  var middle = st.slice(a, b + 1);

  // console.log(`str = ${st}, a = ${a}, b = ${b}`);
  // console.log(`st.length = ${st.length}`);
  // console.log(`f = ${first}, l = ${last}, m = ${middle}`);

  var reverse = middle
    .split("")
    .reverse()
    .join("");

  var stNew = first + reverse + last;

  // console.log(`n = ${n}`);
  return stNew;
}

//  ,"cawedors");
// solve("codingIsFun", 2, 10);
console.log(solve("abcdefghijkl", 52, 100));
console.log(solve("abcdefghijkl", 1, 100));
console.log(solve("abcdefghijkl", 100, 52));
console.log(solve("abcdefghijkl", 0, 100));
console.log(solve("abcdefghijkl", -1, 100));
console.log(solve("abcdefghijkl", -1, 2));
console.log(solve("abcdefghijkl", -1, -2));
console.log(solve("abcdefghijkl", 100, 2));
console.log(solve("", 0, 0));
