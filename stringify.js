// Final submission
function stringify(list) {
  // Write your code here

  var current = list;
  var myString = "";

  while (current != null) {
    myString += current["data"] + " -> ";
    current = current["next"];
  }

  myString += "null";

  return myString;
}

// uncomment below and you can test run in node
// usage: node stringify.js
//
// ======== Snip ================
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

// prettier-ignore
var myList =  new Node(1,
              new Node(4,
              new Node(9, 
              new Node(2, 
              new Node(5, 
              new Node(22, 
              new Node("howdy", 
              new Node(16, 
              new Node(12, 
              new Node(15, 
              new Node(7              // count nubmer nodes
                        ))))))))))); // and need that many ")"

console.log(stringify(myList));
