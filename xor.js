// var input = "0 1 1"; //0
// var input = "1 1 1"; //1
// var input = "1 1 1 1"; //0
// var input = "1 0 1 0"; //0
// var input = "1 1 1 0"; //1
//var x = "1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0"; //1

//            1                                       |40
//console.log(  x.match(new RegExp("1", "g")).length%2    )  ;
//console.log(  x.match("1", "g").length%2    )  ;


var Z=0;
Z = X.match(/1/g).length%2 ;
console.log(Z);

console.log(("str1,str2,str3,str4".match(new RegExp("str", "g")) || []).length); //logs 4
console.log(
    ("str1,str2,str3,str4".match(new RegExp("str", "g")) || []).length
    ); //logs 4

(input.match(/1/g) || []).length % 2;
X=i=>(i.match(/1/g)||[]).length%2;

