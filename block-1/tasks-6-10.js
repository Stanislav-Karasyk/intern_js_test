// =============Tsak 6
function fibonacci(num) {
  const result = [0, 1];

  for (let i = 0; i < num; i++) {
    let sum = result[i] + result[i + 1];
    result.push(sum);
  }

  return result.slice(0, -2);
}
// console.log(fibonacci(5));

// =============Tsak 7
class Rectangle {
  constructor(sideA, sideB) {
    this.sideA = sideA;
    this.sideB = sideB;
  }

  get perimeter() {
    return (this.sideA + this.sideB) * 2;
  }

  get area() {
    return this.sideA * this.sideB;
  }
}
class Triangle {
  constructor(sideA, sideB, sideC) {
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }

  get perimeter() {
    return this.sideA + this.sideB + this.sideC;
  }

  get area() {
    const semiPerimeter = this.perimeter / 2;

    return Math.sqrt(
      semiPerimeter *
          ((semiPerimeter - this.sideA) *
              (semiPerimeter - this.sideB) *
              (semiPerimeter - this.sideC)),
  );
  }
}
class Circle {
  constructor(radius) {
      this.radius = radius;
  }

  get perimeter() {
    return 2 * this.radius * Math.PI;
  }

  get area() {
    return Math.PI * this.radius ** 2;
  }
}
// const circle = new Circle(5);
// console.log(circle.perimeter);
// console.log(circle.area);

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
