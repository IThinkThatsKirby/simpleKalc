// decalare global variables
let displayNumbers = [];
let decimalOnDisplay = false; // We only want the . button to regester only once on the display
let prevNumber = 0; // this will temporarily store the number on the display for the next operation (x)
let getCurrentNumber = () => Number(displayNumbers.join('')); // this will be used as the second number in the current operation (y)
let currentNumber = 0;
let currentOp = ''; // this will store the current operator
let reqOp = ''; // this will store the requested operator
let prevOp = ''; // this is used for spaming the '=' button --borken function, spamming '=' does nothing, doesnt break anything either.
let target = 0; // this is the current target number or rolling answer
const display = document.getElementById('display');

// display update functions
function displayUpdate() {
	getCurrentNumber();
	display.innerText = getCurrentNumber();
	currentNumber = getCurrentNumber();
}
// rename to calcReset()
function displayClear() {
	displayNumbers = [];
	prevNumber = 0;
	currentNumber = 0;
	target = 0;
	reqOp = '';
	currentOp = '';
}

// hold the display clears it
let holdTimer;
function startTimer() {
	holdTimer = setTimeout(function () {
		displayClear();
		displayUpdate();
	}, 3000);
}
function stopTimer() {
	clearTimeout(holdTimer);
}
display.addEventListener('mousedown', startTimer);
display.addEventListener('mouseup', stopTimer);

// calculator number buttons plus decimal button
const numberButtons = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, '.'];

// calculator operator buttons and equals button
const operatorButtons = {
	add: '+',
	subtract: '-',
	multiply: '*',
	divide: '/',
	equals: '=',
};

// let there be math :D
// operator functions
function doMath(x, operator, y) {
	// one switch to rule them all, one switch to find them, one switch to bring them all and in the darkness bind them :D
	switch (operator) {
		case '+':
			target = x + y;
			return target;
		case '-':
			target = x - y;
			return target;
		case '*':
			target = x * y;
			return target;
		case '/':
			target = x / y;
			return target;
		default:
			return y;
	}
}

// this will generate our buttons for us
function createButtons(numbers, operators) {
	// create buttons for each numberButtons
	numbers.forEach((number) => {
		const button = document.createElement('button');
		button.className = 'number-button';
		button.id = number;
		button.innerText = number;
		document.getElementById('numButts').appendChild(button);
		// check if decimal is already on display
		if (number == '.') {
			button.addEventListener('click', (x) => {
				if (decimalOnDisplay == false) {
					displayNumbers.push(x.target.innerText);
					displayUpdate();
					decimalOnDisplay = true;
				}
			});
			return;
		}
		// we dont need preceeding zeros
		if (number == 0) {
			button.addEventListener('click', () => {
				if (displayNumbers.length == 0) {
					return;
				} else {
					displayNumbers.push(number);
					displayUpdate();
				}
			});
			return;
		}
		// make number buttons populate the dispaly
		button.addEventListener('click', () => {
			displayNumbers.push(number);
			displayUpdate();
		});
	});
	// create buttons for each operatorButtons
	Object.keys(operators).forEach((operator) => {
		const button = document.createElement('button');
		button.className = 'operator-button';
		button.id = operator;
		button.innerText = operators[operator];
		document.getElementById('opButts').appendChild(button);
		// make operator buttons do math
		button.addEventListener('click', () => {
			currentOp = operators[operator];
			getCurrentNumber();
			switch (true) {
				// if reqOp is empty, will store the requested operator.
				case reqOp === '':
					reqOp = operators[operator];
					displayUpdate();
					prevNumber = currentNumber;
					displayNumbers = [];
					break;
				case reqOp === '=':
					if (currentOp === '=') {
						target = doMath(prevNumber, prevOp, currentNumber);
						displayNumbers = [target];
						displayUpdate();
						reqOp = prevOp;
						break;
					}
					reqOp = operators[operator];
					prevNumber = target;
					displayUpdate();
					displayNumbers = [];
					break;
				case currentOp === '=':
					target = doMath(prevNumber, reqOp, currentNumber);
					displayNumbers = [target];
					displayUpdate();
					prevOp = target;
					reqOp = operators[operator];
					break;
				default:
					target = doMath(prevNumber, reqOp, currentNumber);
					displayNumbers = [target];
					displayUpdate();
					displayNumbers = [];
					prevNumber = target;
					reqOp = operators[operator];
			}
		});
	});
}

//initate the calculator and display
displayUpdate(displayNumbers);
createButtons(numberButtons, operatorButtons);
