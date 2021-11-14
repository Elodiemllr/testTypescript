
console.log(a);

//je recupère mon element qui à l'id compteur (le button)
//j'indique et je force le type de ma variable avec 'as'
const compteur = document.querySelector("#compteur") as HTMLButtonElement;
//Je peux aussi au lieu d'utiliser as, utiliser <montype>
//const compteur = <HTMLButtonElement>document.querySelector("#compteur");

//je créer une variable i avec comme valeur 0
let i = 0

//Puis je créer une function 'increment', avec en params notre event recuperé(notre click)
//cette function va incrémenter notre variable i 
const increment: Function (e) => {
    i++;
    //Puis dans mon button je selectionne la span, 
    //et j'utilise innetText pour modifier le text et lui ajouter notre variable i
    //Typescript nous oblige à convertir notre variable i en texte 
    //car nous souhaitons modibier une string de notre span et non un number
    compteur.querySelector('span').innerText =i.toString()
};

//j'ajoute un eventListener,
//Je déclenche cette function au click sur mon element  button 
compteur.addEventListener('click', increment)