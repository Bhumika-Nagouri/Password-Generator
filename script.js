function password(length, uppercase, lowercase, numbers ){
    const Uppercases = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const Lowercases = "abcdefghijklmnopqrstuvwxyz";
    const Numbers = "1234567890";
    const Symbols = "!@#$%&*?";

    let allowedchars = "";
    let password = "";

    allowedchars +=  uppercase ? Uppercases : "";
    allowedchars +=  lowercase ? Lowercases : "";
    allowedchars +=  numbers ? Numbers : ""; 
    allowedchars +=  symbols ? Symbols : ""; 

    if(allowedchars.length === 0){
        console.log("Altleast 1 character should be included");
    }
    if (length <=0){
       console.log("Password length cant be or below 0"); 
    }

    for(let i = 0; i<= length; i++){
       let index = Math.floor(Math.random() * allowedchars.length);
       password += allowedchars[index];
    }
    
    return password;
}


const uppercase = true;
const lowercase = true;
const numbers = true;
const symbols = true;
const passwordlength = 12;

const Passwords = password(passwordlength, uppercase, lowercase, numbers, symbols)
    console.log(`Generate password: ${Passwords}`);
