"use strict";
let a = 400;
const b = "hello World";
//| permet de dire "ou" afin de lui donner different type possible
const c = 3;
const d = true;
const e = null;
//tableau de chaine de caractere
const array = ["un", "deux", "trois"];
//tableau mixe
const f = ["une", "deux", 3];
//objet avec nom des clefs et type
// le ? voudra dire que c'est une proprieté optionnelle
// on peut avoir un objet avec une infinité de clef [key: string]: string
const user = {
    firstName: "Elodie",
    age: 24,
};
const date = new Date();
/*a = "coucou"; =faux car par le même type*/
/* Dans cette fonction on va preciser le type du parametre de notre fonction, ici on veut que son parametre 'nomnbre' soit un number */
/*On peut aussi preciser le return  que l'on attends, ici par exemple on attends de recevoir true ou false*/
//isPaire est de type function
//notre params notre est un number et notre function attendra un return  boolean
//void est utilisé lorsque on n'attends rien en retour
const isPair = (nombre) => {
    return nombre / 2 === 0;
};
const testVoid = () => {
    console.log("void test");
};
/* là je demande si a est pair, je dois donc avoir true ou false */
console.log(isPair(a));
/*ici une function qui prends en params un tableau 't' et qui a pour function de modifier ce tableau et d'ajouter un salut à chaque fois
 */
