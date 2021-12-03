/*
 * Cette fonction doit ajouter un nouveau message à la liste des messages existants
 *
 *
 * Voir le fichier de tests associé (spec/wallSpec.js)
 */
function wall(existingMessages, newMessage) {
    existingMessages.push(newMessage);
    return existingMessages;
    
    // CODE HERE
}

export { wall };