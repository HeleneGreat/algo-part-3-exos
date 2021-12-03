/*
 * Pour chaque nombre compris entre min et max
 * Si le nombre est divisible par 3 => Fizz
 * Si le nombre est divisible par 5 =>  Buzz
 * Si le nombre est divisible par 3 et par 5 => FizzBuzz
 * Sinon retourner le nombre
 *
 * Voir le fichier de tests associé (spec/fizzBuzzSpec.js)
 */
function fizzBuzz(min, max) {
    // CODE HERE
    // essai en suivant la logique de Song.js :
    
  
    let i = min;
    let message = [];


    while (min <= i <= max){
        if (i % 3 === 0){
        message.push("Fizz"); return message}
        else if (i % 5 === 0) {
        message.push("Buzz"); return message}
        else if (i % 3 === 0 || i % 5 === 0) {
        message.push("FizzBuzz"); return message}
        else {message.push(i); return message}
        ++i;
    }


/* 1er essai selon ma logique :
let fizz = "Fizz";
let buzz = "Buzz";
    if (number % 3 === 0) {return fizz;}
    else if (number % 5 === 0) {return buzz;}
    else if (number % 3 === 0 || number % 5 === 0) {return fizz + buzz;}
    else {return number;}
}
*/
}

export { fizzBuzz };