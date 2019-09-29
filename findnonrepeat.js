var s = "moonmen";
var a = s.split('');

var l = a.length;
var i = 0;
var j = 0;

var foundIt = false;
var winner = "";
var dupChar = false;

for (i=0; i < l; i++) {
    dupChar = false;
    console.log(a[i] + " - i=" + i); 

    // if string is only one char or 
    // if we are on last char
    // then winner = this char
    if (l == 1 || i == l-1) { 
            winner = a[i];
        break;
    }

    // if NOT on first char
    // then check if we have ecountered this char before 
    // if we have seen this char before, then break out of inner loop
    if (i != 0 ) {
        for (j=i-1; j >= 0 ; j--) {
            console.log("  < " + a[j] + " - j=" + j);
            if (a[j] == a[i] ) {
                dupChar = true;
                break;
            }
        }    
    }

    if ( !dupChar ) {
        for (j=i+1; j < l; j++) {
            console.log("  > " + a[j] + " - j=" + j);

            if (a[j] == a[i] ) {
                break;
            }

            if (j == l-1) {
                foundIt = true;
                winner = a[i];
                break;
            }

        }
    }

    if (foundIt == true) {
        break;
    }

}

console.log("input = " + s + ", first non-repeating char = " + winner);
