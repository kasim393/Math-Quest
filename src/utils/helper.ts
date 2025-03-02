export const getRandomOperator = () => {
  const operators = ["+", "-", "*", "/"];
  const randomIndex = Math.floor(Math.random() * operators.length);
  return operators[randomIndex];
};

export const generateRandomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const evaluateAnswer = (
  num1: number,
  num2: number,
  operator: string
) => {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return Math.floor(num1 / num2);
    default:
      return 0;
  }
};

export const generateOptions = (correctAnswer: number) => {
  const options = [correctAnswer];
  while (options.length < 4) {
    const randomOption = generateRandomNumber(1, 20);
    if (!options.includes(randomOption)) {
      options.push(randomOption);
    }
  }
  options.sort(() => Math.random() - 0.5);
  return options;
};
