// Assignment code here
// list out the criteria options we must select yes or no to in Alert
var criterias = ["uppercase", "lowercase", " numeric", "special characters"];

// This alert prompt user on page to select the different criterias
alert("Please select which criteria you'd like in your password.");

// How do I create an automatic procession of questions needing to be asked? why isn't inside of my alert finding global criterias array?
// alert("Would you like your password to have + "criterias [0}", + ?");

// Need to track to ensure 1 or more criteria is accepted. This would be an if statement about equal to or less than value of response true. If statements confuse me. it would be
// if (userChoice >= 1{
// return password output;
// else {
// return "must select one or more criteria"}

// the we would have to cycle back through alert options until true statement of one or more criterias selected?

// var userChoice =
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
