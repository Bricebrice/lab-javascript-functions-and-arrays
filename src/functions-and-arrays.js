// Iteration #1: Find the maximum
function maxOfTwoNumbers(a, b) {
  if (a > b){
    // console.log(`${a} is bigger than ${b}`);
    return a;
  }
  else if (a < b){
    // console.log(`${b} is bigger than ${a}`);
    return b;
  }
  else {
    // console.log(`${a} is equal to ${b}`);
    return a,b;
  }
}
maxOfTwoNumbers(1,2);



// Iteration #2: Find longest word

function findLongestWord(words) {
  // declare longestWord at position 0 = 'mystery'
  let longestWord = words[0];

  // Check if array is empty, no need for loop
  if(words.length === 0){
    console.log(`The array is empty`);
    return null;
  }

  // loop over words, start at position 1 = 'brother'
  for (let i = 1; i < words.length; i++) {
    // console.log(words[i]);
    // if words at position 1 (then 2, 3,...) are longer than longestWord
    if (words[i].length > longestWord.length) {
      // update longestWord
      longestWord = words[i];
      // console.log(`${words[i].length} is longer than ${longestWord.length}`);
    }
  }
  return longestWord;
}

// const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];
const words = [];
console.log(`The longest word is: ${findLongestWord(words)}`);





// Iteration #3: Calculate the sum
// const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
const numbers = [];

function sumNumbers(numbers) {
  if(numbers.length === 0){
    return 0;
  }

  let sum = 0;
  for (let i = 0; i < numbers.length; i++){
    // console.log(numbers[i]);
    sum += numbers[i];
  }
  return sum;
}
const result = sumNumbers(numbers);
console.log(`The result is: ${result}`)


// Iteration #3.1 Bonus:
function sum(mixedArr) {
  if(mixedArr.length === 0){
    return 0;
  }
  
  let result = 0;
  let numbersSum = 0;
  let stringSum = 0;
  let booleansSum = 0;

  for (let i = 0; i < mixedArr.length; i++){
    if (typeof mixedArr[i] == "boolean") {
      // console.log(mixedArr[i]);
      booleansSum += mixedArr[i];
      // console.log(booleansSum);
    }
    if (typeof mixedArr[i] === "number") {
      // console.log(mixedArr[i]);
      numbersSum += mixedArr[i];
      // console.log(numbersSum);
    }
    if (typeof mixedArr[i] === "string") {
      // console.log(mixedArr[i]);
      stringSum += mixedArr[i].length;
      // console.log(stringSum);
    }
    if (typeof mixedArr[i] === ("object" || "array")) {
      // console.log(mixedArr[i]);
      throw new Error("mixedArr only accepts booleans, strings and/or numbers data types.");
    }
    // console.log(`booleanSum = ${booleansSum}, numberSum = ${numbersSum}, stringSum = ${stringSum}`);
    result = booleansSum + numbersSum + stringSum;
    // console.log(result);
  }
  return result;
}

const mixedArr = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];
// const mixedArr = [6, 12, 'miami', 1, ['el1', 'el2', 'el3'], true, 'barca', '200', 'lisboa', 8, 10];
console.log(sum(mixedArr));
// should return: 57



// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbersAvg) {
  if (numbersAvg.length === 0){
    return null;
  }
  return sumNumbers(numbersAvg)/numbersAvg.length;
}
console.log(`Average (${averageNumbers(numbersAvg)}) is equal to sum (${sumNumbers(numbersAvg)}) divided by number of elements (${numbersAvg.length}).`);


// Level 2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength(wordsArr) {
  if (wordsArr.length === 0){
    return null;
  }
  return sum(wordsArr)/wordsArr.length;
}
console.log(`Average (${averageWordLength(wordsArr)}) is equal to sum (${sum(wordsArr)}) divided by number of elements (${wordsArr.length}).`);

// Bonus - Iteration #4.1
// had to rename mixedArr to mixedArray as already existingin another exercise
const mixedArray = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10]; // should return: 5.7

function avg(mixedArray) {
  if (mixedArray.length === 0){
    return null;
  }
  return sum(mixedArray)/mixedArray.length;
}
console.log(avg(mixedArray));

// Iteration #5: Unique arrays
const wordsUnique = [
  'crab',
  'poison',
  'contagious',
  'simple',
  'bring',
  'sharp',
  'playground',
  'poison',
  'communion',
  'simple',
  'bring'
];

function uniquifyArray(wordsUnique) {

  let newList = [];

  if (wordsUnique.length === 0){
    return null;
  }  
  wordsUnique.forEach(function(element){
    console.log(`${element}`);
    // if element don't exist in newList, then value is -1, otherwise >= 0
    if (newList.indexOf(element) === -1){
      newList.push(element);
     }
  });
  return newList;
}

console.log(uniquifyArray(wordsUnique));


// Iteration #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];
// const wordSearch = 'trouble';
const wordSearch = '';

function doesWordExist(wordsFind, wordSearch) {
  if (wordsFind.length === 0){
    return null;
  }
  for (let i = 0; i < wordsFind.length; i++){
    if (wordsFind[i] === wordSearch){
      return true;
    }
  }
  // if loop ends without returning true, then it's false
  return false;
}
console.log(doesWordExist(wordsFind, wordSearch));


// Iteration #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];
const wordToSearch = 'matter';
// let wordOccurence = 0;

function howManyTimes(wordsCount, wordToSearch) {
  if (wordsCount.length === 0){
    return 0;
  }
  // moved to the function so reset happens inside the function itself.
  let wordOccurence = 0;
  for (let i = 0; i < wordsCount.length; i++){
    if (wordsCount[i] === wordToSearch){
      wordOccurence += 1;
      // console.log(wordOccurence);
    }
  }
  return wordOccurence;
}

console.log(`The word "${wordToSearch}" appears ${howManyTimes(wordsCount, wordToSearch)} times`);


// Iteration #8: Bonus
const matrix = [
  [8, 2, 22, 97, 38, 15, 0, 40, 0, 75, 4, 5, 7, 78, 52, 12, 50, 77, 91, 8],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 4, 56, 62, 0],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 3, 49, 13, 36, 65],
  [52, 70, 95, 23, 4, 60, 11, 42, 69, 24, 68, 56, 1, 32, 56, 71, 37, 2, 36, 91],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13, 80],
  [24, 47, 32, 60, 99, 3, 45, 2, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12, 50],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64, 70],
  [67, 26, 20, 68, 2, 62, 12, 20, 95, 63, 94, 39, 63, 8, 40, 91, 66, 49, 94, 21],
  [24, 55, 58, 5, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63, 72],
  [21, 36, 23, 9, 75, 0, 76, 44, 20, 45, 35, 14, 0, 61, 33, 97, 34, 31, 33, 95],
  [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 3, 80, 4, 62, 16, 14, 9, 53, 56, 92],
  [16, 39, 5, 42, 96, 35, 31, 47, 55, 58, 88, 24, 0, 17, 54, 24, 36, 29, 85, 57],
  [86, 56, 0, 48, 35, 71, 89, 7, 5, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
  [19, 80, 81, 68, 5, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 4, 89, 55, 40],
  [4, 52, 8, 83, 97, 35, 99, 16, 7, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
  [88, 36, 68, 87, 57, 62, 20, 72, 3, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53, 69],
  [4, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 8, 46, 29, 32, 40, 62, 76, 36],
  [20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 4, 36, 16],
  [20, 73, 35, 29, 78, 31, 90, 1, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 5, 54],
  [1, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 1, 89, 19, 67, 48]
];

function greatestProduct() {}




// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    maxOfTwoNumbers,
    findLongestWord,
    sumNumbers,
    sum,
    averageNumbers,
    averageWordLength,
    avg,
    uniquifyArray,
    doesWordExist,
    howManyTimes,
    greatestProduct
  };
}
