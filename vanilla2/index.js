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
			return Math.floor(Math.random() * 9999999999) + 1;
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
		res = a * res;
	}
	return res;
}
// adds event listeners to number buttons
for (let i = 0; i < numberBtns.length; i++) {
	numberBtns.item(i).addEventListener('click', function () {
		result = result * 10 + i;
		secondMemo = result;
		updateDisplay();
	});
}
// adds event listeners to operator buttons
for (let i = 0; i < opBtns.length; i++) {
	console.log(opBtns[i].id);
	document.getElementById(opBtns[i].id).addEventListener('click', function () {
		console.log(opBtns[i].id, 'was clicked');
		pressedOp = opBtns[i].id;
		if (pressedEquals == true) {
			pressedEquals = false;
			updateDisplay();
			result = 0;
			console.log('m', memo, 'sM', secondMemo, 'res', result);
		} else {
			memo = equals();
			result = memo;
			updateDisplay();
			console.log('m', memo, 'sM', secondMemo, 'res', result);
			result = 0;
		}
	});
}
document.getElementById('equals').addEventListener('click', function () {
	pressedEquals = true;
	result = equals();
	updateDisplay();
	memo = result;
	console.log('m', memo, 'sM', secondMemo, 'res', result);
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
