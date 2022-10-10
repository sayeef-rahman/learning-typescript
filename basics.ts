//right but not the right convension
const num1: number = 5;
const num2: number = 10;

//simply declar the variables & it will detect the data type
const number1 = 5;
const number2 = 10.6;
const printResult = true;
const resultText = "Result is: ";

function addNumbers(n1: number, n2: number, showResult: boolean, text: string) {
  const sum = n1 + n2;
  if (printResult) {
    console.log(text + sum);
  } else {
    return sum;
  }
}

addNumbers(number1, number2, printResult, resultText);
