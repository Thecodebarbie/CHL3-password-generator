// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowercase = "abcdefjhijklmnopqrstuvwxyz";
var uppercase = lowercase.toUpperCase();
var numeric = "0123456789";
var specialCHaracters = "`~!@#$%^&*()_+{}[]:"; '<>?,./'

function generatePassword(){
var savedPassword = "";
}

var passwordSize = prompt("Enter password length between 8 and 128")
console.log(passwordSize)

//Conditional Statement
if (passwordSize >= 8 && passwordSize <= 128) {
  var confirmLowerCase = confirm("Do you want lowercase included in the password?")
  console.log(confirmLowerCase);
  var confirmUpperCase = confirm("Do you want uppercase included in the password?")
  var confirmNumeric = confirm("Do you want numeric values included in the password?")
  var confirmSpecialCharacters = confirm("Do you want numeric values included in the password?");


  for (var i = 0; i < passwordSize; i++) {

    if (confirmLowerCase && savedPassword.length < passwordSize) {
      var randomIndex = Math.floor(Math.random() * lowercase.length)
      console.log(randomIndex)

      savedPassword = savedPassword + lowercase[randomIndex]
    }

  }
  if (confirmUpperCase && savedPassword.length < passwordSize) {
    var randomIndex = Math.floor(Math.random() * uppercase.length);

    console.log(randomIndex);

    savedPassword = savedPassword + uppercase[randomIndex];

    return savedPassword;
  }
  else {
    alert("Invalid Entry, Password size must be between 8 and 128.");
  }


}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

