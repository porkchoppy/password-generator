// Assignment code here
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialchars = ["!", "@", "#", "$", "%", "^", "&", "*", "_", "?"];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword (){

  //prompt user for pw criteria
    //pw length 8-128 chars
    //lowercase, uppercase, numbers, spec chars
  
  //validate input

  //generate pw based on criteria

  //display pw to the page 

  return "password placeholder"
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
