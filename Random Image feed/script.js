/*const imageContainer = document.getElementById("container");

const unsplashURL = "https://source.unsplash.com/random/";
const numberOfRows = 10;

for (let index = 0; index < numberOfRows * 3; index++) {
  const image = document.createElement("img");
  image.src = `${unsplashURL}${getRandomImageSize()}`;
  imageContainer.appendChild(image);
}

function getRandomImageSize() {
  return `${getRandomImageNumber()}*${getRandomImageNumber()}`;
}
function getRandomImageNumber() {
  return Math.floor(Math.random() * 10) + 300;
} */

//differnce between and array
const firstArray = [1, 2, 3, 4, 5, 6];
const secondArray = [3, 4, 5, 6, 7, 8];

const diffentiateFirst = firstArray.filter(
  (event) => !secondArray.includes(event)
);

const diffentiateSecond = secondArray.filter(
  (event) => !firstArray.includes(event)
);

const differnces = [...diffentiateFirst, ...diffentiateSecond];

console.log(differnces); //logs the numbers that are not common to both arrays

//split a string into an array
const myName = "Olajide Blessing Niniola";
const spaceName = myName.split(" "); //split based on the space
const spaceLetters = myName.split(""); //split based on each character

console.log(spaceName);
console.log(spaceLetters);

//reverse items in an array
const numbers = [1, 2, 3, 4, 5];
const reverseNumbers = numbers.reverse();

console.log(reverseNumbers);

//check if a number is odd or even
let toCheck = 4;

const evenNumber = (num) => num % 2 === 0;

console.log(evenNumber(4));

//captalize a string
const surname = "olajide";

function capitaliseName(surname) {
  return surname.charAt(0).toUpperCase() + surname.slice(1);
}
console.log(capitaliseName(surname));

//findLongestWordLength
function findLongestWordLength(str) {
  let words = str.split(" ");
  maxWord = " ";
  let maxLength = 0;

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > maxLength) {
      maxLength = words[i].length; //return the number of letters in the longest word
      maxWord = words[i]; //returns the longest word
    }
  }
  return maxWord, maxLength;
}
console.log(
  findLongestWordLength("The quick brown fox jumped over the lazy dog")
);
//largest number in an array
function largestOfFour(arr) {
  let results = [];
  for (let i = 0; i < arr.length; i++) {
    let largestNumber = arr[i][0];
    for (let j = 1; j < arr[i].length; j++) {
      if (arr[i][j] > largestNumber) {
        largestNumber = arr[i][j];
      }
    }
    results[i] = largestNumber;
  }
  return results;
}
console.log(
  largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
  ])
);
largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
]);
//factorise a string
function factorialize(num) {
  let product = 1;
  for (let i = 2; i <= num; i++) {
    product *= i;
  }
  return product;
}
console.log(factorialize(5));
factorialize(5);

function findElement(arr, func) {
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    num = arr[i];
    if (func(num)) {
      return num;
    }
  }
}
console.log(findElement([1, 2, 3, 4, 5, 6], (num) => num % 2 === 0));

//repeat a string
function repeatStringNumTimes(str, num) {
  if (num < 1) {
    return "" 
  } else {
    return str + ' ' +  repeatStringNumTimes(str, num - 1) ;
  }
}
console.log(repeatStringNumTimes("abc", 3));

//truncate a string
function truncateString(str, num) {
  if (str.length > num) {
    return str.slice(0, num) + "..." ;
  } else {
    return str;
  }
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));

const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {

  const failureItems = arr.map(item => `<li class="text-warning">${item}</li>`);

  return failureItems;
}

const failuresList = makeList(result.failure);

// find last letter of a string
let lastName = "Lovelace";

let lastLetterOfLastName = lastName[lastName.length - 1]; 
console.log(lastLetterOfLastName);

function getIndexToIns(arr, num) {
  return arr.filter(val => num > val).length;
}

console.log(getIndexToIns([40, 60], 50));


