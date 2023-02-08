// Assignment code here


function generatePasswordLC(){
  lowerCase = window.confirm("Would you like your password to contain Lower Case letters?")
  console.log(lowerCase)
  return lowerCase
}

function generatePasswordUC(){
  upperCase = window.confirm("Would you like your password to contain Upper Case letters?")
  console.log(upperCase)
  return upperCase
}

function generatePasswordNum(){
  numbers = window.confirm("Would you like your password to contain Numbers?")
  console.log(numbers)
  return numbers
}

function generatePasswordSpecChar(){
  specialChar = window.confirm("Would you like your password to contain Special Characters (i.e. !&%#)?")
  console.log(specialChar)
  return specialChar
}


function getRandomNumber() {
  console.log(String.fromCharCode(Math.floor(Math.random() * 10) + 48))
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function getRandomSymbol() {
  const symbols = "!@#$%^&*(){}[]=<>/,.";
  console.log(symbols[Math.floor(Math.random() * symbols.length)])
  return symbols[Math.floor(Math.random() * symbols.length)];
}


generatePasswordLC()
generatePasswordUC()
generatePasswordNum()
generatePasswordSpecChar()


getRandomNumber()
getRandomSymbol()

function generatePassword(){
  return "12345"
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  function generatePasswordLen(){
    length = window.prompt("How long would you like your password to be? Please select a number between 8 and 32 characters!")
    console.log(length)
    return length
  }
  generatePasswordLen()
  let pwd = "";
  for (var i = 0; i < length; i++) {
    function getRandomLetter() {
      var randletter = String.fromCharCode(Math.floor(Math.random() * 26) + 97)
      return randletter;
    }
    pwd += getRandomLetter();
    console.log(pwd)
  }

  passwordText.value = password;

}

writePassword()

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
