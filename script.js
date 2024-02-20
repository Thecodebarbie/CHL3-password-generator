// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  var passwordSize=prompt("Enter password length between 8 and 128")
  console.log(passwordSize)

//Conditional Statement
if (passwordSize>= 8 && passwordSize<=128) {
    var confirmLowerCase=confirm("Do you want lowercase included in the password?")
    console.log(confirmUpperCase);
    var passwordSize=prompt("Enter password length between 8 and 128")
    console.log(passwordSize)
  
} else {
  alert("Invalid Entry, Password size must be between 8 and 128.")
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
