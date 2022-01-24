console.log("Hello World!");

let suit = "spades";
let face = "queen";
let value = 10;

let isFace = true;

let aceOfSpades = {
	suit: "spades",
	face: "ace",
	value: 1,
	isFace: false,
};

function square(number) {
	let result = number * number;
	return result;
}

console.log(square(2));

function greeting(name, age) {
	let sayHi = "Hi my name is " + name + "and I am " + age + "years old";
	console.log(sayHi);
}

greeting("Artemis", 16);
