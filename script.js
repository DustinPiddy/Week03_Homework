// Assignment Code
var generateBtn = document.querySelector("#generate");
var standChar = "abcdefghijklmnopqrstuvwxyz1234567890"

// user choice promt
var charLength = prompt("Choose between 6 to 10")
var upperCasesChoice = prompt("Would you like upper cases? 'true' for yes 'false' for no")
var specialCharactersChoice = prompt("Would you like special cases? 'true' for yes 'false' for no")

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
