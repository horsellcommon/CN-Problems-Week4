/*
Given an array of words, write a function that returns the longest word
*/

const hugeWord = (arr) => {
  let longest = arr[0];

  for (let word of arr) {
    // word becomes next item in array each time it runs
    if (word.length > longest.length) {
      longest = word;
    }
  }

  return longest;
};

module.exports = {
  hugeWord,
};
