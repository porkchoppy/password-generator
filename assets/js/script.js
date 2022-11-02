// Assignment code here
var numbers = "0123456789";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var special = "!@#$%^&*+_?"

var selection = "" // [numbers, lowercase, uppercase, special];

// Get references to the #generate element

var generateBtn = document.querySelector("#generate");



function generatePassword (){

  var password = "";
  
  //prompt user for pw criteria - pw length 8-128 chars; lowercase, uppercase, numbers, spec chars

  var charLength = parseInt(window.prompt("Select a length for your password between 8 and 128 characters."));
  if  (charLength < 8 || charLength > 128) {
    alert('You must enter a number between 8 and 128')
      }

  var charNumbers = window.confirm("Would you like your password to contain numbers?");
  if (charNumbers) {
    selection += numbers;
  }

var charLower = window.confirm("Would you like your password to contain lowercase letters?");
if (charLower) {
  selection += lowercase; 
}

var charUpper = window.confirm("Would you like your password to contain uppercase letters?");
if (charUpper) {
  selection += uppercase;
}

var charSpecial = window.confirm ("Would you like your password to contain special characters?");
if (charSpecial) {
  selection += special;
}

// run a for loop the number of times characters are added to password (charLength)
// in each iteration add a random character from selection to password
  for (var i = 0; i < charLength; i++) { 
    password += selection.charAt(Math.floor(Math.random() * selection.length ));
  }

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
