class Calculator {
  constructor(previousTxtEl, currenTxtEl) {
    this.previousTxtEl = previousTxtEl;
    this.currenTxtEl = currenTxtEl;
    this.clear();
  }
  clear() {
    this.currentOperand = "";
    this.previousOperand = "";
    this.operation = undefined;
  }
  delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1);
  }
  appendNumber(number) {
    if (number === "." && this.currentOperand.includes(".")) return;

    this.currentOperand = this.currentOperand.toString() + number.toString();
  }
  chooseOperation(operation) {
    if (this.currentOperand === "") return;
    if (this.previousOperand !== "") {
      this.compute();
    }
    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = "";
  }
  compute() {
    let computation;
    const prev = parseFloat(this.previousOperand);
    const current = parseFloat(this.currentOperand);
    if (isNaN(prev) || isNaN(current)) return;
    switch (this.operation) {
      case "+":
        computation = prev + current;
        break;
      case "-":
        computation = prev - current;
        break;
      case "x":
        computation = prev * current;
        break;
      case "÷":
        if (current === 0) {
          alert("YOU CANNOT DIVIDE BY ZERO");
          computation = 0;
          return;
        }
        computation = prev / current;
        break;
      default:
        return;
    }
    this.currentOperand = computation;
    this.operation = undefined;
    this.previousOperand = "";
  }
  getDisplayNumber(number) {
    const stringNumber = number.toString();
    const integerDigits = parseFloat(stringNumber.split(".")[0]);
    const decimalDigits = stringNumber.split(".")[1];
    let integerDisplay;
    if (isNaN(integerDigits)) {
      integerDisplay = "";
    } else {
      integerDisplay = integerDigits.toLocaleString("en", {
        maximumFractionDigits: 0,
      });
    }
    if (decimalDigits != null) {
      return `${integerDisplay}.${decimalDigits}`;
    } else {
      return integerDisplay;
    }
  }
  updateDisplay() {
    this.currenTxtEl.innerText = this.getDisplayNumber(this.currentOperand);
    if (this.operation != null) {
      this.previousTxtEl.innerText = `${this.getDisplayNumber(
        this.previousOperand
      )} ${this.operation}`;
    } else {
      this.previousTxtEl.innerText = "";
    }
  }
}

const numberBtns = document.querySelectorAll("[data-number]");
const operationBtns = document.querySelectorAll("[data-operation]");
const equalsBtn = document.querySelector("[data-equals]");
const deleteBtn = document.querySelector("[data-delete]");
const allClearBtn = document.querySelector("[data-all-clear]");
const previousTxtEl = document.querySelector("[data-previous-operand]");
const currenTxtEl = document.querySelector("[data-current-operand]");

const calculator = new Calculator(previousTxtEl, currenTxtEl);

numberBtns.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  });
});

operationBtns.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.chooseOperation(button.innerText);
    calculator.updateDisplay();
  });
});

equalsBtn.addEventListener("click", () => {
  calculator.compute();
  calculator.updateDisplay();
});

allClearBtn.addEventListener("click", () => {
  calculator.clear();
  calculator.updateDisplay();
});
deleteBtn.addEventListener("click", () => {
  calculator.delete();
  calculator.updateDisplay();
});
//Keyboard Support added
window.addEventListener("keydown", (e) => {
  if (e.code === "Numpad0" || e.code === "Digit0") {
    calculator.appendNumber("0");
    calculator.updateDisplay();
  } else if (e.code === "Numpad1" || e.code === "Digit1") {
    calculator.appendNumber("1");
    calculator.updateDisplay();
  } else if (e.code === "Numpad2" || e.code === "Digit2") {
    calculator.appendNumber("2");
    calculator.updateDisplay();
  } else if (e.code === "Numpad3" || e.code === "Digit3") {
    calculator.appendNumber("3");
    calculator.updateDisplay();
  } else if (e.code === "Numpad4" || e.code === "Digit4") {
    calculator.appendNumber("4");
    calculator.updateDisplay();
  } else if (e.code === "Numpad5" || e.code === "Digit5") {
    calculator.appendNumber("5");
    calculator.updateDisplay();
  } else if (e.code === "Numpad6" || e.code === "Digit6") {
    calculator.appendNumber("6");
    calculator.updateDisplay();
  } else if (e.code === "Numpad7" || e.code === "Digit7") {
    calculator.appendNumber("7");
    calculator.updateDisplay();
  } else if (e.code === "Numpad8" || e.code === "Digit8") {
    calculator.appendNumber("8");
    calculator.updateDisplay();
  } else if (e.code === "Numpad9" || e.code === "Digit9") {
    calculator.appendNumber("9");
    calculator.updateDisplay();
  } else if (e.code === "NumpadDecimal" || e.code === "Period") {
    calculator.appendNumber(".");
    calculator.updateDisplay();
  } else if (e.code === "NumpadAdd" || e.code === "Equal") {
    calculator.chooseOperation("+");
    calculator.updateDisplay();
  } else if (e.code === "NumpadSubtract" || e.code === "Minus") {
    calculator.chooseOperation("-");
    calculator.updateDisplay();
  } else if (e.code === "NumpadMultiply" || e.code === "KeyX") {
    calculator.chooseOperation("x");
    calculator.updateDisplay();
  } else if (e.code === "NumpadDivide" || e.code === "Slash") {
    calculator.chooseOperation("+");
    calculator.updateDisplay();
  } else if (e.code === "Backspace") {
    calculator.delete();
    calculator.updateDisplay();
  } else if (e.code === "Enter") {
    calculator.compute();
    calculator.updateDisplay();
  }
});
