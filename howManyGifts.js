function howManyGifts(maxBudget, gifts) {
  // your code goes here

  var giftCount = 0;
  var currentBudget = maxBudget;

  var sortedGiftList = gifts.sort(function(a, b) {
    return a - b;
  });

  for (i = 0; i < sortedGiftList.length; i++) {
    currentBudget -= sortedGiftList[i];

    if (currentBudget >= 0) {
      giftCount++;
    } else {
      break;
    }
  }

  return giftCount;
}

console.log("howManyGifts = " + howManyGifts(20, [13, 4, 6, 1]));
console.log(
  "howManyGifts = " + howManyGifts(200, [13, 4, 5, 6, 3, 8, 2, 2, 6, 1])
);
console.log("howManyGifts = " + howManyGifts(0, [1]));
console.log("howManyGifts = " + howManyGifts(1, []));
console.log("howManyGifts = " + howManyGifts(-1, [10]));
