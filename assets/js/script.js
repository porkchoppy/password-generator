// Assignment code here
const numbers = "0123456789";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const special = "!@#$%^&*+_?"

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//prompt user for pw criteria - pw length 8-128 chars - default minimum; lowercase, uppercase, numbers, spec chars

var charLength = window.prompt("Select a length for your password between 8 and 128 characters.");

var charNumbers = window.prompt("Would you like your password to contain numbers? Y/N");

while(charNumbers.toUpperCase() !== "Y" && charNumbers.toUpperCase() !== "N"){
  window.alert("Please enter Y for yes or N for no. ");
  charNumbers = window.prompt("Would you like your password to contain numbers? Y/N");
}

var charLower = window.prompt("Would you like your password to contain lowercase letters? Y/N");

while(charLower.toUpperCase() !== "Y" && charLower.toUpperCase() !== "N"){
  window.alert("Please enter Y for yes or N for no. ");
  charLower = window.prompt("Would you like your password to contain numbers? Y/N");
}

var charUpper = window.prompt("Would you like your password to contain uppercase letters? Y/N");

while(charUpper.toUpperCase() !== "Y" && charUpper.toUpperCase() !== "N"){
  window.alert("Please enter Y for yes or N for no. ");
  charUpper = window.prompt("Would you like your password to contain numbers? Y/N");
}

var charSpecial = window.prompt ("Would you like your password to contain special characters? Y/N");

while(charSpecial.toUpperCase() !== "Y" && charSpecial.toUpperCase() !== "N"){
  window.alert("Please enter Y for yes or N for no. ");
  charSpecial = window.prompt("Would you like your password to contain numbers? Y/N");
}


//var randomNumber = Math.floor(Math.random() * (128 - 8 + 1) ) + 8;  


function generatePassword (){




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
