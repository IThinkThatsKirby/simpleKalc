// globals
let displayArray = [];
let displayNum = 0;
let display = document.getElementById('display');
let displayNumber = display.innerText;
let memo = 0;
let pressedNumber = document.getElementsByClassName('numBtn');
let pressedOperator = document.getElementsByClassName('opBtn');
// functions for add subtract multiply divide power

// adds two numbers returns the result
function add(a, b) {
	return a + b;
}
// subtracts two numbers returns the result
function subtract(a, b) {
	return a - b;
}
// multiplies two numbers returns the result
function multiplies(a, b) {
	return a * b;
}
// divides two numbers returns the result
function divide(a, b) {
	return a / b;
}
// raises a number to the power of another number returns the result
function power(a, b) {
	// power of 0 is 1 because they said so;
	if (b == 0) {
		return 1;
	}
	let result = 0;
	let i = 0;
	for (; i < b; i++) {
		result = a * result;
	}
	return result;
}
// adds pressed numbers to an array
pressedNumber.addeventlistener('click', function (x) {
	displayArray.push(pressedNumber);
	displayNumber = displayNumber + x.innerText;
});
// takes array and makes it a number

// update display

// memory 1 and 2
