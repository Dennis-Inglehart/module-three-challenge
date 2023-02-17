# Password Generator

# Plan

make an array of all uppercase letters
make an array of all lowercase letters
make an array of all numbers
make an array of all special characters

determine which arrays to combine (based on user input)
merge the appropriate arrays into theOneBigArray (use concat() or something)

determine how long the password is (based on user input)
make a for loop something like:

for desiredLength (i = 0; i < desiredLength; i++){
  var index = Math.floor(Math.random() * oneBigArray.length);
  var thePushedCharacter = theOneBigArray[index];
  secretPassWord.push(thePushedCharacter);
  }

I didn't spell any of those commands right, but that should do it

Except I need at least 1 character from each chosen set, therefore:

For each desired character set:
Option A:
pick a random character from that set
put it in a random spot in the array (replace what's there)
disqualify that spot from future random-putting
Option B:
check to see if that array and theOneBigArray have *any* elements in common
if they have nothing in common, do it again

And then, figure out user prompts

if (arrayWithOnlyYesOrNo.includes(userAnswer)) == false{
  window.alert("yay!")
  ...move on somehow
} else {
  window.alert("that is not an option");
  ...ask again somehow
}

# Acceptance Criteria for this project:

GIVEN I need a new, secure password

WHEN I click the button to generate a password

THEN I am presented with a series of prompts for password criteria

WHEN prompted for password criteria

THEN I select which criteria to include in the password

WHEN prompted for the length of the password

THEN I choose a length of at least 8 characters and no more than 128 characters

WHEN asked for character types to include in the password

THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters

WHEN I answer each prompt

THEN my input should be validated and at least one character type should be selected

WHEN all prompts are answered

THEN a password is generated that matches the selected criteria

WHEN the password is generated

THEN the password is either displayed in an alert or written to the page