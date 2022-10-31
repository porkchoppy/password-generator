// Assignment code here
const numberCharacters = document.getElementById("numbers");
const uppercaseCharacters = document.getElementById("uppercase");
const lowercaseCharacters = document.getElementById("lowercase");
const specialCharacters = document.getElementById("special");

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword (){

    //prompt user for pw criteria - pw length 8-128 chars - default minimum; lowercase, uppercase, numbers, spec chars
  var userSelection = window.prompt("Select a length for your password from 8 to 128 characters.", 8);


  //prompt user for pw criteria
    //pw length 8-128 chars - default minimum 
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
