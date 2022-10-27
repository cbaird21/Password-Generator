// Assignment code here
// list out the criteria options we must select yes or no to in Alert
var criterias = ["uppercase", "lowercase", " numeric", "special characters"];

// This "confirm alert" prompts user on page to select the different criterias
// alert("Please select which criteria you'd like in your password.");4 loop for length of password
var characterLength = prompt(
  "select your character length between 8 and 128 characters"
);
console.log(characterLength);

var upperCase = confirm("Select ok if you'd like uppercases in your password.");
console.log(upperCase);

var lowerCase = confirm(
  "Select ok if you'd like lower cases in your password."
);
console.log(lowerCase);

var numberCharacters = confirm(
  "Select ok if you'd like numbers in your password."
);
console.log(numberCharacters);

var specialCharacters = confirm(
  "Select ok if you'd like special characters in your password."
);
console.log(specialCharacters);

// Need to track to ensure 1 or more criteria is accepted. and operator &&
//
// if (var&&var&&var&&)

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
