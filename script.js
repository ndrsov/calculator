class Calculator {
  constructor(previousTxtEl, currenTxtEl) {
    this.previousTxtEl = previousTxtEl;
    this.currenTxtEl = currenTxtEl;
  }
  clear() {}
  delete() {}
  appendNumber(number) {}
  chooseOperation(operation) {}
  compute() {}
  updateDisplay() {}
}

const numberBtns = document.querySelectorAll("[data-number]");
const operationBtns = document.querySelectorAll("[data-operation]");
const equalsBtn = document.querySelector("[data-equals]");
const deleteBtn = document.querySelector("[data-delete]");
const allClearBtn = document.querySelector("[data-all-clear]");
const previousTxtEl = document.querySelector("[data-previous-operand]");
const currenTxtEl = document.querySelector("[data-current-operand]");
