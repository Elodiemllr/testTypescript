//Je peux créer un Alias de type, c'est pour faire un raccourci sur un autre type
//ça peut me permet d'y voir plus clair
type User = { firstName: string; lastName: string };
//ici UserName recup le type de firstName
type UserName = User["firstName"];
//ici Usertype recupère l'ensemble des clefs de User, donc firstName ou LastName
type UserNametwo = keyof User;

const myUser = {
    firstname: "Elodie",
    lastname: "Muller",
    age: 24,
};
//pour extraire un type sur quelque chose d'existant
//en general, on utilise les autres pour pouvoir declarer en amont le type
type UserNameThree = typeof myUser;

let a: number = 400;
const b: string = "hello World";
//| permet de dire "ou" afin de lui donner different type possible
const c: number | string = 3;
const d = true;
const e: null = null;
//tableau de chaine de caractere
const array: string[] = ["un", "deux", "trois"];
//tableau mixe
const f: any[] = ["une", "deux", 3];
//objet avec nom des clefs et type
// le ? voudra dire que c'est une proprieté optionnelle
// on peut avoir un objet avec une infinité de clef [key: string]: string
const user: {
    firstName: string;
    lastName?: string;
    age: number;
} = {
    firstName: "Elodie",
    age: 24,
};

const userTest: User = {
    firstName: "Elodie",
    lastName: "Muller",
};

const date: Date = new Date();
/*a = "coucou"; =faux car par le même type*/

/* Dans cette fonction on va preciser le type du parametre de notre fonction, ici on veut que son parametre 'nomnbre' soit un number */
/*On peut aussi preciser le return  que l'on attends, ici par exemple on attends de recevoir true ou false*/
//isPaire est de type function
//notre params notre est un number et notre function attendra un return  boolean
//void est utilisé lorsque on n'attends rien en retour
const isPair: Function = (nombre: number): boolean => {
    return nombre / 2 === 0;
};

const testVoid: Function = (): void => {
    console.log("void test");
};
/* là je demande si a est pair, je dois donc avoir true ou false */
console.log(isPair(a));

//les generics
//ici nous avons une fonction qui prends en params un argument et qui le return
//le generics va nous permettre de dire qu'on veut le même type en entrée et en sortie
//ici ArgType (qu'on peut appeller comme on veut) est notre type, qui peut être ce que l'on veut, et qu'on remplace par le type voulu lors du retour
function identity<ArgType>(arg: ArgType): ArgType {
    return arg;
}
const aa = identity<String | number>("ffe");
//il peut aussi deviner l'argument a utilisé , le type de retour(l'ArgType)
//const aa = identity(5);

function first<Type>(arg: Type[]): Type {
    return arg[0];
}

const bb = first(["un", "deux", "trois"]);
