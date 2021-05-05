const calculater = {
  plus: function (a, b) {
    return a + b;
  },
  minus: function (a, b) {
    return a - b;
  },
  multiple: function (a, b) {
    return a * b;
  },
  divide: function (a, b) {
    return a / b;
  },
  remainder: function (a, b) {
    return a % b;
  },
  power: function (a, b) {
    return a ** b;
  },
};

const { plus, minus, multiple, divide, remainder, power } = calculater;
const result = (cal, num1, num2) => console.log(cal(num1, num2));

result(plus, 100, 50);
result(minus, 20, 5);
result(multiple, 10, 2);
result(divide, 100, 2);
result(remainder, 20, 2);
result(power, 2, 4);
