// =============Tsak 11
function decimalToBinary(num) {
  let binaryArr = [];

  for (let i = num; num >= 1; i++) {
    binaryArr.unshift(Math.floor(num % 2));
    num /= 2;
  }

  return binaryArr;
}
// console.log(decimalToBinary(12));

function binaryToDecimal(binary) {
  const binaryAsArr = binary.split("").reverse();
  let res = 0;

  for (let i = 0; i < binaryAsArr.length; i++) {
    res += Number(binaryAsArr[i]) * 2 ** i;
  }
  return res;
}
// console.log(binaryToDecimal("1100")); //12

// =============Tsak 12
const matrixTest = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 0],
];

function getSumNumOfMatrix(matrix, callback) {
  let sum = 0;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      let num = matrix[i][j];

      if (callback(num)) {
        sum += num;
      }
    }
  }

  return sum;
}
// console.log(getSumNumOfMatrix(matrixTest, (num) => num % 2 === 0)); //кратные двум
// console.log(getSumNumOfMatrix(matrixTest, (num) => num % 3 === 0)); //кратные трем
// console.log(getSumNumOfMatrix(matrixTest, (num) => num > 0 && num % 2 !== 0)); //положительные и нечетные

function counterNumOfMatrix(matrix, callback, isPrime) {
  isPrime = isPrime || false;
  let counter = 0;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      isPrime = true;
      let num = matrix[i][j];

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
  }

  return counter;
}
// console.log(counterNumOfMatrix(matrixTest, (num) => num === 0)); // нулевые
// console.log(counterNumOfMatrix(matrixTest, (num) => num < 0)); // отрицательные
// console.log(counterNumOfMatrix(matrixTest, (num) => num > 0)); // положительные
// console.log(
//   counterNumOfMatrix(matrixTest, (num, isPrime) => num > 1 && isPrime, true)
// ); // простые числа

// =============Tsak 13
function getSumNumMinToMax(min, max, callback) {
  let sum = 0;

  for (let i = min; i <= max; i++) {
    if (callback(i)) {
      sum += i;
    }
  }

  return sum;
}
// console.log(getSumNumMinToMax(10, 20, () => true)); // все
// console.log(getSumNumMinToMax(10, 20, (num) => num % 3 === 0)); // кратны 3
// console.log(getSumNumMinToMax(-10, 20, (num) => num > 0)); // положительные

// =============Tsak 14
function getMeanOfArr(arr, callback) {
  let counter = 0;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];

    if (callback(num)) {
      sum += num;
      counter++;
    }
  }
  return sum / counter;
}
// console.log(getMeanOfArr([1, 2, 3, 4], (num) => num % 2 === 0)); // четные
// console.log(getMeanOfArr([1, 2, 3, 4], (num) => num % 2 !== 0)); // не четные

function getMeanOfMatrix(matrix, callback) {
  let counter = 0;
  let sum = 0;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      let num = matrix[i][j];

      if (callback(num)) {
        sum += num;
        counter++;
      }
    }
  }

  return sum / counter;
}
// console.log(getMeanOfMatrix(matrixTest, (num) => num % 2 === 0)); // четные
// console.log(getMeanOfMatrix(matrixTest, (num) => num % 2 !== 0)); // не четные

// =============Tsak 15
function getTransposeMatrix(matrix) {
  const matrixTransp = [];

  for (let i = 0; i < matrix.length; i++) {
    matrixTransp.push([]);
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      matrixTransp[j].push(matrix[i][j]);
    }
  }

  return matrixTransp;
}
// console.log(getTransposeMatrix(matrixTest));
