// Assignment code here
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
    if (length >= 8 && length <= 128) {
      return length
    } else {
      window.alert("You entered an invalid password length. Try again!")
      return writePassword() 
    }

  }
  generatePasswordLen()
  let pwd = "";

  function generatePasswordLC(){
    lowerCase = window.confirm("Click 'OK' if you would you like your password to contain Lower Case letters?")
    console.log(lowerCase)
    return lowerCase
  }
  
  function generatePasswordUC(){
    upperCase = window.confirm("Click 'OK' if you would you like your password to contain Upper Case letters?")
    console.log(upperCase)
    return upperCase
  }
  
  function generatePasswordNum(){
    numbers = window.confirm("Click 'OK' if you would you like your password to contain Numbers?")
    console.log(numbers)
    return numbers
  }
  
  function generatePasswordSpecChar(){
    specialChar = window.confirm("Click 'OK' if you would you like your password to contain Special Characters (i.e. !&%#)?")
    console.log(specialChar)
    return specialChar
  }
  generatePasswordLC()
  generatePasswordUC()
  generatePasswordNum()
  generatePasswordSpecChar()

  for (var i = 0; i < length;) {

    function getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }
    randint = (getRandomInt(4));

    if (randint === 0 && lowerCase) {
      function getRandomLetter() {
        var randletter = String.fromCharCode(Math.floor(Math.random() * 26) + 97)
        return randletter;
      }
      pwd += getRandomLetter();
      console.log(pwd)
      i++
    }

    if (randint === 1 && upperCase) {
      function getRandomLetter() {
        var randletter = String.fromCharCode(Math.floor(Math.random() * 26) + 97)
        return randletter;
      }
      randUpper = getRandomLetter().toUpperCase();
      pwd += randUpper;
      console.log(pwd);
      i++
    }  

    if (randint === 2 && numbers) {
      function getRandomNumber() {
        var randomNumber = String.fromCharCode(Math.floor(Math.random() * 10) + 48);
        return randomNumber;
      }
      pwd += getRandomNumber();
      console.log(pwd)
      i++
    }

    if (randint === 3 && specialChar) {
      function getRandomSymbol() {
        const symbols = "!@#$%^&*(){}[]=<>/,.";
        var randomSymbol = symbols[Math.floor(Math.random() * symbols.length)]
        return randomSymbol;
      }
      pwd += getRandomSymbol();
      console.log(pwd)
      i++
    }
  }
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
