// ============Task 1 +
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

// =============Tsak 2 +

// =============Tsak 3 +
function counterDigits(number, digit) {
  const numToStr = number.toString();
  const numToDig = digit.toString();
  let totalDigits = 0;

  for (let i = 0; i < numToStr.length; i++) {
    if (numToDig === numToStr[i]) {
      totalDigits++;
    }
  }

  return totalDigits;
}
// console.log(counterDigits(1223334444, 4));

// =============Tsak 4 +

function uniqueWordCount(sentence) {
  const sentenceAsArr = sentence.split(" ");
  let counter = 0;

  for (let i = 0; i < sentenceAsArr.length; i++) {
    if (checking(sentenceAsArr[i], sentenceAsArr)) {
      counter++;
    }
  }

  function checking(item, arrOfItems) {
    let counter = 0;
    for (let i = 0; i < arrOfItems.length; i++) {
      if (item === arrOfItems[i]) {
        if (++counter > 1) {
          return false;
        }
      }
    }

    return true;
  }

  return counter;
}
// console.log(uniqueWordCount("you hello hello how are you you"));

// =============Tsak 5 +
function counterWordsInSentence(sentence, testWord) {
  const sentenceAsArr = sentence.split(" ");
  let counter = 0;

  if (sentenceAsArr.includes(testWord)) {
    for (let i = 0; i < sentenceAsArr.length; i++) {
      if (testWord === sentenceAsArr[i]) {
        counter++;
      }
    }
    console.log(counter);
    return counter;
  }
  console.log(false);
  return false;
}
// counterWordsInSentence("you hello you how hello are you you you", "you");
