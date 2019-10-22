// your code here

// var sum = 0;

// for (i = 0; i < array.length - 1; i++) {
//   sum += Math.abs(array[i] - array[i + 1]);
// }

// return sum;

function elevatorDistance(array) {
  var sum = 0;

  for (i = 0, j = i + 1; j < array.length; i++, j++) {
    sum += Math.abs(array[i] - array[j]);
  }

  return sum;
}

console.log(elevatorDistance([5, 2, 8]));
console.log(elevatorDistance([1, 2, 3]));
console.log(elevatorDistance([7, 1, 7, 1]));
