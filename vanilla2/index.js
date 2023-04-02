// globals
let display = document.getElementById('display');
let memo = 0;
let secondMemo = 0;
let result = 0;
let numberBtns = document.getElementsByClassName('numBtn');
let opBtns = document.getElementsByClassName('opBtn');
let pressedOp = 'defaultify';
let pressedEquals = false;

// functions for add subtract multiply divide power
function equals() {
	switch (pressedOp) {
		case 'add':
			return add(memo, secondMemo);
		case 'subtract':
			return subtract(memo, secondMemo);
		case 'multiply':
			return multiplies(memo, secondMemo);
		case 'divide':
			return divide(memo, secondMemo);
		case 'power':
			return power(memo, secondMemo);
		default:
			return secondMemo;
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
	let res = new Number(a);
	let i = 1;
	// power of 0 is 1 because they said so;
	if (b === 0) {
		res = 1;
	} else {
		for (; i < b; i++) {
			res = a * res;
		}
	}
	return res;
}
// adds event listeners to number buttons
for (let i = 0; i < numberBtns.length; i++) {
	numberBtns.item(i).addEventListener('click', function () {
		pressedEquals == true ? clearDisplay() : null;
		result = result * 10 + i;
		secondMemo = result;
		updateDisplay();
	});
}
// adds event listeners to operator buttons
for (let i = 0; i < opBtns.length; i++) {
	document.getElementById(opBtns[i].id).addEventListener('click', function () {
		pressedOp = opBtns[i].id;
		if (pressedEquals == true) {
			pressedEquals = false;
			updateDisplay();
			result = 0;
		} else {
			memo = secondMemo;
			result = memo;
			updateDisplay();
			result = 0;
		}
	});
}
document.getElementById('equals').addEventListener('click', function () {
	pressedEquals = true;
	result = equals();
	updateDisplay();
	memo = result;
});
document.getElementById('clear').addEventListener('click', function () {
	clearDisplay();
});
function updateDisplay() {
	display.innerHTML = result;
}
// clears display
function clearDisplay() {
	result = 0;
	memo = 0;
	secondMemo = 0;
	pressedEquals = false;
	pressedOp = 'defaultify';
	updateDisplay();
}
// memory 1 and 2
