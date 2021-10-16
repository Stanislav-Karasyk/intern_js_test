// ============Task 6
function fibR(num, resArr = [0, 1]) {
  resArr.push(resArr[resArr.length - 2] + resArr[resArr.length - 1]);

  if (resArr.length < num) {
    return fibR(num, resArr);
  } else {
    return resArr;
  }
}
// console.log(fibR(5));

// ============Task 8
function getFactorialR(num) {
  let res = 1;

  if (num <= 1) {
    return res;
  } else {
    res = num * getFactorialR(num - 1);
  }
  return res;
}
// console.log(getFactorialR(5));

// =============Tsak 9
function getSumMultipleOfTwoR(arr, index) {
  index = index || 0;
  let sum = 0;

  if (arr[index] % 2 === 0) {
    sum = arr[index];
  }

  if (++index < arr.length) {
    sum += getSumMultipleOfTwoR(arr, index);
  }

  return sum;
}
// console.log(getSumMultipleOfTwoR([1, 2, 3, 4, 3]));

function getSumMultipleOfThreeR(arr, index) {
  index = index || 0;
  let sum = 0;

  if (arr[index] % 3 === 0) {
    sum = arr[index];
  }

  if (++index < arr.length) {
    sum += getSumMultipleOfThreeR(arr, index);
  }
  return sum;
}
// console.log(getSumMultipleOfThreeR([1, 2, 3, 4, 5, 6]));

function getSumPositiveOddR(arr, index) {
  index = index || 0;
  let sum = 0;

  if (arr[index] > 0 && arr[index] % 2 === 0) {
    sum = arr[index];
  }

  if (++index < arr.length) {
    sum += getSumPositiveOddR(arr, index);
  }

  return sum;
}
// console.log(getSumPositiveOddR([1, 2, 3, 4, 1]));

// =============Tsak 10
function counterZeroItemsOfArrR(arr, index) {
  index = index || 0;
  let counter = 0;

  if (arr[index] === 0) {
    counter++;
  }

  if (++index < arr.length) {
    counter += counterZeroItemsOfArrR(arr, index);
  }

  return counter;
}
// console.log(counterZeroItemsOfArrR([1, 1, 0, 0]));

function counterNegativeItemsOfArrR(arr, index) {
  index = index || 0;
  let counter = 0;

  if (arr[index] < 0) {
    counter++;
  }

  if (++index < arr.length) {
    counter += counterNegativeItemsOfArrR(arr, index);
  }

  return counter;
}
// console.log(counterNegativeItemsOfArrR([0, -2, -3]));

function counterPrimeNumbersOfArrR(arr, index) {
  index = index || 0;
  let counter = 0;

  function isPrime(num) {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return num > 1;
  }

  if (isPrime(arr[index])) {
    counter++;
  }

  if (++index < arr.length) {
    counter += counterPrimeNumbersOfArrR(arr, index);
  }

  return counter;
}
// console.log(counterPrimeNumbersOfArrR([1, 2, 3, 4, 5]));

// =============Tsak 11
function decimalToBinaryR(num) {
  if (num === 0) {
    return 0;
  } else {
    return (num % 2) + 10 * decimalToBinaryR(Math.floor(num / 2));
  }
}
// console.log(decimalToBinaryR(5));

function binaryToDecimalR(binary, index) {
  index = index || 0;
  const binaryAsArr = binary.split("").reverse();
  let res = 0;

  if (binaryAsArr[index]) {
    res += Number(binaryAsArr[index]) * 2 ** index;
  }

  if (++index < binary.length) {
    res += binaryToDecimalR(binary, index);
  }

  return res;
}
// console.log(binaryToDecimalR("1100")); //12

// =============Tsak 12
const matrixTest = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function getSumNumOfMatrix(matrix, callback, index1, index2) {
  index1 = index1 || 0;
  index2 = index2 || 0;
  let sum = 0;

  if (index1 < matrix.length) {
    if (index2 < matrix[index1].length) {
      let num = matrix[index1][index2];

      if (callback(num)) {
        sum += num;
      }

      return (sum += getSumNumOfMatrix(matrix, callback, index1, ++index2));
    }

    return (sum += getSumNumOfMatrix(matrix, callback, ++index1));
  }

  return sum;
}

// console.log(getSumNumOfMatrix(matrixTest, (num) => num % 2 === 0)); //кратные двум
// console.log(getSumNumOfMatrix(matrixTest, (num) => num % 3 === 0)); //кратные трем
// console.log(getSumNumOfMatrix(matrixTest, (num) => num > 0 && num % 2 !== 0)); //положительные и нечетные

function counterNumOfMatrix(matrix, callback, isFlag, index1, index2) {
  isFlag = isFlag || false;
  index1 = index1 || 0;
  index2 = index2 || 0;
  let counter = 0;

  if (index1 < matrix.length) {
    if (index2 < matrix[index1].length) {
      let isPrime = true;
      let num = matrix[index1][index2];

      if (isFlag) {
        (function isPrimeNum(index3) {
          index3 = index3 || 2;

          if (index3 < num) {
            if (num % index3 === 0) {
              isPrime = false;
              return;
            }
            isPrimeNum(++index3);
          }
        })();
      }

      if (callback(num, isPrime)) {
        counter++;
      }

      return (
        counter + counterNumOfMatrix(matrix, callback, isFlag, index1, ++index2)
      );
    }

    return counter + counterNumOfMatrix(matrix, callback, isFlag, ++index1);
  }
  return counter;
}
// console.log(counterNumOfMatrix(matrixTest, (num) => num === 0)); // нулевые
// console.log(counterNumOfMatrix(matrixTest, (num) => num < 0)); // отрицательные
// console.log(counterNumOfMatrix(matrixTest, (num) => num > 0)); // положительные
// console.log(
//   counterNumOfMatrix(matrixTest, (num, isPrime) => num > 1 && isPrime, true)
// ); // простые числа
