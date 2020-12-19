// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
function generatePassword(){
  var firstQuestion = confirm ('Do you want to create a new password?');
  if (firstQuestion){
    var lenghtPassword = 0;
    // Ensure user enter a valid length for the password before continuing
    while((lenghtPassword<8 ) || (lenghtPassword>125)){
      lenghtPassword = prompt ('Choose the lenght of your password. Password should be between 8-125 characters');
    }
    var capitalCharacter = confirm ('Do you want to include Capital characters');
    var lowercaseCharacter = confirm ('Do you want to include lower case characters');
    var numberCharacter = confirm ('Do you want to include numbers');
    var specialCharacter = confirm ('Do you want to include special characters');

    // Validate at least one option is selected. If not, ask user to try again
    if ((capitalCharacter==false)&&(lowercaseCharacter==false)&&(numberCharacter==false)&&(specialCharacter==false)){
      alert('You have not selected any of the options. Plese try agin and select one of the options to generate password');
      return "";
    }
    var newPassword = "";

    // While loop will stay generating valid characters 
    // until it reaches the desired password length
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
          newPassword = newPassword + getLowerCharacter();
          }
          break;
        case 3: // number
        if ( numberCharacter){
          newPassword = newPassword + getNumberCharacter();
          }
          break;
        case 4: // Special charaxter
        if (specialCharacter){
          newPassword = newPassword + getSpecialCharacter();
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
  var upperCharList= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var upperCharIndex = Math.floor(Math.random()*26);
  return upperCharList.charAt(upperCharIndex);
}
// return random Lower case character
function getLowerCharacter(){
  var lowerCharList= "abcdefghijklmnopqrstuvwxyz";
  var lowerCharIndex = Math.floor(Math.random()*26);
  return lowerCharList.charAt(lowerCharIndex);
} 
//return random number character
function getNumberCharacter(){
  var numberCharList= "0123456789";
  var numberCharIndex = Math.floor(Math.random()*10);
  return numberCharList.charAt(numberCharIndex);
} 
//return random Special character
function getSpecialCharacter(){
  var specialCharList= "~!@#$%^&*()+=";
  var specialCharIndex = Math.floor(Math.random()*13);
  return specialCharList.charAt(specialCharIndex);
} 

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
