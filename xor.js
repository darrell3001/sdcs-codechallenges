// var input = "0 1 1"; //0
// var input = "1 1 1"; //1
// var input = "1 1 1 1"; //0
// var input = "1 0 1 0"; //0
// var input = "1 1 1 0"; //1
var x = "1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0"; //1

//            1                                       |40
console.log(  x.match(new RegExp("1", "g")).length%2    )  ;


