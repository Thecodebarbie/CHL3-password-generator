// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowercase = "abcdefjhijklmnopqrstuvwxyz";
var uppercase = lowercase.toUpperCase();
var numeric = "0123456789";
var specialCharacter = "`~!@#$%^&*()_+{}[]:"; '<>?,./'

function generatePassword(){
  var savedPassword="";
  var passwordSize = prompt("Enter password length between 8 and 128")
  console.log(passwordSize)
  //password size=7
  if(passwordSize>= 8 && passwordSize<=128){
    var confirmLowerCase=confirm("Do you want lowercase icluded in the password")
    console.log(confirmLowerCase)
    var confirmUpperCase=confirm("Do you want uppercase icluded in the password")
    var confirmNumeric=confirm("Do you want numeric values icluded in the password")
    var confirmSpecialCharacter=confirm("Do you want special characters icluded in the password")

    for(var i=0; i < passwordSize; i++){

    

    if(confirmLowerCase && savedPassword.length < passwordSize){
      var randomIndex= Math.floor ( Math.random()* lowercase.length )
      console.log(randomIndex)
      
      savedPassword= savedPassword+lowercase[randomIndex]

    }

    if(confirmUpperCase && savedPassword.length < passwordSize){
      var randomIndex= Math.floor ( Math.random()* uppercase.length )
      console.log(randomIndex)
      
      savedPassword= savedPassword+uppercase[randomIndex]

    }

    if(numeric && savedPassword.length < passwordSize){
      var randomIndex= Math.floor ( Math.random()* numeric.length )
      console.log(randomIndex)
      
      savedPassword= savedPassword+numeric[randomIndex]
    }

    
  }

  }
  else{
    alert("Invalid entry, Password length must be between 8 and 128")
  }

return savedPassword


}
 

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
