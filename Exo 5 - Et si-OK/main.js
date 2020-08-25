                       //Exercice 5 : Et si...

/*Votre employeur, une boite de nuit un peu particulière ,
vous demande de coder son nouveau programme de sélection des
personnes acceptées dans son établissement.*/

/*Il vous donne les infos suivantes :
- si la personne a moins de 18 ans, elle ne rentre pas.
- si elle a plus de 18 ans, elle peut rentrer.*/


/*Le programme doit demander l'age de la personne puis lui afficher
l'acceptation ou le refus.*/

//Regardez du coté de prompt() , ça pourrait vous être utile.
/*prompt() affiche une boite de dialogue*/

var age = prompt("Entrez votre age")
if(age < 18)
  {alert("Vous n'etes pas majeur, donc vous ne rentrez pas")}
else
  {alert("Bienvenue dans notre établissement")}
