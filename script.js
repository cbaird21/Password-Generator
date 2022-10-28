// Assignment code here
// activates generate as a button
var generateBtn = document.querySelector("#generate");
// all arrays created for values
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
//create function for what to combine together for password generation. the critera
function generatePassword() {
  var passwordLength = prompt(
    "Chose a length of your password between 8 and 128 characters."
  );
  passwordLength = Number(passwordLength);
  console.log(passwordLength);

  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password length must be between 8 and 128 characters");
    return null;
  }

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

  // creating new varChars to embody if the user choses okay or not on criteria. This is written to say if it's true uppperCase pull from that array and continues until completed.
  var newChars = [];
  var guarenteedChars = [];

  if (upperCase) {
    newChars = newChars.concat(upperCaseArr);
    var randomUpper = Math.floor(Math.random() * upperCaseArr.length);
    guarenteedChars.push(upperCaseArr[randomUpper]);
  }

  if (lowerCase) {
    newChars = newChars.concat(lowerCaseArr);
    var randomLower = Math.floor(Math.random() * lowerCaseArr.length);
    guarenteedChars.push(lowerCaseArr[randomLower]);
  }
  if (numbers) {
    newChars = newChars.concat(numbersArr);
    var randomNum = Math.floor(Math.random() * numbersArr.length);
    guarenteedChars.push(numbersArr[randomNum]);
  }
  if (special) {
    newChars = newChars.concat(specialArr);
    var randomSpec = Math.floor(Math.random() * specialArr.length);
    guarenteedChars.push(specialArr[randomSpec]);
  }

  console.log(guarenteedChars);

  // create final password:
  var finalPassword = [];

  // create random password using for loop
  for (var i = 0; i < passwordLength - guarenteedChars.length; i++) {
    var randomNumber = Math.floor(Math.random() * newChars.length);
    finalPassword = finalPassword.concat(newChars[randomNumber]);
  }

  // this guarentees all selected criteria is at the end of the password.
  finalPassword = finalPassword.concat(guarenteedChars);

  // omits ray elements seperated by periods is what join does
  finalPassword = finalPassword.join("");
  console.log(newChars);
  console.log(finalPassword);
  return finalPassword;
}
// return:keeps other code from being done

// // Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// giving option of generating a different password?
// var generateAgain = confirm("Would you like to get a different password?");
// console.log(generateAgain);
