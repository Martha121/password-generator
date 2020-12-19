// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
function generatePassword(){
  var firstQuestion = confirm ('Do you want to create a new password?');
  if (firstQuestion){
    var lenghtPassword = prompt ('Choose the lenght of your password. Password should be between 8-125 characters');
    var capitalCharacter = confirm ('Do you want to include Capital characters');
    var lowercaseCharacter = confirm ('Do you want to include lower case characters');
    var numberCharacter = confirm ('Do you want to include numbers');
    var specialCharacter = confirm ('Do you want to include special characters');
    var newPassword = "";
 
    while (newPassword.length<lenghtPassword ){
      var randType =Math.floor(Math.random()*5);
      switch(randType){
        case 1: // Upper case
          if(capitalCharacter){
            newPassword = newPassword + getUpperCharacter();
          }
          break;
        case 2: //lowercase
        if (lowercaseCharacter){
          newPassword = newPassword + "e";
          }
          break;
        case 3: // number
        if ( numberCharacter){
          newPassword = newPassword + "3";
          }
          break;
        case 4: // Special charaxter
        if (specialCharacter){
          newPassword = newPassword + "?";
          }
          break;
      }
    }
    
    return newPassword;
  }
  else{
    alert ('gracias')
    return "";
  }

}

// return  random Upper case character

function getUpperCharacter(){
  var charList= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var charIndex = Math.floor(Math.random()*26 )+1;
  return charList.charAt(charIndex);
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
