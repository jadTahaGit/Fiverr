let result = 0;
let num = [];
let operator = [];
let resultShown = false;

//  number
document.querySelectorAll('.num').forEach((element) => {
  element.addEventListener('click', (e) => {
    if (resultShown) {
      emptyOutput();
      switchResultShown();
    }
    output(element.textContent);
  });
});

//  operator
document.querySelectorAll('.operator').forEach((element) => {
  element.addEventListener('click', (e) => {
    if (outputIsEmpty) {
      saveNumber();
      emptyOutput();
      saveOperator(element.textContent);
    }
  });
});

//  percantage
document.getElementById('percantage').addEventListener('click', (e) => {
  if (outputIsEmpty) {
    saveNumber();
    emptyOutput();
    saveOperator(e.target.textContent);
    output(calculateResult());
    switchResultShown();
  }
});

// reverseSign
document.getElementById('reverseSign').addEventListener('click', (e) => {
  if (!outputIsEmpty()) {
    if (!isOutPutWithSign(getOutput())) {
      output(addSign(getOutput()));
    } else {
      output(reverseSign(getOutput()));
    }
  }
});

// point
document.getElementById('point').addEventListener('click', (e) => {
  if (!outputIsEmpty()) {
    output(addPoint(getOutput()));
  }
});

//  equal
document.querySelector('.equal').addEventListener('click', (e) => {
  if (operator.length == 1) {
    saveNumber(); //second number
    if (num.length == 2) {
      output(calculateResult());
      switchResultShown();
    }
  }
});

// clear
document.querySelector('.clearAll').addEventListener('click', (e) => {
  emptyOutput();
  num = [];
  operator = [];
});

// backSpace
document.getElementById('backSpace').addEventListener('click', (e) => {
  document.querySelector('.output').textContent = document
    .querySelector('.output')
    .textContent.slice(0, -1);
});

// outputIsEmpty
function outputIsEmpty() {
  if (document.querySelector('.output').textContent == '') {
    return true;
  }
  return false;
}

// getOutput
function getOutput() {
  return document.querySelector('.output').textContent;
}

// emptyOutput
function emptyOutput() {
  document.querySelector('.output').textContent = '';
}

// output
function output(textContent) {
  document.querySelector('.output').textContent += textContent;
}

function isOutPutWithSign(textContent) {
  if (textContent.charAt(0) == '+' || textContent.charAt(0) == '-') {
    return true;
  }
  return false;
}

function reverseSign(textContent) {
  if (textContent.charAt(0) == '+') {
    emptyOutput();
    textContent = textContent.replace(textContent[0], '-');
    return textContent;
  }
  if (textContent.charAt(0) == '-') {
    emptyOutput();
    textContent = textContent.replace(textContent[0], '+');
    return textContent;
  }
}

function addSign(textContent) {
  textContent = '-' + textContent;
  emptyOutput();
  return textContent;
}

function addPoint(textContent) {
  if (!textContent.includes('.')) {
    textContent = textContent + '.';
  }
  emptyOutput();
  return textContent;
}

// save number
function saveNumber() {
  num.push(document.querySelector('.output').textContent);
}

// save operator
function saveOperator(op) {
  if (op == '÷') {
    op = '/';
  }
  if (op == 'x') {
    op = '*';
  }
  operator.push(op);
}

function add(num1, num2) {
  return num1 + num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function substract(num1, num2) {
  return num1 - num2;
}

function devide(num1, num2) {
  return num1 / num2;
}

function percentage(num1) {
  return num1 * 0.01;
}

function operatorToFunction(num1, operator, num2) {
  if (operator == '+') {
    return add(num1, num2);
  }

  if (operator == '*') {
    return multiply(num1, num2);
  }

  if (operator == '-') {
    return substract(num1, num2);
  }

  if (operator == '/') {
    return devide(num1, num2);
  }

  if (operator == '%') {
    return percentage(num1);
  }
}

// calculate result
function calculateResult() {
  if (num.length == 1) {
    result = operatorToFunction(
      Number(num[num.length - 1]),
      operator[operator.length - 1],
      0
    );
    operator = [];
    num = [];
    emptyOutput();
    return result;
  }

  result = operatorToFunction(
    Number(num[num.length - 2]),
    operator[operator.length - 1],
    Number(num[num.length - 1])
  );

  operator = [];
  num = [];
  emptyOutput();
  return result;
}

function switchResultShown() {
  if (resultShown) {
    resultShown = false;
  } else {
    resultShown = true;
  }
}
