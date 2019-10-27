function solve(st, a, b) {
  if ((st.length = 0)) return st;
  if (a > b) return st;
  if (a > st.length) return st;
  if (a < 1) return st;

  var f = st.slice(0, a < st.length ? a : st.length);
  var l = st.slice(b < st.length ? b : st.length);
  var m = st.slice(a, b);

  // console.log(`str = ${st}, a = ${a}, b = ${b}`);
  // console.log(`f = ${f}, l = ${l}, m = ${m}`);
  // console.log(`st.length = ${st.length}`);

  var r = m
    .split("")
    .reverse()
    .join("");

  var n = f + r + l;

  // console.log(`n = ${n}`);
  return n;
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
