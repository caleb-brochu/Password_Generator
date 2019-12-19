# Password_Generator

The goal of this project is was to create a random password generator based on user input criteria. The user has the choice to seclect a least one of the following uppercase char, lowercase char, number, and special char. The user also has the choice of password length which must be between 8 and 128 characters. 

In script.js, an event listenter was used for the two buttons 'generate password' and 'Copy to Clipboard'. Once generate password is selected the user will be ased to confirmo list of password criteria, if all are false error message will popup and promt the user to enter at least on character type.  The results of the propts are passed through to the passwordGenerator Function.

The passwordGenerator function take 4 boolean values and 1 integer. The values are used in condition statements within an object. If true and password length has not exceeded the another function is called generating a random character according to type selected. 

To call the function within an object keys of randomChar were stored in an array and math.random was used to randomly select the array index. The resut is then passed through a switch statement depending on chriteria goes into another function generating a random char. The swithch statement and math.random function are within a while loop, which will allow the loop until password length is met. 


https://caleb-brochu.github.io/Password_Generator/