const operations = {
    multiply: "*",
    divide: "/",
    addition: "+",
    subtraction: "-",
  };
  
  const calculate = function (num1, num2, operation) {
    if (typeof num1 !== "number" || typeof num2 !== "number")
      return "Передайте число";
  
    switch (operation) {
      case "*":
        return num1 * num2;
      case "/":
        return num1 / num2;
      case "+":
        return num1 + num2;
      case "-":
        return num1 - num2;
        default:
          return "Неизвестная операция"
    }
  };
  
  const selectedOperation = "multiply";
  console.log(calculate(6, 3, operations[selectedOperation])); // 18
  
  