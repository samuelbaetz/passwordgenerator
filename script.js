// Assignment Code

var generateBtn = document.querySelector("#generate");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXTZ".split("");
var lowerCase = "abcdefghiklmnopqrstuvwxyz".split("");
var special = "!@#$%^&*(){}[]=<>/,.|~?".split("");
var num = "123456789".split("");
var alertUp;
var alertDown;
var alertSpecial;
var alertNum;
var UserInput;
var length;
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}




function generatePassword() {
  length = parseInt(prompt("How long would you like your password to be?"));
  if (length > 100) {
    length = parseInt(prompt("You must choose a number below 100"))
  } else {
    alertUp = alert("Do you want to include Uppercase?");
    alertDown = alert("Do you want to include Lowercase?")
    alertSpecial = alert("Do you want special characters included?")
    alertNum = alert("Do you want to include numbers?")
  }
};
  


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Set up different generator condition prompts in an object w/ functions

// Set up conditionals to call functions
//Using DOM display result from generator to page






// function upper(length){
//   var empty1 = '';
//   var uppercase ='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//   var upperLength = uppercase.length;
//   for (var i = 0; i < length; i++) {
//     empty1 += uppercase.charAt(Math.floor(Math.random() * upperLength));
//   }
//   return empty1;
// }
// console.log(upper(4))

// function lower(length){
//   var empty2 = '';
//   var lowercase ='abcdefghijklmnopqrstuvwxyz';
//   var lowerLength = lowercase.length;
//   for (var i = 0; i < length; i++) {
//     empty2 += lowercase.charAt(Math.floor(Math.random() * lowerLength));
//   }
//   return empty2;
// }
// console.log(lower(4))

// function nums(length){
//   var empty3 = '';
//   for (var i = 0; i < length; i++) {
//    empty3 += (Math.floor(Math.random()*10)+50);
//   }
// return empty3
// }
// console.log(num);