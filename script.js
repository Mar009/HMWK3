// Assignment Code
var generateBtn = document.querySelector("#generate");

var charLower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var numeric = ['0','1','2','3','4','5','6','7','8','9'];
var special = ['!','@','#','$',"%",'^','&','*','(',')'];
var charUpper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

 
  passwordText.value = password;

}

function generatePassword(){
 // sets length.
    var characterAmt = prompt("How many characters? Has to be between 8-128 characters.");
    var x = characterAmt.length
    
 // If Y, then add charLower. If N, then no add
    var lowerCase = prompt("Do you want lower case letters? Yes or No");

 // If Y, then add CharUpper. If N, then no add
   var upperCase = prompt("Do you want upper case letters? Yes or No");
  
 //If Y, then add Numeric, If N, then no add
   var numbers = prompt("Do you want numbers? Yes or No");
  
 // If Y, then Add special. If N, then no add
   var special = prompt("Do you want special characters? Yes or No");

   if(lowerCase){

   }
    
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Time mgmt whomst
