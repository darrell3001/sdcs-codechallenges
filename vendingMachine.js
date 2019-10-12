function VendingMachine(items, money) {
  // build a selection array matrix
  this.items = items;
  this.till = money;
  this.selectionIndex = [];
}

VendingMachine.prototype.vend = function(selection, itemMoney) {
  // Code Here

  // get the index number of the item that was selected
  // if its -1, then it was not found
  var itemIndex = machine.selectionIndex.indexOf(selection);

  if (itemIndex == -1)
    return (
      "Invalid selection! : Money in vending machine = " +
      machine.till.toFixed(2)
    );

  // get the item entry from the vending machine object
  // this will allow us to access quantity, price, etc
  var itemSelected = machine.items[itemIndex];

  // machine is out of stock for that item
  if (itemSelected.quantity <= 0) return itemSelected.name + ": Out of stock!";

  // customer didnt put in enough money
  if (itemSelected.price > itemMoney) return "Not enough money!";

  // all requirements met to vend the product
  itemSelected.quantity -= 1;

  // this is tricky, note that the till is an attribute on the vending machine, not the item
  machine.till += itemSelected.price;

  // customer fed in exact amount, no change
  if (itemSelected.price == itemMoney) return "Vending " + itemSelected.name;

  // we know we will have to return change, so calc how much
  var change = (itemMoney - itemSelected.price).toFixed(2);

  // we are done, just return a msg saying about the amout of change returned
  return "Vending " + itemSelected.name + " with " + change + " change.";
};

// REMOVE BELOW THIS LINE BEFORE RUNNING IN CODEWARS
//   read and parse data from data.json file
var fs = require("fs");
var content = fs.readFileSync("vendingMachineData.json");
var items = JSON.parse(content);
// // REMOVE ABOVE THIS LINE BEFORE RUNNING IN CODEWARS

// initialize machine
var machine = new VendingMachine(items, 10.0);

// create the index after the initial load
// there is probably a way to to do this in the
// constructor of the object *TODO*
machine.items.forEach(function(item) {
  machine.selectionIndex.push(item.code);
});

console.log(machine.vend("A01", 10.0));
console.log(machine.vend("A02", 0.12));
console.log(machine.vend("A03", 1.0));
console.log(machine.vend("A04", 10.0));
console.log(machine.vend("A05", 0.7));
console.log(machine.vend("A06", 0.99));
console.log(machine.vend("A06", 0.99));
console.log(machine.vend("A06", 0.99));
console.log(machine.vend("A20", 10.0));
