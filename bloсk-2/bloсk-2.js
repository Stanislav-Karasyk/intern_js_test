//========= для проверки start =========
function greetGuest(greeting) {
  console.log(`${greeting}, ${this.username}.`);
}

const mango = {
  username: "Манго",
};

const poly = {
  username: "Поли",
};

const testArr = [1, 2, 3, 4, 5];
//========= для проверки and =========
Function.prototype.myBind = function (context, ...args) {
  const fn = this;

  return function (...args2) {
    const id = Symbol();

    context[id] = fn;

    const res = context[id](...args, ...args2);

    delete context[id];

    return res;
  };
};
// console.log(greetGuest.bind(mango, "Добро пожаловать")());
// console.log(greetGuest.myBind(poly, "Добро пожаловать")());

Function.prototype.myCall = function (context, ...args) {
  const fn = this;

  return (function (...args2) {
    const id = Symbol();

    context[id] = fn;

    const res = context[id](...args, ...args2);

    delete context[id];

    return res;
  })();
};
// console.log(greetGuest.call(mango, "Добро пожаловать"));
// console.log(greetGuest.myCall(poly, "Добро пожаловать"));
Array.prototype.myForEach = function (callback) {
  let arr = this;

  for (let index = 0; index < arr.length; index++) {
    callback(arr[index], index, arr);
  }
};
// testArr.forEach((element) => console.log(element * 2));
// testArr.myForEach((element) => console.log(element * 2));

Array.prototype.myMap = function (callback) {
  let arr = this;
  let resArr = [];

  for (let index = 0; index < arr.length; index++) {
    resArr.push(callback(arr[index], index, arr));
  }
  return resArr;
};
// console.log(testArr.map((element) => element * 2));
// console.log(testArr.myMap((element) => element * 2));

Array.prototype.myFilter = function (callback) {
  let arr = this;
  let resArr = [];

  for (let index = 0; index < arr.length; index++) {
    if (callback(arr[index], index, arr)) {
      resArr.push(arr[index]);
    }

    return resArr;
  }

  return resArr;
};
// console.log(testArr.filter((element) => element % 2 === 0));
// console.log(testArr.myFilter((element) => element % 2 === 0));

Array.prototype.myReduce = function (callback, initialValue) {
  let arr = this;
  let accumulator = initialValue ?? arr[0];

  let previousValue = accumulator === initialValue ? arr[0] : arr[1];

  for (let index = 0; index < arr.length; index++) {
    accumulator = callback(accumulator, previousValue, index, arr);

    previousValue = arr[index + 1];
  }

  return accumulator;
};
console.log(
  testArr.reduce((previousValue, element) => {
    return previousValue + element;
  }, 0)
);
console.log(
  testArr.myReduce((previousValue, element) => {
    return previousValue + element;
  }, 0)
);

// =================== use iterator
let iterableObj = {
  firstNum: 0,
  secondNum: 1,
  nextNum: 0,
  numIterations: 10,

  [Symbol.iterator]() {
    return this;
  },

  next() {
    this.numIterations--;

    if (this.numIterations >= 0) {
      this.nextNum = this.firstNum + this.secondNum;
      this.firstNum = this.secondNum;
      this.secondNum = this.nextNum;

      return { value: this.firstNum, done: false };
    }

    return { done: true };
  },
};

// for (let numFibonacci of iterableObj) {
//   console.log(numFibonacci);
// }

// =================== use generator
let iterableObj2 = {
  firstNum: 0,
  secondNum: 1,
  nextNum: 0,
  numIterations: 10,

  *[Symbol.iterator]() {
    for (let i = 0; i < this.numIterations; i++) {
      yield this.nextNum;

      this.nextNum = this.firstNum + this.secondNum;
      this.firstNum = this.secondNum;
      this.secondNum = this.nextNum;
    }
  },
};

// for (let numFibonacci of iterableObj2) {
//   console.log(numFibonacci);
// }
