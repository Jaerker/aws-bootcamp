export default function GeneratePassword(body){
    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseChars = upperCaseChars.toLowerCase();
    const symbolChars = '?!=)(/&%¤#@£$€-_';
    const numberChars = '0123456789';

    let charPool = '';
    let password = ''; 

    if(body.capital){
        charPool += upperCaseChars;
        password += upperCaseChars[Math.floor(Math.random() * upperCaseChars.length)]
    }
    if(body.lower){
        charPool += lowerCaseChars;
        password += lowerCaseChars[Math.floor(Math.random() * lowerCaseChars.length)]
        
    }
    if(body.symbols){
        charPool += symbolChars;
        password += symbolChars[Math.floor(Math.random() * symbolChars.length)]
        
    }
    if(body.numbers){
        charPool += numberChars;
        password += numberChars[Math.floor(Math.random() * numberChars.length)]
    }

    for(let i=password.length; i < body.length; i++){
        password += charPool[Math.floor(Math.random() * charPool.length)]
    }

    return password;

}