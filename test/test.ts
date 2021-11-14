let a: number = 400;

a = "coucou"; /*faux car par le même type*/

/* Dans cette fonction on va preciser le type du parametre de notre fonction, ici on veut que son parametre 'nomnbre' soit un number */
/*On peut aussi preciser le return  que l'on attends, ici par exemple on attends de recevoir true ou false*/
function isPair(nombre: number): boolean {
    return nombre / 2 === 0
}

/* là je demande si a est pair, je dois donc avoir true ou false */
console.log(isPair(a));


/*ici une function qui prends en params un tableau 't' et qui a pour function de modifier ce tableau et d'ajouter un salut à chaque fois
*/
function salut(t) {
    for (let item of t )
}