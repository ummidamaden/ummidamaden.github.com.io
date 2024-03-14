const resultElement = document.getElementById("result");
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const submitBtn = document.getElementById("submit");
const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");
let action = "+";

console.log(input1.value);
console.log(input2.value);

// const sum = Number(input1.value) + Number(input2.value);
// resultElement.textContent = sum;
// console.log(typeof sum);
submitBtn.onclick = function () {
  console.log("here");
  result = computeNumbersWithAction(input1, input2, action);
  printResult(result);
};

plusBtn.onclick = function () {
  action = "+";
  console.log(action);
};

plusBtn.onclick = function () {
  action = "-";
  console.log(action);
};

function printResult(result) {
  if (sum < 0) {
    resultElement.style.color = "red";
  } else {
    resultElement.style.color = "green";
  }
  resultElement.textContent = result;
}

function computeNumbersWithAction(inp1, inp2, actionSymbol) {
  const num1 = Number(inp1.value);
  const num2 = Number(inp2.value);
  console.log(inp1.value);
  console.log(inp2.value);
  if (actionSymbol == "+") {
    return num1 + num2;
  } else if (actionSymbol == "-") {
    return num1 - num2;
  }
  return actionSymbol == "+" ? num1 + num2 : num1 - num2;
}
