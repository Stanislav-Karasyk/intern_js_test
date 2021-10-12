// =============Tsak 11

function decimalToBinary(num) {
  let binaryArr = [];
  let tempNum = num;

  while (tempNum >= 1) {
    binaryArr.unshift(Math.floor(tempNum % 2));
    tempNum = tempNum / 2;
  }

  return binaryArr;
}

// console.log(decimalToBinary(5));

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
  [7, 8, 9],
];

function getSumMultipleOfTwo(matrix) {
  let sum = 0;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] % 2 === 0) {
        sum += matrix[i][j];
      }
    }
  }

  return sum;
}
// console.log(getSumMultipleOfTwo(matrixTest));

function getSumMultipleOfThree(matrix) {
  let sum = 0;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] % 3 === 0) {
        sum += matrix[i][j];
      }
    }
  }

  return sum;
}
// console.log(getSumMultipleOfThree(matrixTest));

function getSumPositiveOdd(matrix) {
  let sum = 0;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] > 0 && matrix[i][j] % 2 !== 0) {
        sum += matrix[i][j];
      }
    }
  }

  return sum;
}
// console.log(getSumPositiveOdd(matrixTest));

function counterZeroItemsOfMatrix(matrix) {
  let counter = 0;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        counter++;
      }
    }
  }

  return counter;
}
// console.log(counterZeroItemsOfMatrix(matrixTest));

function counterNegativeItemsOfMatrix(matrix) {
  let counter = 0;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] < 0) {
        counter++;
      }
    }
  }

  return counter;
}
// console.log(counterNegativeItemsOfMatrix(matrixTest));

function counterPositiveItemsOfMatrix(matrix) {
  let counter = 0;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] > 0) {
        counter++;
      }
    }
  }

  return counter;
}
// console.log(counterPositiveItemsOfMatrix(matrixTest));

function counterPrimeNumbersOfMatrix(matrix) {
  let counter = 0;

  function isPrime(num) {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }

    return num > 1;
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (isPrime(matrix[i][j])) {
        counter++;
      }
    }
  }

  return counter;
}
// console.log(counterPrimeNumbersOfMatrix(matrixTest));

// =============Tsak 13

function getSumNumMinToMaxAll(min, max) {
  let sum = 0;

  for (let i = min; i <= max; i++) {
    sum += i;
  }

  return sum;
}
// console.log(getSumNumMinToMaxAll(10, 15));

function getSumNumMinToMaxMultOfThree(min, max) {
  let sum = 0;

  for (let i = min; i <= max; i++) {
    if (i % 3 === 0) {
      sum += i;
    }
  }
  return sum;
}
// console.log(getSumNumMinToMaxMultOfThree(10, 15));

function getSumNumMinToMaxPositive(min, max) {
  let sum = 0;

  for (let i = min; i <= max; i++) {
    if (i > 0) {
      sum += i;
    }
  }
  return sum;
}
// console.log(getSumNumMinToMaxPositive(-3, 3));

// =============Tsak 14

function getMeanEvenOfArr(arr) {
  let counterEven = 0;
  let sumEven = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      counterEven++;
      sumEven += arr[i];
    }
  }
  return sumEven / counterEven;
}
// console.log(getMeanEvenOfArr([1, 2, 3, 4]));

function getMeanOddOfArr(arr) {
  let counterOdd = 0;
  let sumOdd = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      counterOdd++;
      sumOdd += arr[i];
    }
  }
  return sumOdd / counterOdd;
}
// console.log(getMeanOddOfArr([1, 2, 3, 4]));

function getMeanEvenOfMatrix(matrix) {
  let counterEven = 0;
  let sumEven = 0;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] % 2 === 0) {
        counterEven++;
        sumEven += matrix[i][j];
      }
    }
  }

  return sumEven / counterEven;
}
// console.log(getMeanEvenOfMatrix(matrixTest));

function getMeanOddOfMatrix(matrix) {
  let counterOdd = 0;
  let sumOdd = 0;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] % 2 !== 0) {
        counterOdd++;
        sumOdd += matrix[i][j];
      }
    }
  }

  return sumOdd / counterOdd;
}
// console.log(getMeanOddOfMatrix(matrixTest));

// =============Tsak 15

const matrixForTranspose = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function getTransposeMatrix(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < i; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }
  return matrix;
}
// console.log(getTransposeMatrix(matrixForTranspose));
