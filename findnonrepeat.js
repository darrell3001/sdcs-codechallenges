function firstNonRepeatingLetter(s) {
    // var s = "abba";
    var a = s.split('');

    var l = a.length;
    var i = 0;
    var j = 0;

    var foundIt = false;
    var winner = "";
    var dupChar = false;

    console.log("input string = " + s)

    // if s is just one char, then just return s
    if (l == 1) {
        console.log("first non-repeating char = " + s);
        return s;
    }

    for (i=0; i < l; i++) {
        dupChar = false;
        console.log(a[i] + " - i=" + i); 


        // if NOT on first char
        // then check if we have ecountered this char before 
        // if we have seen this char before, then break out of inner loop
        if (i != 0 ) {
            for (j=i-1; j >= 0 ; j--) {
                console.log("  < " + a[j] + " - j=" + j);
                if (a[j].toLowerCase() == a[i].toLowerCase() ) {
                    console.log("dup char found")
                    dupChar = true;
                    break;
                }
            }    
        }

        if ( !dupChar ) {

            // if we are on last char
            // then winner = this char
            if ( i == l-1) { 
                foundIt = true;
                winner = a[i];
                break;
            }

            for (j=i+1; j < l; j++) {
                console.log("  > " + a[j] + " - j=" + j);

                if (a[j].toLowerCase() == a[i].toLowerCase() ) {
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

    console.log("first non-repeating char = " + winner);
    return winner

}

firstNonRepeatingLetter("stress");
firstNonRepeatingLetter("moonmen");

firstNonRepeatingLetter("abba");
firstNonRepeatingLetter("a");
firstNonRepeatingLetter("");

firstNonRepeatingLetter("sTreSS");
firstNonRepeatingLetter("Go hang a salami, I'm a lasagna hog!");
