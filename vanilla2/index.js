// globals
let display = document.getElementById('display');
let memo = 0;
let secondMemo = 0;
let result = 0;
let numberBtns = document.getElementsByClassName('numBtn');
let pressedOp = 'defaultify';

console.log(display);
// functions for add subtract multiply divide power
function equals() {
	switch (pressedOp) {
		case 'add':
			result = add(memo, secondMemo);
			memo = result;
			break;
		case 'subtract':
			result = subtract(memo, secondMemo);
			memo = result;
			break;
		case 'multiply':
			result = multiplies(memo, secondMemo);
			memo = result;
			break;
		case 'divide':
			result = divide(memo, secondMemo);
			memo = result;
			break;
		case 'power':
			result = power(memo, secondMemo);
			memo = result;
			break;
		default:
			result = Math.floor(Math.random() * 9999999999) + 1;
	}
}
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
	let res = 0;
	let i = 0;
	for (; i < b; i++) {
		result = a * res;
	}
	return res;
}
// adds event listeners to number buttons
for (let i = 0; i < numberBtns.length; i++) {
	numberBtns.item(i).addEventListener('click', function () {
		result = result * 10 + i;
		memo = result;
		updateDisplay();
	});
}
// adds event listeners to operator buttons
document.getElementById('add').addEventListener('click', function (x) {
	pressedOp = 'add';
	equals();
	secondMemo = result;
	clearDisplay();
});
document.getElementById('equals').addEventListener('click', function () {
	equals();
	updateDisplay();
	console.log(memo, secondMemo, result);
});

function updateDisplay() {
	display.innerHTML = result;
}
// clears display
function clearDisplay() {
	result = 0;
}
// memory 1 and 2
