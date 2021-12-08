// ============Task 1
function isAnagram(word1, word2, index1, counter1, counter2, index2) {
  index1 = index1 || 0;
  index2 = index2 || 0;

  if (word1.length !== word2.length) {
    return false;
  }

  if (index1 < word1.length) {
    let letter1 = word1[index1];
    counter1 = counter1 || 0;
    counter2 = counter2 || 0;

    if (index2 < word1.length) {
      let letter2 = word1[index2];
      if (letter1 === letter2) {
        counter1++;
      }

      letter2 = word2[index2];

      if (letter1 === letter2) {
        counter2++;
      }

      return isAnagram(word1, word2, index1, counter1, counter2, ++index2);
    }

    if (counter1 !== counter2) {
      return false;
    }

    return isAnagram(word1, word2, ++index1, counter1, counter2);
  }

  return true;
}
// console.log(isAnagram("нора", "рано"));

// =============Tsak 3
function counterDigits(number, res, index1, index2) {
  const numAsArr = number.toString();
  res = res || {};
  index1 = index1 || 0;
  index2 = index2 || 0;

  if (index1 < numAsArr.length) {
    res[numAsArr[index1]] = 0;

    return counterDigits(number, res, ++index1);
  }

  if (index2 < numAsArr.length) {
    res[numAsArr[index2]]++;

    return counterDigits(number, res, index1, ++index2);
  }

  return res;
}
// console.log(counterDigits(1223334444));

// =============Tsak 4
function uniqueWordCount(sentence, uniqueWords, index1, index2, counter) {
  const sentenceAsArr = sentence.split(" ");
  uniqueWords = uniqueWords || [];
  index1 = index1 || 0;
  index2 = index2 || 0;
  counter = counter || 0;
  
  if (index1 < sentenceAsArr.length) {
    const word = sentenceAsArr[index1];

    if (index2 < sentenceAsArr.length) {
      if (word === sentenceAsArr[index2]) {
        counter++;
      }

      return uniqueWordCount(sentence, uniqueWords, index1, ++index2, counter);
    }

    if (counter === 1) {
      uniqueWords.push(word);
    }
    return uniqueWordCount(sentence, uniqueWords, ++index1);
  }

  return uniqueWords.length;
}
// console.log(uniqueWordCount("a b c c p"));

// ============Task 5
function counterWordsInSentence(sentence, res, index1, index2) {
  res = res || {};
  index1 = index1 || 0;
  index2 = index2 || 0;

  const sentenceAsArr = sentence.toLowerCase().split(" ");

  if (index1 < sentenceAsArr.length) {
    res[sentenceAsArr[index1]] = 0;

    return counterWordsInSentence(sentence, res, ++index1);
  }

  if (index2 < sentenceAsArr.length) {
    res[sentenceAsArr[index2]]++;

    return counterWordsInSentence(sentence, res, index1, ++index2);
  }

  return res;
}
// console.log(counterWordsInSentence("you hello you how hello are you you you"));

// ============Task 6
function fibonacci(num, resArr, index) {
  index = index || 0;
  resArr = resArr || [0, 1];

  if (index < num) {
    let sum = resArr[index] + resArr[index + 1];
    resArr.push(sum);

    return fibonacci(num, resArr, ++index);
  }

  return resArr.slice(0, -2);
}
// console.log(fibonacci(5));

// ============Task 8
function getFactorial(num) {
  let res = 1;

  if (num <= 1) {
    return res;
  }

  return (res = num * getFactorial(num - 1));
}
// console.log(getFactorial(7));

// =============Tsak 9
function getSumNumOfArr(arr, callback, index) {
  index = index || 0;
  let sum = 0;
  let num = arr[index];

  if (callback(num)) {
    sum = arr[index];
  }

  if (++index < arr.length) {
    sum += getSumNumOfArr(arr, callback, index);
  }

  return sum;
}
// console.log(getSumNumOfArr([1, 2, 3, 4, 3], (num) => num % 2 === 0)); // кратные двум
// console.log(getSumNumOfArr([1, 2, 3, 4, 5, 6], (num) => num % 3 === 0)); // кратные трем
// console.log(getSumNumOfArr([1, -2, 3, 4], (num) => num > 0 && num % 2 === 0)); // положительные и нечетные

// =============Tsak 10
function counterItemsOfArr(arr, callback, isPrime, index1) {
  isPrime = isPrime || false;
  index1 = index1 || 0;
  let counter = 0;

  if (index1 < arr.length) {
    isPrime = true;
    let num = arr[index1];

    if (isPrime) {
      (function isPrimeNum(index2) {
        index2 = index2 || 2;

        if (index2 < num) {
          if (num % index2 === 0) {
            isPrime = false;
            return;
          }
          isPrimeNum(++index2);
        }
      })();
    }

    if (callback(num, isPrime)) {
      counter++;
    }

    return counter + counterItemsOfArr(arr, callback, isPrime, ++index1);
  }

  return counter;
}
// console.log(counterItemsOfArr([1, 1, 0, 0], (num) => num === 0)); // нулевые
// console.log(counterItemsOfArr([1, -1, 1, -3], (num) => num < 0)); // отрицательные
// console.log(counterItemsOfArr([0, -1, 1, -3], (num) => num >= 0)); // положительные
// console.log(
//   counterItemsOfArr([2, 3, 4], (num, isPrime) => num > 1 && isPrime, true)
// ); // простые числа

// =============Tsak 11
function decimalToBinary(num) {
  if (num === 0) {
    return 0;
  } else {
    return (num % 2) + 10 * decimalToBinary(Math.floor(num / 2));
  }
}
// console.log(decimalToBinary(5));

function binaryToDecimal(binary, index) {
  index = index || 0;
  const binaryAsArr = binary.split("").reverse();
  let res = 0;

  if (binaryAsArr[index]) {
    res += Number(binaryAsArr[index]) * 2 ** index;
  }

  if (++index < binary.length) {
    res += binaryToDecimal(binary, index);
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

function counterNumOfMatrix(matrix, callback, isPrime, index1, index2) {
  isPrime = isPrime || false;
  index1 = index1 || 0;
  index2 = index2 || 0;
  let counter = 0;

  if (index1 < matrix.length) {
    if (index2 < matrix[index1].length) {
      isPrime = true;
      let num = matrix[index1][index2];

      if (isPrime) {
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
        counter +
        counterNumOfMatrix(matrix, callback, isPrime, index1, ++index2)
      );
    }

    return counter + counterNumOfMatrix(matrix, callback, isPrime, ++index1);
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
function getSumNumMinToMax(min, max, callback, index) {
  index = index || min;
  let sum = 0;

  if (index <= max) {
    if (callback(index)) {
      sum += index;
    }

    return sum + getSumNumMinToMax(min, max, callback, ++index);
  }

  return sum;
}
// console.log(getSumNumMinToMax(10, 20, () => true)); // все
// console.log(getSumNumMinToMax(10, 20, (num) => num % 3 === 0)); // кратны 3
// console.log(getSumNumMinToMax(-10, 20, (num) => num > 0)); // положительные

// =============Tsak 14
function getMeanOfArr(arr, callback, index, sum, counter) {
  index = index || 0;
  sum = sum || 0;
  counter = counter || 0;
  let num = arr[index];

  if (callback(num)) {
    sum += num;
    counter++;
  }

  if (++index < arr.length) {
    return getMeanOfArr(arr, callback, index, sum, counter);
  }

  return sum / counter;
}
// console.log(getMeanOfArr([1, 2, 3, 4], (num) => num % 2 === 0)); // четные
// console.log(getMeanOfArr([1, 2, 3, 4], (num) => num % 2 !== 0)); // не четные

function getMeanOfMatrix(matrix, callback, sum, counter, index1, index2) {
  index1 = index1 || 0;
  index2 = index2 || 0;
  sum = sum || 0;
  counter = counter || 0;

  if (index1 < matrix.length) {
    if (index2 < matrix[index1].length) {
      let num = matrix[index1][index2];

      if (callback(num)) {
        sum += num;
        counter++;
      }

      return getMeanOfMatrix(matrix, callback, sum, counter, index1, ++index2);
    }

    return getMeanOfMatrix(matrix, callback, sum, counter, ++index1);
  }

  return sum / counter;
}
// console.log(getMeanOfMatrix(matrixTest, (num) => num % 2 === 0)); // четные
// console.log(getMeanOfMatrix(matrixTest, (num) => num % 2 !== 0)); // не четные

// =============Tsak 15
function getTransposeMatrix(matrix, matrixTransp, index1, index2, index3) {
  index1 = index1 || 0;
  index2 = index2 || 0;
  index3 = index3 || 0;
  matrixTransp = matrixTransp || [];

  if (index1 < matrix.length) {
    matrixTransp.push([]);

    return getTransposeMatrix(matrix, matrixTransp, ++index1);
  }

  if (index2 < matrix.length && index1 === matrix.length) {
    if (index3 < matrix[index2].length) {
      matrixTransp[index3].push(matrix[index2][index3]);

      return getTransposeMatrix(matrix, matrixTransp, index1, index2, ++index3);
    }
    return getTransposeMatrix(matrix, matrixTransp, index1, ++index2);
  }

  return matrixTransp;
}
// console.log(getTransposeMatrix(matrixTest));

// =============Tsak 16
const matrixTest1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 0],
];
const matrixTest2 = [
  [1, 1, 1],
  [1, 1, 1],
  [1, 1, 1],
];

function getSumTwoMatrix(
  matrix1,
  matrix2,
  resultMatrix,
  index1,
  index2,
  index3
) {
  index1 = index1 || 0;
  index2 = index2 || 0;
  index3 = index3 || 0;
  resultMatrix = resultMatrix || [];

  if (index1 < matrix1.length) {
    resultMatrix.push([]);

    return getSumTwoMatrix(matrix1, matrix2, resultMatrix, ++index1);
  }

  if (index2 < matrix1.length) {
    if (index3 < matrix1[index2].length) {
      const tepm = matrix1[index2][index3] + matrix2[index2][index3];

      resultMatrix[index2].push(tepm);

      return getSumTwoMatrix(
        matrix1,
        matrix2,
        resultMatrix,
        index1,
        index2,
        ++index3
      );
    }
    return getSumTwoMatrix(matrix1, matrix2, resultMatrix, index1, ++index2);
  }

  return resultMatrix;
}
// console.log(getSumTwoMatrix(matrixTest1, matrixTest2));

// =============Tsak 17
function deleteLineWithZero(matrix, resultMatrix, indexArr, index1, index2) {
  index1 = index1 || 0;
  index2 = index2 || 0;
  resultMatrix = resultMatrix || matrix;
  indexArr = indexArr || [];

  if (index1 < matrix.length) {
    if (matrix[index1].includes(0)) {
      const index = index1;

      if (!indexArr.includes(index)) {
        indexArr.unshift(index);
      }
    }
    return deleteLineWithZero(matrix, resultMatrix, indexArr, ++index1);
  }

  if (index2 < indexArr.length) {
    resultMatrix.splice(indexArr[index2], 1);

    return deleteLineWithZero(matrix, resultMatrix, indexArr, index1, ++index2);
  }

  return resultMatrix;
}
// console.log(deleteLineWithZero(matrixTest1));

function deleteСolumnWithZero(
  matrix,
  resultMatrix,
  indexArr,
  index1,
  index2,
  index3,
  index4
) {
  index1 = index1 || 0;
  index2 = index2 || 0;
  index3 = index3 || 0;
  index4 = index4 || 0;
  resultMatrix = resultMatrix || matrix;
  indexArr = indexArr || [];

  if (index1 < matrix.length) {
    if (index2 < matrix[index1].length) {
      if (matrix[index2][index1] === 0) {
        const index = index1;

        if (!indexArr.includes(index)) {
          indexArr.unshift(index);
        }
      }
      return deleteСolumnWithZero(
        matrix,
        resultMatrix,
        indexArr,
        index1,
        ++index2
      );
    }
    return deleteСolumnWithZero(matrix, resultMatrix, indexArr, ++index1);
  }

  if (index3 < indexArr.length) {
    if (index4 < matrix.length) {
      resultMatrix[index4].splice(indexArr[index3], 1);

      return deleteСolumnWithZero(
        matrix,
        resultMatrix,
        indexArr,
        index1,
        index2,
        index3,
        ++index4
      );
    }
    return deleteСolumnWithZero(
      matrix,
      resultMatrix,
      indexArr,
      index1,
      index2,
      ++index3
    );
  }

  return resultMatrix;
}
// console.log(deleteСolumnWithZero(matrixTest1));
