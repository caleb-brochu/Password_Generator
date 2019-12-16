
document.getElementById("generate").addEventListener("click", function userPrompts(){
    let choiceUpper = confirm("Do you want UPPER case characters in your password?");
    let choiceLower = confirm("Do you want LOWER case characters in your password?");
    while(!choiceUpper && !choiceLower)
    {
        alert("Password must contain at least one alphanumberic character, try again!");
        choiceUpper = confirm("Do you want UPPER case characters in your password?");
        choiceLower = confirm("Do you want LOWER case characters in your password?");
    }
        let choiceNumber = confirm("Do you want NUMBERS in your password?");
        let choiceSpecial = confirm("Do you want SPECIAL characters in your password?");
        let choosePasswordLength = prompt("How long do you want your password?");
        while(choosePasswordLength < 8 || choosePasswordLength > 128)
        {
            choosePasswordLength = prompt("Password must be between 8 and 128 characters, try again!");
        }
        return passwordGenerator(choiceUpper, choiceLower, choiceNumber, choiceSpecial, choosePasswordLength);
        
});


function passwordGenerator(upper, lower, number, special, length)
{
    console.log(upper);
    console.log(lower);
    console.log(number);
    console.log(special);
    console.log(length);

    let choices = upper + lower + special + number; 
    let password = "";
    console.log("password", password); 
    for(let i = 0; i < length; i++){
        if(upper && password.length < length)
        {
            password += getUpper();  
        }
        if(lower && password.length < length)
        {
            password += getLower();
        }
        if(number && password.length < length)
        {
            password += getNumber();
        }
        if(special && password.length < length)
        {
            password += getSpecial();
        }
    }
    console.log("password", password);
    return password;
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
