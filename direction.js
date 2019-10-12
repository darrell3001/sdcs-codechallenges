function lineUp(commands) {

    // reset each student's orientation to 0
    students.forEach( function(student,k) {
        student.direction = 0;
    });

    var cmds = commands.toUpperCase().split('');
    var count = 0;

    // edge case, if blank string, then just return 0;
    if (cmds.length == 0) {
        return 0;
    }

    cmds.forEach ( function (cmd, i) {
        students.forEach( function(student,j) {
            student.turn(cmd); 
        })

        // probably a better way to do this
        var directions = [];
        students.forEach( function(student, j) {
            directions.push(student.direction);
        })

        if (Math.min(...directions) == Math.max(...directions)) {
            count++;
        }
    })

    return count;

}


function Student(name, isDyslexic) {
    this.name = name;
    this.isDyslexic = isDyslexic;
    this.direction = 0;

    this.turn = function(cmd) {
        // if isDyslexic and turn is L | R, then do opposite
        if (this.isDyslexic && Math.abs(cmdDefs[cmd]) == 90) {
            this.direction = this.direction + (0 - (cmdDefs[cmd]));
        } else {  // not dyslexic or a A. In either case just add values
            this.direction = this.direction + cmdDefs[cmd];
        }

        // if we have gone clockwise past 360 (ie GT 360), then subtract 360 to get to right direction
        if (this.direction >= 360) {
            this.direction = this.direction - 360;
        }

        // if we have gone counterclockwise past 0 (ie negative number), then just att 360 go get to right direction
        if (this.direction < 0) {
            this.direction = 360 + this.direction;
        }
    }
}

// main()

// possible commands and their associated degree of rotation
cmdDefs = {
    "L" : -90, 
    "R" : +90 , 
    "A" : +180
}

//studnts start out as empty array
var students = [];

// push alice, bob, and chris onto stack.. alice is dyslexic
students.push (new Student("alice", true));
students.push (new Student("bob", false));
students.push (new Student("chris", false));

// apply test cases from codewars
console.log(lineUp("LLARL"));   //pass
console.log(lineUp("RLR"));     //pass
console.log(lineUp(""));        //pass
console.log(lineUp("L"));       //pass
console.log(lineUp("A"));       //pass
console.log(lineUp("AAAAAAAAAAAAAAA"));     //pass
console.log(lineUp("RRRRRRRRRRLLLLLLLLLRRRRLLLLLLLLLL"));  //pass
console.log(lineUp("AALAAALARAR"));  // pass

