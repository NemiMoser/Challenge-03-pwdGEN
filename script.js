// Assignment code here
var passwordCriteria = {   
  numeric: '0123456789',
  uppercase:  'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  special: '!@#$%&*?'
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
var writePassword = function() {
  var passwordOptions = {};

for (var key in passwordCriteria) {
  var choice = prompt("Do you want to include " + key + " characters? (Y/N)").toUpperCase();
  
  if (choice === 'Y') {
    passwordOptions[key] = true;
    } else if (choice === 'N') {
    passwordOptions[key] = false;
    } else {
      console.log("Invalid choice. Please type 'Y' for Yes or 'N' for No.");
      passwordOptions[key] = false;
    }
  }

  var passwordLength = parseInt(prompt("Enter the desired password length (between 8 and 128):"));
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    console.log("Invalid password length. Please enter a number between 8 and 128.");
    return;
  }

  var password = generatePassword(passwordOptions, passwordLength);
  var passwordText = document.querySelector("#password");

 passwordText.value = password;

 console.log("Password options:", passwordOptions);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(options, length) {
  var selectedCriteria = '';
  var password = '';

  for (var key in options) {
    if (options[key]) {
      selectedCriteria += passwordCriteria[key];
    }
  }

  if (selectedCriteria.length === 0) {
    return 'No criteria selected. Please select criteria.';
  }

  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * selectedCriteria.length);
    password += selectedCriteria.charAt(randomIndex);
  }

  return password;
}