"use strict";
const myUser = {
    firstname: "Elodie",
    lastname: "Muller",
    age: 24,
};
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
const userTest = {
    firstName: "Elodie",
    lastName: "Muller",
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
//les generics
//ici nous avons une fonction qui prends en params un argument et qui le return
//le generics va nous permettre de dire qu'on veut le même type en entrée et en sortie
//ici ArgType (qu'on peut appeller comme on veut) est notre type, qui peut être ce que l'on veut, et qu'on remplace par le type voulu lors du retour
function identity(arg) {
    return arg;
}
const aa = identity("ffe");
//il peut aussi deviner l'argument a utilisé , le type de retour(l'ArgType)
//const aa = identity(5);
function first(arg) {
    return arg[0];
}
const bb = first(["un", "deux", "trois"]);
