var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

console.log("fruit: ", fruit);
console.log("vegetables: ", vegetables);

// 1. Remove the last item from the vegetable array.
vegetables.pop()

// 2. Remove the first item from the fruit array.
fruit.shift()
console.log("fruit: ", fruit);
console.log("vegetables: ", vegetables);
// 3. Find the index of "orange."
const orangeIndex = fruit.findIndex(e => e == "orange")

// 4. Add that number to the end of the fruit array.
fruit.push(orangeIndex
    )
// 5. Use the length property to find the length of the vegetable array.
let vegetableLen = vegetables.length

// 6. Add that number to the end of the vegetable array.
vegetables.push(vegetableLen)

// 7. Put the two arrays together into one array. Fruit first. Call the new Array "food".
let food = fruit.concat(vegetables)
console.log(food)

// 8. Remove 2 elements from your new array starting at index 4 with one method.
food.splice(3, 2)

// 9. Reverse your array.
food.reverse()
console.log(food)

// 10. Turn the array into a string and return it.
const foodString = food.join(" ")
console.log(foodString)