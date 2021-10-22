// ============Task 1
function isAnagram(word1, word2) {
  if (word1.length !== word2.length) {
    return false;
  }

  for (let i = 0; i < word1.length; i++) {
    let letter1 = word1[i];
    let counter1 = 0;
    let counter2 = 0;

    for (let j = 0; j < word1.length; j++) {
      let letter2 = word1[j];

      if (letter1 === letter2) {
        counter1++;
      }

      letter2 = word2[j];

      if (letter1 === letter2) {
        counter2++;
      }
    }

    if (counter1 !== counter2) {
      return false;
    }
  }

  return true;
}
// console.log(isAnagram("нора", "рано"));

// =============Tsak 3
function counterDigits(number) {
  const numAsArr = number.toString();
  const res = {};

  for (let i = 0; i < numAsArr.length; i++) {
    res[numAsArr[i]] = 0;
  }

  for (let j = 0; j < numAsArr.length; j++) {
    res[numAsArr[j]]++;
  }

  return res;
}
// console.log(counterDigits(1223334444));

// =============Tsak 4
function uniqueWordCount(sentence) {
  const sentenceAsArr = sentence.split(" ");
  let counter = 0;

  for (let i = 0; i < sentenceAsArr.length; i++) {
    if (checking(sentenceAsArr[i], sentenceAsArr)) {
      counter++;
    }
  }

  function checking(item, arrOfItems) {
    let counter2 = 0;
    for (let i = 0; i < arrOfItems.length; i++) {
      if (item === arrOfItems[i]) {
        if (++counter2 > 1) {
          return false;
        }
      }
    }

    return true;
  }

  return counter;
}
// console.log(uniqueWordCount("a b c"));

// =============Tsak 5
function counterWordsInSentence(sentence) {
  const sentenceAsArr = sentence.toLowerCase().split(" ");
  let res = {};

  for (let i = 0; i < sentenceAsArr.length; i++) {
    res[sentenceAsArr[i]] = 0;
  }

  for (let j = 0; j < sentenceAsArr.length; j++) {
    res[sentenceAsArr[j]]++;
  }

  return res;
}
// console.log(counterWordsInSentence("you hello you how hello are you you you"));
