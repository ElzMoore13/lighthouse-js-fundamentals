var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
console.log("While Loop - Ingredients");
var j = 0;
while (j < ingredients.length){
  console.log('\t' + ingredients[j]);
  j++;
}

// Write a for loop that prints out the contents of ingredients:
console.log("\nFor Loop - Ingredients");
for (var i = 0; i < ingredients.length; i++) {
  console.log('\t' + ingredients[i]);
}
// Write any loop (while or for) that prints out the contents of ingredients backwards:
console.log("\nWhile Loop - Ingredients Backwards");
var k = ingredients.length - 1;
while (k >= 0){
  console.log('\t' + ingredients[k]);
  k -= 1;
}