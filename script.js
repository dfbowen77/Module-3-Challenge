// Assignment code here
function generatePassword(){
  function generatePasswordLen(){
    // The window.prompt is used for gathering user input via an text input box. 
    length = window.prompt("How long would you like your password to be? Please select a number between 8 and 128 characters!")
    if (length >= 8 && length <= 128) {
      return length
    } else {
      // if the user selects an invalid password length they must start the process over again, which is what the return generatePasswordLen() does.
      window.alert("You entered an invalid password length. Try again!")
      return generatePasswordLen() 
    }

  }
  generatePasswordLen()
  let pwd = "";

  function generatePasswordLC(){
    // the window.confirm returns a boolean value with OK = true and Cancel = false
    lowerCase = window.confirm("Click 'OK' if you would you like your password to contain Lower Case letters?")
    return lowerCase
  }
  
  function generatePasswordUC(){
    upperCase = window.confirm("Click 'OK' if you would you like your password to contain Upper Case letters?")
    return upperCase
  }
  
  function generatePasswordNum(){
    numbers = window.confirm("Click 'OK' if you would you like your password to contain Numbers?")
    return numbers
  }
  
  function generatePasswordSpecChar(){
    specialChar = window.confirm("Click 'OK' if you would you like your password to contain Special Characters (i.e. !&%#)?")
    return specialChar
  }
  generatePasswordLC()
  generatePasswordUC()
  generatePasswordNum()
  generatePasswordSpecChar()

  // This if statement is used to verify that the user has selected at least one type of character for the password. 
  if (lowerCase === false && upperCase === false && numbers === false && specialChar === false) {
    window.alert("You have not entered valid password criteria. Please select at least one type of character for your password! Try again!")
    return generatePassword() 
  }

  for (var i = 0; i < length;) {
    // This function selects a random integer in order to randomize which type of character is added to the password.  
    function getRandomInt(max) {
      // According to Mozilla... "The Math.floor() static method always rounds down and returns the largest integer less than or equal to a given number."
      return Math.floor(Math.random() * max);
    }
    randint = (getRandomInt(4));

    if (randint === 0 && lowerCase) {
      function getRandomLetter() {
        // This code selects a random letter. The 97 represents the beginning of the lower case alphabet in Unicode (e.g. a= 97; z = 122).
        var randletter = String.fromCharCode(Math.floor(Math.random() * 26) + 97)
        return randletter;
      }
      pwd += getRandomLetter();
      i++
    }

    if (randint === 1 && upperCase) {
      function getRandomLetter() {
        var randletter = String.fromCharCode(Math.floor(Math.random() * 26) + 97)
        return randletter;
      }
      // The .toUpperCase() converts the random letter from lower case into upper case.
      randUpper = getRandomLetter().toUpperCase();
      pwd += randUpper;
      i++
    }  

    if (randint === 2 && numbers) {
      function getRandomNumber() {
        // This code selects a random number. The 48 represents the beginning of the numeric digits 0-9 in Unicode (e.g. 0= 48; 9 = 57).
        var randomNumber = String.fromCharCode(Math.floor(Math.random() * 10) + 48);
        return randomNumber;
      }
      pwd += getRandomNumber();
      i++
    }

    if (randint === 3 && specialChar) {
      function getRandomSymbol() {
        const symbols = "!@#$%^&*(){}[]=<>/,.";
        // This selects a random symbol based on the length of the symbol string.
        var randomSymbol = symbols[Math.floor(Math.random() * symbols.length)]
        return randomSymbol;
      }
      pwd += getRandomSymbol();
      i++
    }
  }
  return pwd
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
 
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


