
let generatePW = document.getElementById("generate");
let copyPW = document.getElementById("copy");


generatePW.addEventListener("click", function userPrompts(){
    let choiceUpper = confirm("Do you want UPPER case characters in your password?");
    let choiceLower = confirm("Do you want LOWER case characters in your password?");
    let choiceNumber = confirm("Do you want NUMBERS in your password?");
    let choiceSpecial = confirm("Do you want SPECIAL characters in your password?");

    while(!choiceUpper && !choiceLower && !choiceSpecial && !choiceNumber)
    {
        alert("Password must contain at least one character type, try again!");
        choiceUpper = confirm("Do you want UPPER case characters in your password?");
        choiceLower = confirm("Do you want LOWER case characters in your password?");
        choiceNumber = confirm("Do you want NUMBERS in your password?");
        choiceSpecial = confirm("Do you want SPECIAL characters in your password?");
    }

        let choosePasswordLength = prompt("How long do you want your password?");
        while(choosePasswordLength < 8 || choosePasswordLength > 128)
        {
            choosePasswordLength = prompt("Password must be between 8 and 128 characters, try again!");
        }
        return passwordGenerator(choiceUpper, choiceLower, choiceNumber, choiceSpecial, choosePasswordLength);
        
});


copyPW.addEventListener("click", function(event) {
        
    /* Get the text field */
    let copyText = document.getElementById("secure");

    /* Select the text field */
    copyText.select();

    /* Copy the text inside the text field */
    document.execCommand("copy");

})


function passwordGenerator(upper, lower, number, special, length)
{
    
    let password = "";

    let randomChar = {
        charUpper: function()
        { 
            if(upper && password.length < length)
            {
                password += getUpper();  
            }
            return password;
        }, 
        charLower: function()
        {        
            if(lower && password.length < length)
            {
                password += getLower();
            }
            return password;
        },
        charNumber: function()
        {        
            if(number && password.length < length)
            {
                password += getNumber();
            }
            return password;
        },
        charSpecial: function()
        {        
            if(special && password.length < length)
            {
                password += getSpecial();
            }
            return password;
        }
    }


    while(password.length < length){
        
        const keys = Object.keys(randomChar);
        const randomNum = keys[Math.floor(Math.random() * keys.length)];
        switch(randomNum){
            
            case 'charUpper':
                randomChar.charUpper();
                break;
            case 'charLower':
                randomChar.charLower();
                break;
            case 'charNumber':
                randomChar.charNumber();
                break;
            case 'charSpecial':
                randomChar.charSpecial();
                break;
        }
    }
    
    document.getElementById("secure").value = password;
    

}

function getUpper()
{
    return String.fromCharCode(Math.floor(Math.random()* 26) + 65);
}
function getLower()
{
    return String.fromCharCode(Math.floor(Math.random()* 26) + 97);
}
function getNumber()
{
    return String.fromCharCode(Math.floor(Math.random()* 10) + 48);
}
function getSpecial()
{
    let specialChar = [(String.fromCharCode(Math.floor(Math.random()* 16) + 32)), (String.fromCharCode(Math.floor(Math.random()* 7) + 58)), (String.fromCharCode(Math.floor(Math.random()* 6) + 91))];
    return specialChar[Math.floor(Math.random()*3)];
}
