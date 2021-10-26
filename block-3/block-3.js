// =============Tsak 1
class Node {
  constructor() {
    this.value = null;
    this.left = null;
    this.right = null;
  }

  insert(value, node) {
    node = node || this;

    if (node.value === null) {
      node.value = value;
    }

    if (value > node.value) {
      if (node.right === null) {
        node.right = new Node();
      }

      return this.insert(value, node.right);
    }

    if (value < node.value) {
      if (node.left === null) {
        node.left = new Node();
      }

      return this.insert(value, node.left);
    }
  }

  search(value, node) {
    node = node || this;

    if (value === node.value) {
      return node;
    }

    if (value > node.value) {
      if (node.right === null) {
        return null;
      }
      return this.search(value, node.right);
    }

    if (value < node.value) {
      if (node.left === null) {
        return null;
      }

      return this.search(value, node.left);
    }
  }

  searchMinValue(node) {
    node = node || this;

    if (node.left === null) {
      return node;
    }

    return this.searchMinValue(node.left);
  }

  delete(value, node) {
    node = node || this;

    if (node === null) {
      return null;
    } else if (value < node.value) {
      node.left = this.delete(value, node.left);

      return node;
    } else if (value > node.value) {
      node.right = this.delete(value, node.right);

      return node;
    } else {
      if (node.left === null && node.right === null) {
        node = null;

        return node;
      }

      if (node.left === null) {
        node = node.right;

        return node;
      } else if (node.right === null) {
        node = node.left;

        return node;
      }

      let newNode = this.searchMinValue(node.right);
      node.value = newNode.value;
      node.right = this.delete(newNode.value, node.right);

      return node;
    }
  }
}
const node = new Node();
const arrValues = [10, 12, 9, 11, 5, 13, 58, 99, 2];
arrValues.forEach((elem) => node.insert(elem));

// console.log("search >>> ", node.search(13));
// console.log("search >>> ", node.searchMinValue(node.right));
// console.log("delete >>> ", node.delete(5));
// console.log("search after del>>> ", node.search(9));
// console.log(node);

// =============Tsak 2
Array.prototype.mySortBubble = function (callback) {
  let arr = this;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (callback(arr[j], arr[j + 1])) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
};
// console.log(arrValues.mySortBubble((num1, num2) => num1 > num2));
// console.log(arrValues.mySortBubble((num1, num2) => num1 < num2));

Array.prototype.mySortSelection = function (callback) {
  let arr = this;

  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;

    for (let j = i; j < arr.length; j++) {
      if (callback(arr[j], arr[minIndex])) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }

  return arr;
};
// console.log(arrValues.mySortSelection((num1, num2) => num1 > num2));
// console.log(arrValues.mySortSelection((num1, num2) => num1 < num2));
