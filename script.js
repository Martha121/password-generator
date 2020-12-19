// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
function generatePassword(){
  var firstQuestion = confirm ('Do you want to create a new password?');
  if (firstQuestion){
    var lenghtPassword = prompt ('Choose the lenght of your password. Password should be between 8-125 characters');
    var capitalCharacter = confirm ('Do you want to include Capital characters');
    var lowercaseCharacter = confirm ('Do you want to include lower case characters');
    var specialCharacter = confirm ('Do you want to include special characters');
    var newPassword = "";
    while (newPassword.length<lenghtPassword ){
      var randType =Math.floor(Math.random()*5);
      switch(randType){
        case 1: // Upper case
          if(capitalCharacter){
            newPassword = newPassword + "A";
          }
          break;
        case 2: //lowercase
          newPassword = newPassword + "e";
          break;
        case 3: // number
          newPassword = newPassword + "3";
          break;
        case 4: // Special charaxter
          newPassword = newPassword + "?";
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
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
