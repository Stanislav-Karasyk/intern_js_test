// =============Tsak 6
function fib(num) {
  const result = [0, 1];

  for (let i = 0; i < num; i++) {
    let sum = result[i] + result[i + 1];
    result.push(sum);
  }

  return result.slice(0, -2);
}
// console.log(fib(5));

// =============Tsak 7
function getPerimeterRectangle(sideA, sideB) {
  return (sideA + sideB) * 2;
}
// console.log(getPerimeterRectangle(5, 9));

function getSquareRectangle(sideA, sideB) {
  return sideA * sideB;
}
// console.log(getSquareRectangle(7, 2));

function getPerimeterTriangle(sideA, sideB, sideC) {
  return sideA + sideB + sideC;
}
// console.log(getPerimeterTriangle(7, 2, 3));

function getSquareTriangle(sideA, sideB, sideС) {
  const semiPerimeter = (sideA + sideB + sideС) / 2;
  const n =
    semiPerimeter *
    (semiPerimeter - sideA) *
    (semiPerimeter - sideB) *
    (semiPerimeter - sideС);

  return n ** (1 / 2);
}
// console.log(getSquareTriangle(6, 7, 8));

function getPerimeterСircle(radius) {
  const pi = 3.14;
  return 2 * radius * pi;
}
// console.log(getPerimeterСircle(3));

function getSquareСircle(radius) {
  const pi = 3.14;
  return pi * radius ** 2;
}
// console.log(getSquareСircle(5));

// =============Tsak 8
function getFactorial(num) {
  let result = 1;

  for (let i = num; i > 1; i--) {
    result *= i;
  }

  return result;
}
// console.log(getFactorial(5));

// вариант 2
function getFactorial2(num) {
  let result = 1;

  for (let i = 1; i <= num; i++) {
    result *= i;
  }

  return result;
}
// console.log(getFactorial2(5));

// =============Tsak 9
function getSumNumOfArr(arr, callback) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];

    if (callback(num)) {
      sum += arr[i];
    }
  }

  return sum;
}
// console.log(getSumNumOfArr([1, 2, 3, 4, 3], (num) => num % 2 === 0)); // кратные двум
// console.log(getSumNumOfArr([1, 2, 3, 4, 5, 6], (num) => num % 3 === 0)); // кратные трем
// console.log(getSumNumOfArr([1, -2, 3, 4], (num) => num > 0 && num % 2 === 0)); // положительные и нечетные

// =============Tsak 10
function counterItemsOfArr(arr, callback, isPrime) {
  isPrime = isPrime || false;
  let counter = 0;

  for (let i = 0; i < arr.length; i++) {
    isPrime = true;
    let num = arr[i];

    if (isPrime) {
      for (let j = 2; j < num; j++) {
        if (num % j === 0) {
          isPrime = false;
          break;
        }
      }
    }

    if (callback(num, isPrime)) {
      counter++;
    }
  }

  return counter;
}
// console.log(counterItemsOfArr([1, 1, 0, 0], (num) => num === 0)); // нулевые
// console.log(counterItemsOfArr([1, -1, 1, -3], (num) => num < 0)); // отрицательные
// console.log(counterItemsOfArr([0, -1, 1, -3], (num) => num >= 0)); // положительные
// console.log(
//   counterItemsOfArr([2, 3, 4], (num, isPrime) => num > 1 && isPrime, true)
// ); // простые числа

