console.log("hello world");

//je recupère mon element qui à l'id compteur (le button)
//j'indique et je force le type de ma variable avec 'as'
const compteur = document.querySelector("#compteur") as HTMLButtonElement;
//Je peux aussi au lieu d'utiliser as, utiliser <montype>
//const compteur = <HTMLButtonElement>document.querySelector("#compteur");

//je créer une variable i avec comme valeur 0
let i = 0;

//Puis je créer une function 'increment', avec en params notre event recuperé(notre click)
//cette function va incrémenter notre variable i
const increment = (e: Event) => {
    e.preventDefault();
    i++;
    //  car peut être null donc on utilise ?
    //Puis dans mon button je selectionne la span,
    const span = compteur?.querySelector("span");

    //si notre span existe alors je l'incremente
    //et j'utilise innetText pour modifier le text et lui ajouter notre variable i
    //Typescript nous oblige à convertir notre variable i en texte
    //car nous souhaitons modibier une string de notre span et non un number
    if (span) {
        span.innerText = i.toString();
    }
};

//j'ajoute un eventListener,
//Je déclenche cette function au click sur mon element  button
//le point d'interoggation nous permet de lui dire d'utiliser l'addEventLinstener seulement si notre var compteur existe
compteur.addEventListener("click", increment);
