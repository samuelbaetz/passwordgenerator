var alertUp;
var alertDown;
var alertNum;
var alertSpecial
var clearBtn = document.querySelector('#clear')
var generateBtn = document.querySelector("#generate");




 function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = s;
    function shuffle(s) {
        var arr = s.split('');           
        
        arr.sort(function() {
          return 0.5 - Math.random();
        });  
        s = arr.join('');                
        return s;                        
      }
      
      var s = password;
      
      s = shuffle(s);
      
      console.log(s);
      var passwordText = document.querySelector("#password");
      passwordText.value = s;
  }

  

  function generatePassword(){
    var passwordgen = {
        uppercase: function(l) {
            var text = ""
            var charUp = "ABCDEFGHIJKLMNOPQRSTUVWXTZ"
            for (var i = 0; i < l; i++) {
                text += charUp.charAt(Math.floor(Math.random() * charUp.length));
            }
            return text;
        },
        lowercase: function(l) {
           var text = ""
           var charUp = "abcdefghijklmnopqrstuvwxyz"
           for (var i = 0; i < l; i++) {
               text += charUp.charAt(Math.floor(Math.random() * charUp.length));
           }
           return text;
       },
       num: function(l) {
           var text = ""
           var charUp = "0123456789"
           for (var i = 0; i < l; i++) {
               text += charUp.charAt(Math.floor(Math.random() * charUp.length));
           }
           return text;
       },
       special: function(l) {
           var text = ""
           var charUp = "!@#$%^&*(){}[]=<>/,.|~?"
           for (var i = 0; i < l; i++) {
               text += charUp.charAt(Math.floor(Math.random() * charUp.length));
           }
           return text;
       },
       upperLowercase: function(l) {
        var text = ""
        var charUp = "ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghijklmnopqrstuvwxyz"
        for (var i = 0; i < l; i++) {
            text += charUp.charAt(Math.floor(Math.random() * charUp.length));
        }
        return text;
      // Write functions for multiple sets of characters here
    },
    upperLowercaseSpecial: function(l) {
        var text = ""
        var charUp = "ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghijklmnopqrstuvwxyz!@#$%^&*(){}[]=<>/,.|~?"
        for (var i = 0; i < l; i++) {
            text += charUp.charAt(Math.floor(Math.random() * charUp.length));
        }
        return text;
      // Write functions for multiple sets of characters here
    },
    fullset: function(l) {
        var text = ""
        var charUp = "ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghijklmnopqrstuvwxyz!@#$%^&*(){}[]=<>/,.|~?0123456789"
        for (var i = 0; i < l; i++) {
            text += charUp.charAt(Math.floor(Math.random() * charUp.length));
        }
        return text;
      // Write functions for multiple sets of characters here
    },
    numSpecial: function(l) {
        var text = ""
        var charUp = "!@#$%^&*(){}[]=<>/,.|~?0123456789"
        for (var i = 0; i < l; i++) {
            text += charUp.charAt(Math.floor(Math.random() * charUp.length));
        }
        return text;
      // Write functions for multiple sets of characters here
    },
    downNum: function(l) {
        var text = ""
        var charUp = "abcdefghijklmnopqrstuvwxyz0123456789"
        for (var i = 0; i < l; i++) {
            text += charUp.charAt(Math.floor(Math.random() * charUp.length));
        }
        return text;
      // Write functions for multiple sets of characters here
    },
    upSpecial: function(l) {
        var text = ""
        var charUp = "!@#$%^&*(){}[]=<>/,.|~ABCDEFGHIJKLMNOPQRSTUVWXTZ"
        for (var i = 0; i < l; i++) {
            text += charUp.charAt(Math.floor(Math.random() * charUp.length));
        }
        return text;
      // Write functions for multiple sets of characters here
    },
    downSpecial: function(l) {
        var text = ""
        var charUp = "!@#$%^&*(){}[]=<>/,.|~abcdefghijklmnopqrstuvwxyz"
        for (var i = 0; i < l; i++) {
            text += charUp.charAt(Math.floor(Math.random() * charUp.length));
        }
        return text;
      // Write functions for multiple sets of characters here
    },
    upNum: function(l) {
        var text = ""
        var charUp = "ABCDEFGHIJKLMNOPQRSTUVWXTZ0123456789"
        for (var i = 0; i < l; i++) {
            text += charUp.charAt(Math.floor(Math.random() * charUp.length));
        }
        return text;
      // Write functions for multiple sets of characters here
    },
    upDownNum: function(l) {
        var text = ""
        var charUp = "ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghijklmnopqrstuvwxyz0123456789"
        for (var i = 0; i < l; i++) {
            text += charUp.charAt(Math.floor(Math.random() * charUp.length));
        }
        return text;
      // Write functions for multiple sets of characters here uppernumberspecial
    },
    upSpecialNum: function(l) {
        var text = ""
        var charUp = "ABCDEFGHIJKLMNOPQRSTUVWXTZ0123456789!@#$%^&*(){}[]=<>/,.|~"
        for (var i = 0; i < l; i++) {
            text += charUp.charAt(Math.floor(Math.random() * charUp.length));
        }
        return text;
      // Write functions for multiple sets of characters here uppernumberspecial
    }
    

   
   
    };

    li = parseInt(prompt("Choose a number between 8 and 128"));
    if (li > 100 || li < 8) {
      li = parseInt(prompt("You must choose a number between 8 and 128"))
    } else {
      alertUp = confirm("Do you want to include Uppercase?");
      alertDown = confirm("Do you want to include Lowercase?")
      alertSpecial = confirm("Do you want special characters included?")
      alertNum = confirm("Do you want to include numbers?")
      
    };

    if (alertUp === true && alertDown === false && alertNum === false && alertSpecial === false) {
        return passwordgen.uppercase(li);
    } 
    if (alertUp === true && alertDown === true && alertNum === false && alertSpecial === false){
        return passwordgen.upperLowercase(li);
    } 
    if (alertUp === true && alertDown === true && alertSpecial === true && alertNum === false){
        return passwordgen.upperLowercaseSpecial(li);
    }  
    if (alertUp === true && alertDown === true && alertSpecial === true && alertNum === true){
        return passwordgen.fullset(li);
    } 
    if (alertSpecial === true && alertNum === true && alertUp === false && alertDown === false){
        return passwordgen.numSpecial(li)
    } 
    if (alertSpecial === true && alertUp === false && alertDown === false && alertNum === false){
        return passwordgen.special(li);
    } 
    if (alertNum === true && alertUp === false && alertDown === false && alertSpecial === false){
        return passwordgen.num(li);
    } 
    if (alertDown === true && alertUp === false && alertSpecial === false && alertNum === false){
        return passwordgen.lowercase(li);
    } 
    if (alertDown === true && alertNum === true && alertUp === false && alertSpecial === false) {
    return passwordgen.downNum(li);
    } 
    if (alertSpecial === true && alertUp === true && alertNum === false && alertDown === false) {
        return passwordgen.upSpecial(li)
    } 
    if (alertSpecial === true && alertDown === true && alertUp === false && alertNum === false) {
        return passwordgen.downSpecial(li);
    }
    if (alertSpecial === false && alertDown === false && alertUp === true && alertNum === true){
        return passwordgen.upNum(li);
    }
    if (alertSpecial === false && alertDown === true && alertUp === true && alertNum === true){
        return passwordgen.upDownNum(li);
    }
    if (alertSpecial === true && alertDown === false && alertUp === true && alertNum === true){
        return passwordgen.upSpecialNum(li);
    }
  };
  

  generateBtn.addEventListener("click", writePassword);
clearBtn.addEventListener("click", function() {
    var passwordText = document.querySelector("#password");
passwordText.value = ""
})

