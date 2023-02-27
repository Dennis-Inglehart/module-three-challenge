// Begin assignment code

const allArabicNumerals = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const allLowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const allUpperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const allSpecialCharacters = ["!","\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];

// I'm pretty sure the special characters "\" and """ work, but I'm not positive

var lengthGetter = new Number; // used by getLength
var lowerBound = new Number; // used by getLength
var upperBound = new Number; // used by getLength
var theOneBigArray = new Array; // the entire list of characters that the password will be made out of; used often
var unshuffledPassWord = new Array; // used by getContent and populateUnshuffledPassword
var arrayThatIsNotRandomEnough = new Array; // used by theFamousFisherYatesArrayShuffler
var secretPassWord = new Array; // the end result of clicking the red "Generate Password" button

function getLength(lowerBound, upperBound) { // asks for password length
  while(lengthGetter > upperBound || lengthGetter < lowerBound) {
    let lengthGetter = window.prompt("How long should the password be?");
    if (lengthGetter > upperBound || lengthGetter < lowerBound || isNaN(lengthGetter)){
      window.alert(lengthGetter + " is no good.\nThe length has to be a number, between 8 and 128.");
    } else {
      window.alert("Password length set to " + lengthGetter + " characters.");
      return lengthGetter;
    }
  }
}

/* asks whether to include certain character sets or not
   if a set is chosen to be included, that set is added to theOneBigArray
   
   also: to make sure that, ultimately, the password has at least one character from each set, this function also adds one character from the chosen set to the password (if the set was chosen)
   because of the way this function adds characters, their position is predictable, and therefore the password is less secure; to cover for that weakness, the password is later shuffled */

function getContent(characterSetArray, characterSetMoniker) {
  while(true){
    let userPref = window.prompt("Include " + characterSetMoniker + "?");
    if(userPref.toLowerCase() === "yes"
    || userPref.toLowerCase() === "y"){
      window.alert("Including " + characterSetMoniker + ".")
      theOneBigArray = theOneBigArray.concat(characterSetArray);
      var index = Math.floor(Math.random() * characterSetArray.length);
      var thePushedCharacter = characterSetArray[index];
      unshuffledPassWord.push(thePushedCharacter);
      --passWordLength;
      break;
    } else if (userPref.toLowerCase() === "no"
    || userPref === "n"){
      window.alert("Not including " + characterSetMoniker);
      break;
    } else {
      window.alert("Please choose a 'yes' or 'no' answer.");
    }
  }
}

function populateUnshuffledPassword() { // makes up a password out of random characters from theOneBigArray
  for(i = 0; i < passWordLength; i++){
    var randomIndex = Math.floor(Math.random() * theOneBigArray.length);
    var thePushedCharacter = theOneBigArray[randomIndex];
    unshuffledPassWord.push(thePushedCharacter);
  }
}

function theFamousFisherYatesArrayShuffler(arrayThatIsNotRandomEnough) { // randomizes the order of characters in the password
  for (i = arrayThatIsNotRandomEnough.length - 1; i > 0; i--){
    randomIndex = Math.floor(Math.random() * i);
    iDoppleganger = arrayThatIsNotRandomEnough[i];
    arrayThatIsNotRandomEnough[i] = arrayThatIsNotRandomEnough[randomIndex];
    arrayThatIsNotRandomEnough[randomIndex] = iDoppleganger;
  }
  return arrayThatIsNotRandomEnough;
}

var passWordLength = getLength(8, 128);

while (true){ // gets user input on which character set(s) to include
  getContent(allArabicNumerals, "numbers");
  getContent(allLowerCaseLetters, "lowercase letters");
  getContent(allUpperCaseLetters, "uppercase letters");
  getContent(allSpecialCharacters, "special characters");
  if (theOneBigArray.length < 1){ // rejects user input if theOneBigArray is so small, it must be too small to include even one character set
    window.alert("There are still no ingredients to make a password out of!\nPlease go through again, but say 'yes' for at least one set of characters this time.");
  } else {
    break;
  }
}

populateUnshuffledPassword();
var secretPassWord = theFamousFisherYatesArrayShuffler(unshuffledPassWord);

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
