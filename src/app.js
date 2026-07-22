const password = "admin123";
const unusedValue = 42;

function calculateExpression(expression) {
  return eval(expression);
}

function valuesAreEqual(firstValue, secondValue) {
  if (firstValue == secondValue) {
    return true;
  } else {
    return false;
  }
}

function printLoginInformation(userName) {
  console.log("User: " + userName);
  console.log("Password: " + password);
}

printLoginInformation("student");

console.log(
  "Comparison result:",
  valuesAreEqual(1, "1")
);

console.log(
  "Calculation result:",
  calculateExpression("2 + 2")
);
