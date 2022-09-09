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
  delete() {}
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
  compute() {}
  updateDisplay() {
    this.currenTxtEl.innerText = this.currentOperand;
    this.previousTxtEl.innerText = this.previousOperand;
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
