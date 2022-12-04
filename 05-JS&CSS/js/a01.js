function multiply(number1, number2) {
  // TODO: implement me
  if (number1 && number2) return number1 * number2;
  else return number1 * 1;
}

function multiplyAll() {
  // TODO: implement me
  let result = 1;
  for (let i = 0; i < arguments.length; i++) result *= arguments[i];
  return result;
}
