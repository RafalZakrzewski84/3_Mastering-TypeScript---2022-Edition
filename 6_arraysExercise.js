// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create an empty array of numbers called "ages":
var ages = [];
// **********************************************
// ******************* PART 2 *******************
// **********************************************
// Create an array variable called gameBoard that starts as an empty array.
// It should be typed to hold a 2 dimensional array of strings
var gameBoard = [['x', 'o', 'x']];
// **********************************************
// ******************* PART 4 *******************
// **********************************************
// Write a function called getTotal that accepts an array of Product types
// It should return the sum of all the products' prices
var products = [
	{ name: 'apple', price: 10 },
	{ name: 'orange', price: 15 },
	{ name: 'watermelon', price: 20 },
];
function getTotal(arr) {
	var total = 0;
	for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
		var prod = arr_1[_i];
		total = total + prod.price;
	}
	return total;
}
console.log(getTotal(products));
