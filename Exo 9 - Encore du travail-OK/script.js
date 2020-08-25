                      //Exercice 9 : Encore du travail

/*Vous êtes un péon employé à la mine warcraft & co qui contient 100 unités d'or à extraire.
Vous ne pouvez porter qu'une unité d'or à la fois.
Réalisez un programme qui vous permettra d'extraire l'or de cette mine et quand elle sera vide,
 de vous arrêter.

Au départ : mine = 100;
Tant qu'il reste de l'or dans la mine, retirez 1 unité d'or et annoncez au contremaitre combien
il reste d'or dans la mine.
Dés que la mine est vide, arrêtez de travailler.Faites bien attention à cette dernière
condition sinon vous risquez de travailler jusqu'à la fin des temps !

Pour réaliser cet exercice, renseignez vous sur les boucles en javascript.*/


var mine = 100;

//Ecrivez ici la boucle qui vous permet d'enlever 1 unité d'or de la mine et d'annoncer
//dans la console combien il reste d'or dans la mine.

while (mine > 0) {/*tant que la variable mine est supp à 0 alors
  afficher le nbr d'unités qu'il reste et enlevé une unités a chaque passage*/
    alert("Il me reste " + mine + " unités d'or dans la mine.")
    mine = mine - 1;
}

if(mine == 0 ) /*quand la var est a 0 alors on affiche qu'il y a plus d'or*/
{alert("Vous avez extrait toutes les unités d'or")}
else {}/*sinon rien */
