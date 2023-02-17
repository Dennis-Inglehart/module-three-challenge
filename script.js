// Begin assignment code

const allArabicNumerals = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const allLowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const allUppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const allSpecialCharacters = ["!","\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];

let userPrefNumerals = window.prompt("Include numbers?")
if (userPrefNumerals.toLowerCase === "yes" || "y"){
  // merge it to oneBigArray
  // if shuffling arrays is easy, put a random one in the array
  // window.alert("Including numbers.") to confirm the choice was accepted
} else if (userPrefNumerals.toLowerCase === "no" || "n"){
  // window.alert to confirm the choice was rejected
} else{
  // ask again? should this be a do-while loop?
}

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
