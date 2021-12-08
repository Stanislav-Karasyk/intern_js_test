// ============Task 1
const isAnagramMemo = (() => {
  let memo = {};

  return (word1, word2, index1, counter1, counter2, index2) => {
    index1 = index1 || 0;
    index2 = index2 || 0;
    counter1 = counter1 || 0;
    counter2 = counter2 || 0;
    let resMemo = memo[(word1, word2)];
    let res = false;
    
    if (resMemo === undefined) {
      if (word1.length !== word2.length) {
        memo[(word1, word2)] = res;
        
        return res;
      }

      if (index1 < word1.length) {
        let letter1 = word1[index1];

        if (index2 < word1.length) {
          let letter2 = word1[index2];

          if (letter1 === letter2) {
            counter1++;
          }

          letter2 = word2[index2];

          if (letter1 === letter2) {
            counter2++;
          }

          return isAnagramMemo(
            word1,
            word2,
            index1,
            counter1,
            counter2,
            ++index2
          );
        }

        if (counter1 !== counter2) {
          res = false;
          memo[(word1, word2)] = res;

          return res;
        }

        return isAnagramMemo(word1, word2, ++index1, counter1, counter2);
      }

      res = true;
      memo[(word1, word2)] = res;

      return res;
    }
    return resMemo;
  };
})();
// console.log(isAnagramMemo("нора", "рано"));

// =============Tsak 3
const counterDigitsMemo = (() => {
  let memo = {};

  return (number, res, index1, index2) => {
    const numAsArr = number.toString();
    res = res || {};
    index1 = index1 || 0;
    index2 = index2 || 0;
    let resMemo = memo[numAsArr];

    if (resMemo === undefined) {
      if (index1 < numAsArr.length) {
        res[numAsArr[index1]] = 0;

        return counterDigitsMemo(number, res, ++index1);
      }

      if (index2 < numAsArr.length) {
        res[numAsArr[index2]]++;

        return counterDigitsMemo(number, res, index1, ++index2);
      }
      memo[numAsArr] = res;
      return res;
    }
    return resMemo;
  };
})();
// console.log(counterDigitsMemo(1223334444));

// ============Task 4
const uniqueWordCountMemo = (() => {
  let memo = {};

  return (sentence, uniqueWords, index1, index2, counter) => {
    const sentenceAsArr = sentence.split(" ");
    uniqueWords = uniqueWords || [];
    index1 = index1 || 0;
    index2 = index2 || 0;
    counter = counter || 0;

    let resMemo = memo[sentenceAsArr];
    if (resMemo === undefined) {
      if (index1 < sentenceAsArr.length) {
        const word = sentenceAsArr[index1];

        if (index2 < sentenceAsArr.length) {
          if (word === sentenceAsArr[index2]) {
            counter++;
          }

          return uniqueWordCountMemo(
            sentence,
            uniqueWords,
            index1,
            ++index2,
            counter
          );
        }

        if (counter === 1) {
          uniqueWords.push(word);
        }
        return uniqueWordCountMemo(sentence, uniqueWords, ++index1);
      }

      resMemo = uniqueWords.length;
      memo[sentenceAsArr] = resMemo;

      return uniqueWords.length;
    }

    return resMemo;
  };
})();
console.log(uniqueWordCountMemo("a b c c p"));

// ============Task 5
const counterWordsInSentenceMemo = (() => {
  let memo = {};

  return (sentence, res, index1, index2) => {
    const sentenceAsArr = sentence.toLowerCase().split(" ");
    let resMemo = memo[sentenceAsArr];

    if (resMemo === undefined) {
      res = res || {};
      index1 = index1 || 0;
      index2 = index2 || 0;

      if (index1 < sentenceAsArr.length) {
        res[sentenceAsArr[index1]] = 0;

        return counterWordsInSentenceMemo(sentence, res, ++index1);
      }

      if (index2 < sentenceAsArr.length) {
        const word = sentenceAsArr[index2];

        if (word in memo) {
          return word;
        }
        res[word]++;

        return counterWordsInSentenceMemo(sentence, res, index1, ++index2);
      }

      memo[sentenceAsArr] = res;
      return res;
    }

    return resMemo;
  };
})();
console.log(counterWordsInSentenceMemo("you hello you how hello are you"));

// ============Task 6
const fibonacciMemo = (() => {
  let memo = {};

  return (num, res, index) => {
    let resMemo = memo[num];

    if (resMemo === undefined) {
      index = index || 0;
      res = res || [0, 1];

      if (index < num) {
        let sum = res[index] + res[index + 1];
        res.push(sum);

        resMemo = fibonacciMemo(num, res, ++index);
        memo[num] = resMemo;
      }

      return res.slice(0, -2);
    }

    return resMemo;
  };
})();
// console.log(fibonacciMemo(5));

// ============Task 8
const getFactorialMemo = (() => {
  let memo = {};

  return (num) => {
    let res = memo[num];

    if (num === 0) {
      return 1;
    }

    if (res === undefined) {
      res = getFactorialMemo(num - 1);
      memo[num] = res;
    }

    return num * res;
  };
})();
// console.log(getFactorialMemo(5));

// =============Tsak 11
const decimalToBinaryMemo = (() => {
  let memo = {};

  return (num) => {
    let resMemo = memo[num];
    let res = 0;

    if (resMemo === undefined) {
      if (num === 0) {
        return 0;
      } else {
        resMemo = (num % 2) + 10 * decimalToBinaryMemo(Math.floor(num / 2));
        memo[num] = resMemo;

        res = resMemo;

        return res;
      }
    }
    return resMemo;
  };
})();
// console.log(decimalToBinaryMemo(5));

const binaryToDecimalMemo = (() => {
  let memo = {};

  return (binary, index) => {
    index = index || 0;
    const binaryAsArr = binary.split("").reverse();
    let resMemo = memo[binary];
    let res = 0;

    if (resMemo === undefined) {
      if (binaryAsArr[index]) {
        res += Number(binaryAsArr[index]) * 2 ** index;
      }

      if (++index < binary.length) {
        res += binaryToDecimalMemo(binary, index);
      }

      resMemo = res;
      memo[binary] = resMemo;

      return res;
    }

    return resMemo;
  };
})();
// console.log(binaryToDecimalMemo("1100")); //12

// =============Tsak 15
const matrixTest = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const getTransposeMatrixMemo = (() => {
  let memo = {};

  return (matrix, matrixTransp, index1, index2, index3) => {
    index1 = index1 || 0;
    index2 = index2 || 0;
    index3 = index3 || 0;
    matrixTransp = matrixTransp || [];
    let resMemo = memo[matrix];

    if (resMemo === undefined) {
      if (index1 < matrix.length) {
        matrixTransp.push([]);

        return getTransposeMatrixMemo(matrix, matrixTransp, ++index1);
      }

      if (index2 < matrix.length && index1 === matrix.length) {
        if (index3 < matrix[index2].length) {
          matrixTransp[index3].push(matrix[index2][index3]);

          return getTransposeMatrixMemo(
            matrix,
            matrixTransp,
            index1,
            index2,
            ++index3
          );
        }
        return getTransposeMatrixMemo(matrix, matrixTransp, index1, ++index2);
      }

      resMemo = matrixTransp;
      memo[matrix] = resMemo;

      return matrixTransp;
    }
    return resMemo;
  };
})();
// console.log(getTransposeMatrixMemo(matrixTest));

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

const getSumTwoMatrixMemo = (() => {
  let memo = {};

  return (matrix1, matrix2, resultMatrix, index1, index2, index3) => {
    index1 = index1 || 0;
    index2 = index2 || 0;
    index3 = index3 || 0;
    resultMatrix = resultMatrix || [];
    let resMemo = memo[(matrix1, matrix2)];

    if (resMemo === undefined) {
      if (index1 < matrix1.length) {
        resultMatrix.push([]);

        return getSumTwoMatrixMemo(matrix1, matrix2, resultMatrix, ++index1);
      }

      if (index2 < matrix1.length) {
        if (index3 < matrix1[index2].length) {
          const tepm = matrix1[index2][index3] + matrix2[index2][index3];

          resultMatrix[index2].push(tepm);

          return getSumTwoMatrixMemo(
            matrix1,
            matrix2,
            resultMatrix,
            index1,
            index2,
            ++index3
          );
        }
        return getSumTwoMatrixMemo(
          matrix1,
          matrix2,
          resultMatrix,
          index1,
          ++index2
        );
      }
      resMemo = resultMatrix;
      memo[(matrix1, matrix2)] = resMemo;

      return resultMatrix;
    }
    return resMemo;
  };
})();
// console.log(getSumTwoMatrixMemo(matrixTest1, matrixTest2));

// =============Tsak 17
const deleteLineWithZeroMemo = (() => {
  let memo = {};

  return (matrix, resultMatrix, indexArr, index1, index2) => {
    index1 = index1 || 0;
    index2 = index2 || 0;
    resultMatrix = resultMatrix || matrix;
    indexArr = indexArr || [];
    let resMemo = memo[(matrix, 0)];

    if (resMemo === undefined) {
      if (index1 < matrix.length) {
        if (matrix[index1].includes(0)) {
          const index = index1;

          if (!indexArr.includes(index)) {
            indexArr.unshift(index);
          }
        }
        return deleteLineWithZeroMemo(matrix, resultMatrix, indexArr, ++index1);
      }

      if (index2 < indexArr.length) {
        resultMatrix.splice(indexArr[index2], 1);

        return deleteLineWithZeroMemo(
          matrix,
          resultMatrix,
          indexArr,
          index1,
          ++index2
        );
      }
      resMemo = resultMatrix;
      memo[(matrix, 0)] = resMemo;

      return resultMatrix;
    }
    return resMemo;
  };
})();
// console.log(deleteLineWithZeroMemo(matrixTest1));

const deleteСolumnWithZeroMemo = (() => {
  let memo = {};

  return (matrix, resultMatrix, indexArr, index1, index2, index3, index4) => {
    index1 = index1 || 0;
    index2 = index2 || 0;
    index3 = index3 || 0;
    index4 = index4 || 0;
    resultMatrix = resultMatrix || matrix;
    indexArr = indexArr || [];
    let resMemo = memo[(matrix, 0)];

    if (resMemo === undefined) {
      if (index1 < matrix.length) {
        if (index2 < matrix[index1].length) {
          if (matrix[index2][index1] === 0) {
            const index = index1;

            if (!indexArr.includes(index)) {
              indexArr.unshift(index);
            }
          }
          return deleteСolumnWithZeroMemo(
            matrix,
            resultMatrix,
            indexArr,
            index1,
            ++index2
          );
        }
        return deleteСolumnWithZeroMemo(
          matrix,
          resultMatrix,
          indexArr,
          ++index1
        );
      }

      if (index3 < indexArr.length) {
        if (index4 < matrix.length) {
          resultMatrix[index4].splice(indexArr[index3], 1);

          return deleteСolumnWithZeroMemo(
            matrix,
            resultMatrix,
            indexArr,
            index1,
            index2,
            index3,
            ++index4
          );
        }
        return deleteСolumnWithZeroMemo(
          matrix,
          resultMatrix,
          indexArr,
          index1,
          index2,
          ++index3
        );
      }
      resMemo = resultMatrix;
      memo[(matrix, 0)] = resMemo;

      return resultMatrix;
    }
    return resMemo;
  };
})();
// console.log(deleteСolumnWithZeroMemo(matrixTest1));
