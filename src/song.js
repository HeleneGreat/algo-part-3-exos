/*
 * retourner la chanson en fonction du nombre de kilomètres
 *
 * ex: song(2) =>
 *      1 km à pied, ça use, ça use, ça use,
 *      1 km à pied, ça use les souliers
 *      2 km à pied, ça use, ça use, ça use,
 *      2 km à pied, ça use les souliers
 *
 * Voir le fichier de tests associé (spec/songSpec.js)
 */
function song(km) {
    
    let i = 0;     
    let message = "";      
    while (i < km) {         
        message += (i + 1) + " km à pied, ça use, ça use, ça use,\n" + (i + 1) + " km à pied, ça use les souliers\n";         
        ++i;     
        }      
    return message;

    // CODE HERE
}

export { song };