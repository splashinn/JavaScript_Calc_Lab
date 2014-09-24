window.onload = function() {

	// number button variable declarations

	var zeroButton = document.getElementById("zero");
	var oneButton = document.getElementById("one");
	var twoButton = document.getElementById("two");
	var threeButton = document.getElementById("three");
	var fourButton = document.getElementById("four");
	var fiveButton = document.getElementById("five");
	var sixButton = document.getElementById("six");
	var sevenButton = document.getElementById("seven");
	var eightButton = document.getElementById("eight");
	var nineButton = document.getElementById("nine");

	// operator button variable declarations

	var plusButton = document.getElementById("plus");
	var minusButton = document.getElementById("minus");
	var timesButton = document.getElementById("times");
	var dividedByButton = document.getElementById("divided_by");

	// action button variable declarations

	var clearButton = document.getElementById("clear");
	var enterButton = document.getElementById("enter");

	// display variable declarations

	var operatorDisplay = document.getElementById("operator_display");
	var resultDisplay = document.getElementById("result_display_value");

	// variable holds hidden number

	var hiddenNum = "";

	// number button function

	var numberFunction = function(numberButton) {
		numberButton.onclick = function(event) {
			resultDisplay.innerHTML += numberButton.innerHTML;
		}
	};

	// number function calls

	numberFunction(zeroButton);
	numberFunction(oneButton);
	numberFunction(twoButton);
	numberFunction(threeButton);
	numberFunction(fourButton);
	numberFunction(fiveButton);
	numberFunction(sixButton);
	numberFunction(sevenButton);
	numberFunction(eightButton);
	numberFunction(nineButton);

	// operations function

	var operations = function() {
		if (operatorDisplay.innerHTML === "+") {
			resultDisplay.innerHTML = parseInt(hiddenNum) + parseInt(resultDisplay.innerHTML);
		} else if (operatorDisplay.innerHTML === "-") {
			resultDisplay.innerHTML = parseInt(hiddenNum) - parseInt(resultDisplay.innerHTML);
		} else if (operatorDisplay.innerHTML === "*") {
			resultDisplay.innerHTML = parseInt(hiddenNum) * parseInt(resultDisplay.innerHTML);
		} else if (operatorDisplay.innerHTML === "/") {
			resultDisplay.innerHTML = parseInt(hiddenNum) / parseInt(resultDisplay.innerHTML);
		}
	};

	// operator button function

	var operatorFunction = function(operatorButton) {
		operatorButton.onclick = function(event) {
			if (resultDisplay.innerHTML !== "" && hiddenNum !== undefined) {
				operations();
			}
			hiddenNum = resultDisplay.innerHTML;
			resultDisplay.innerHTML = "";
			operatorDisplay.innerHTML = operatorButton.innerHTML;
		}
	};

	// operator function calls

	operatorFunction(plusButton);
	operatorFunction(minusButton);
	operatorFunction(timesButton);
	operatorFunction(dividedByButton);

	// clear function

	var clearFunction = function(button, display) {
		display.innerHTML = "";
	};

	// clear button

	clearButton.onclick = function(event) {
		clearFunction(clearButton, operatorDisplay);
		clearFunction(clearButton, resultDisplay);
		hiddenNum = "";
	}

	// enter button

	enterButton.onclick = function(event) {
		if (resultDisplay.innerHTML === "" && hiddenNum === "") {
			resultDisplay.innerHTML = "";
		} else if (resultDisplay.innerHTML === "") {
			if (operatorDisplay.innerHTML === "+") {
				resultDisplay.innerHTML = parseInt(hiddenNum) + parseInt(hiddenNum);
			} else if (operatorDisplay.innerHTML === "-") {
				resultDisplay.innerHTML = parseInt(hiddenNum) - parseInt(hiddenNum);
			} else if (operatorDisplay.innerHTML === "*") {
				resultDisplay.innerHTML = parseInt(hiddenNum) * parseInt(hiddenNum);
			} else if (operatorDisplay.innerHTML === "/") {
				resultDisplay.innerHTML = parseInt(hiddenNum) / parseInt(hiddenNum);
			}
		} else {
			operations();
		}
		clearFunction(enterButton, operatorDisplay);
	}

}
