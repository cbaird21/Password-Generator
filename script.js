// Assignment code here
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// all arrays
var lowerCaseArr = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

var upperCaseArr = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

var numbersArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var specialArr = ["!", "@", "#", "$", "*", "%"];
// This "confirm alert" prompts user on page to select the different criterias
//create function
function generatePassword() {
  var passwordLength = prompt(
    "Chose a length of your password between 8 and 128 characters."
  );
  passwordLength = Number(passwordLength);
  console.log(passwordLength);

  var upperCase = confirm(
    "Please confirm if you'd like uppercases in your password."
  );
  console.log(upperCase);

  var lowerCase = confirm(
    "Please confirm if you'd like lower cases in your password."
  );
  console.log(lowerCase);

  var numbers = confirm(
    "please confirm if you'd like numbers in your password."
  );
  console.log(numbers);

  var special = confirm(
    "pleaseconfirm if you'd like special characters in your password."
  );
  console.log(special);

  // Need to track to ensure 1 or more criteria is accepted. and operator &&
  //
  // if (var&&var&&var&&)
  var newChars = [];

  if (upperCase) {
    newChars = newChars.concat(upperCaseArr);
  }
  console.log(newChars);

  if (lowerCase) {
    newChars = newChars.concat(lowerCaseArr);
  }

  if (numbers) {
    newChars = newChars.concat(numbersArr);
  }

  if (special) {
    newChars = newChars.concat(specialArr);
  }

  console.log(newChars);

  // create final password:
  var finalPassword = [];

  // create random password for loop
  for (var i = 0; i <= passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * newChars.length);
    finalPassword = finalPassword.concat(newChars[randomNumber]);
    console.log(finalPassword);
  }
  // omits ray elements seperated by periods is what join does
  finalPassword = finalPassword.join("");
  console.log(newChars);
  console.log(finalPassword);
  return finalPassword;
}

// return:keeps other code from being done
// alert select one criteria before generating password.
// if (userChoice >= 1{
// return password output;
// else {
// return "must select one or more criteria"}

// the we would have to cycle back through alert options until true statement of one or more criterias selected?

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// giving option of generating a different password?
// var generateAgain = confirm("Would you like to get a different password?");
// console.log(generateAgain);
