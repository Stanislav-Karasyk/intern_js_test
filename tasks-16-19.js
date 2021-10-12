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

function getSumTwoMatrix(matrix1, matrix2) {
  let resultMatrix = [];

  for (let i = 0; i < matrix1.length; i++) {
    resultMatrix.push([]);

    for (let j = 0; j < matrix1[i].length; j++) {
      resultMatrix[i][j] = matrix1[i][j] + matrix2[i][j];
    }
  }

  return resultMatrix;
}
// console.log(getSumTwoMatrix(matrixTest1, matrixTest2));

// =============Tsak 17

function deleteLineWithZero(matrix) {
  let resultMatrix = [];

  for (let i = 0; i < matrix.length; i++) {
    if (!matrix[i].includes(0)) {
      resultMatrix.push(matrix[i]);
    }
  }

  return resultMatrix;
}
// console.log(deleteLineWithZero(matrixTest1));

function deleteСolumnWithZero(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        let item = j;
        for (let i = 0; i < matrix.length; i++) {
          matrix[i].splice(item, 1);
        }
      }
    }
  }
  return matrix;
}
// console.log(deleteСolumnWithZero(matrixTest1));
