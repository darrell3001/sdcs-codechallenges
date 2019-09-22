function thirt(n) {

    var myKey = [1,10,9,12,3,4];
    var myString = n.toString();
    var myStringLen = myString.length;
    var i = 0;
    var k = 0;
    var sum = 0;
    var subtotal = 0;

    for (i = myStringLen-1; i >= 0; i--, k++) {
        // when Key pointer (k) is at end of list, reset to start of list
        if (k >= 6) { k = 0;}

        subtotal = Number(myString.charAt(i)) * Number(myKey[k]);
        sum += subtotal;
    }

    // initialize lastSum with value passed into function (n)
    var lastSum = n;

    while (sum != lastSum) {
        lastSum = sum;
        sum = thirt(sum);
    }

    return sum;

}

