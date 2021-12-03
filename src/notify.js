/*
 * Cette fonction doit retourner un tableau contenant deux informations:
 * - le nombre de message
 * - la couleur de la notification
 *
 * Si il y a plus de 5 messages la notification 'green' par défaut devient 'red'
 *
 * Voir le fichier de tests associé (spec/notifySpec.js)
 */
function notify(messages) {
    // CODE HERE
    let counter = messages.length;
    let color = 'green';
        if (counter > 5) {color = 'red';}


    return [counter, color];


}

export { notify };