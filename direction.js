function lineUp(commands) {

    students.forEach( function(student,k) {
        student.direction = 0;
    });

    var cmds = commands.toUpperCase().split('');
    var count = 0;

    // if blank string, then just return 0;
    if (cmds.length == 0) {
        return 0;
    }

    // cmds.forEach ( function (cmd, i) {  // cant do break out of foreach
    for (i=0; i < cmds.length; i++) {
        cmd = cmds[i];
        students.forEach( function(student,j) {
            // console.log(student.name + " is at " + student.direction);
            student.turn(cmd); 
            // console.log(student.name + " turns " + cmd + " and is now at " + student.direction);
        })

        var directions = [];
        students.forEach( function(student, j) {
            directions.push(student.direction);
        })

        if (Math.min(...directions) == Math.max(...directions)) {
            if (directions.length > 1) {
                // console.log(Math.min(...directions) + " : " + Math.max(...directions));
                count++;
            }
        } else {
            continue;
        }

    }

    return count;

}


function Student(name, isDyslexic) {
    this.name = name;
    this.isDyslexic = isDyslexic;
    this.direction = 0;

    this.turn = function(cmd) {
        if (this.isDyslexic && Math.abs(cmdDefs[cmd]) == 90) {
            if (cmdDefs[cmd] == 90) {
                this.direction = this.direction + -(cmdDefs[cmd]);
            } else {
                this.direction = this.direction + Math.abs(cmdDefs[cmd]);
            }
        } else {  
            this.direction = this.direction + cmdDefs[cmd];
        }

        if (this.direction == 360) {
            this.direction = 0;
        }

        if (this.direction == -90) {
            this.direction = 270;
        }

        if (this.direction == 450) {
            this.direction = 90;
        }

    }
}

var students = [];

students.push (new Student("alice", true));
students.push (new Student("bob", false));
students.push (new Student("chris", true));

cmdDefs = {
    "L": -90, 
    "R": +90 , 
    "A": +180
}

console.log(lineUp("LLARL"));   //pass
console.log(lineUp("RLR"));     //pass
console.log(lineUp(""));        //pass
console.log(lineUp("L"));       //pass
console.log(lineUp("A"));       //pass
console.log(lineUp("AAAAAAAAAAAAAAA"));     //pass
console.log(lineUp("RRRRRRRRRRLLLLLLLLLRRRRLLLLLLLLLL"));  //pass
console.log(lineUp("AALAAALARAR"));  // pass


