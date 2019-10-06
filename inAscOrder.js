function inAscOrder(arr) {
    // Code your algorithm here :)

    console.log("original = " + arr);
    var clone = arr.slice();
    
    clone.sort(function(a, b) {
        return a - b;
    });
    console.log("sorted   = " + clone);
    
    for (i=0; i < arr.length; i++) {
        if (arr[i] != clone[i]) {
            return false;
        }
    }
    
    return true;
    
}

console.log(inAscOrder([1, 2, 4, 7, 19]));
console.log(inAscOrder([1, 6, 10, 18, 2, 4, 20]));
console.log(inAscOrder([1, 6, 10, 18, 2, 4, 20]));
console.log(inAscOrder([9, 8, 7, 6, 5, 4, 3, 2, 1]));


// Test.expect(inAscOrder([1, 2, 4, 7, 19]), 'The list of numbers "1, 2, 4, 7, 19" is in ascending order');
// Test.expect(inAscOrder([1, 2, 3, 4, 5]), 'The list of numbers "1, 2, 3, 4, 5" is in ascending order');
// Test.expect(!inAscOrder([1, 6, 10, 18, 2, 4, 20]), 'The list of numbers "1, 6, 10, 18, 2, 4, 20" is not in ascending order');
// Test.expect(!inAscOrder([9, 8, 7, 6, 5, 4, 3, 2, 1]), 'The list of numbers "9, 8, 7, 6, 5, 4, 3, 2, 1" is in DESCENDING order not ascending order');

