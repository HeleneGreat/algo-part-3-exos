/*
 * Cette fonction doit retourner 'Even' quand on lui passe un nombre pair
 * Et 'Odd' quand on lui passe un nombre impair
 *
 * Voir le fichier de tests associé (spec/oddOrEvenSpec.js)
 */
function oddOrEven(number) {
    if (number % 2 === 0) {return 'Even';}
    else {return 'Odd';}
    // CODE HERE
}

export { oddOrEven };