// =============Tsak 6 +
function fib(n) {
  const result = [0, 1];

  for (let i = 0; i < n; i++) {
    let sum = result[i] + result[i + 1];
    result.push(sum);
  }

  return result.slice(0, -2);
}
// console.log(fib(10));

// =============Tsak 7

// Rectangle
function getRectangleP(sideA, sideB) {
  return (sideA + sideB) * 2;
}
// console.log(getRectangleP(5, 9));

function getRectangleS(sideA, sideB) {
  return sideA * sideB;
}
// console.log(getRectangleS(7, 2));

// Triangle
function getTriangleP(sideA, sideB, sideC) {
  return sideA + sideB + sideC;
}
// console.log(getTriangleP(7, 2, 3));

function getTriangleS(sideA, sideB, sideС) {
  const semiPerimeter = (sideA + sideB + sideС) / 2;
  const n =
    semiPerimeter *
    (semiPerimeter - sideA) *
    (semiPerimeter - sideB) *
    (semiPerimeter - sideС);

  return n ** (1 / 2);
}
// console.log(getTriangleS(6, 7, 8));

// Сircle
function getСircleP(radius) {
  const pi = 3.14;
  return 2 * radius * pi;
}
// console.log(getСircleP(3));

function getСircleS(radius) {
  const pi = 3.14;
  return pi * radius ** 2;
}
// console.log(getСircleS(5));

// =============Tsak 8

function getFactorial(n) {
  let result = 1;

  for (let i = n; i > 1; i--) {
    result *= i;
  }

  return result;
}
// console.log(getFactorial(5));

// вариант 2
function getFactorial2(n) {
  let result = 1;

  for (let i = 1; i <= n; i++) {
    result *= i;
  }

  return result;
}
// console.log(getFactorial2(5));

// =============Tsak 9

function getSumMultipleOfTwo(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sum += arr[i];
    }
  }

  return sum;
}
// console.log(getSumMultipleOfTwo([1, 2, 3, 4, 5, 6]));

function getSumMultipleOfThree(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 3 === 0) {
      sum += arr[i];
    }
  }

  return sum;
}
// console.log(getSumMultipleOfThree([1, 2, 3, 4, 5, 6]));

function getSumPositiveOdd(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0 && arr[i] % 2 !== 0) {
      sum += arr[i];
    }
  }

  return sum;
}
// console.log(getSumPositiveOdd([1, 2, 3, 4]));

// =============Tsak 10

function counterZeroItemsOfArr(arr) {
  let counter = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      counter++;
    }
  }

  return counter;
}
// console.log(counterZeroItemsOfArr([1, 0, 2, 0, 3, 0]));

function counterNegativeItemsOfArr(arr) {
  let counter = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      counter++;
    }
  }

  return counter;
}
// console.log(counterNegativeItemsOfArr([-1, 2, -3, 4, 5]));

function counterPositiveItemsOfArr(arr) {
  let counter = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      counter++;
    }
  }

  return counter;
}
// console.log(counterPositiveItemsOfArr([-1, 2, -3, 4, 5, 6, -1]));

function counterPrimeNumbersOfArr(arr) {
  let counter = 0;
  
  function isPrime(num) {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }

    return num > 1;
  }


  for (let i = 0; i < arr.length; i++) {
    if (isPrime(arr[i])) {
      counter++;
    }
  }

  return counter;
}

// console.log(counterPrimeNumbersOfArr([1, 2, 3, 4, 5, 6, 5, 5]));
