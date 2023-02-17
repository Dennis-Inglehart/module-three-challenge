// Begin assignment code

const allArabicNumerals = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const allLowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const allUpperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const allSpecialCharacters = ["!","\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];

var theOneBigArray = new Array;
var unshuffledPassWord = new Array;

while(true) {
  let userPrefNumerals = window.prompt("Include numbers?");
  if (userPrefNumerals.toLowerCase() === "yes"
   || userPrefNumerals.toLowerCase() === "y"){
    window.alert("Including numbers.");
    theOneBigArray = theOneBigArray.concat(allArabicNumerals);
    var index = Math.floor(Math.random() * allArabicNumerals.length);
    var thePushedCharacter = allArabicNumerals[index];
    unshuffledPassWord.push(thePushedCharacter);
    break;
  } else if (userPrefNumerals.toLowerCase() === "no"
   || userPrefNumerals === "n"){
    window.alert("Not including numbers.");
    break;
  } else {
    window.alert("Please choose a 'yes' or 'no' answer.")
  }
}

while(true) {
  let userPrefLowerCase = window.prompt("Include lowercase letters?");
  if (userPrefLowerCase.toLowerCase() === "yes"
   || userPrefLowerCase.toLowerCase() === "y"){
    window.alert("Including lowercase letters.");
    theOneBigArray = theOneBigArray.concat(allLowerCaseLetters);
    var index = Math.floor(Math.random() * allLowerCaseLetters.length);
    var thePushedCharacter = allLowerCaseLetters[index];
    unshuffledPassWord.push(thePushedCharacter);
    break;
  } else if (userPrefLowerCase.toLowerCase() === "no"
   || userPrefLowerCase === "n"){
    window.alert("Not including lowercase letters.");
    break;
  } else {
    window.alert("Please choose a 'yes' or 'no' answer.")
  }
}

while(true) {
  let userPrefUpperCase = window.prompt("Include uppercase letters?");
  if (userPrefUpperCase.toLowerCase() === "yes"
   || userPrefUpperCase.toLowerCase() === "y"){
    window.alert("Including uppercase letters.");
    theOneBigArray = theOneBigArray.concat(allUpperCaseLetters);
    var index = Math.floor(Math.random() * allUpperCaseLetters.length);
    var thePushedCharacter = allUpperCaseLetters[index];
    unshuffledPassWord.push(thePushedCharacter);
    break;
  } else if (userPrefUpperCase.toLowerCase() === "no"
   || userPrefUpperCase === "n"){
    window.alert("Not including uppercase letters.");
    break;
  } else {
    window.alert("Please choose a 'yes' or 'no' answer.")
  }
}

while(true) {
  let userPrefSpecials = window.prompt("Include special characters?");
  if (userPrefSpecials.toLowerCase() === "yes"
   || userPrefSpecials.toLowerCase() === "y"){
    window.alert("Including special characters.");
    theOneBigArray = theOneBigArray.concat(allSpecialCharacters);
    var index = Math.floor(Math.random() * allSpecialCharacters.length);
    var thePushedCharacter = allSpecialCharacters[index];
    unshuffledPassWord.push(thePushedCharacter);
    break;
  } else if (userPrefSpecials.toLowerCase() === "no"
   || userPrefSpecials === "n"){
    window.alert("Not including special characters.");
    break;
  } else {
    window.alert("Please choose a 'yes' or 'no' answer.")
  }
}

console.log(theOneBigArray); //just for testing
console.log(unshuffledPassWord); //just for testing

// End assignment code

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
