              //Exercice 6 : Et si...encore

/*Votre employeur, une boite de nuit un peu particulière ,
n'est pas satisfait. Il dit que votre programme laisse rentrer
 n'importe qui!
Il vous donne les instructions suivantes pour améliorer votre
programme:
- si la personne a moins de 18 ans, elle ne rentre pas.
- si elle a 18 ans ou plus, elle peut rentrer.
- si elle a plus de 70 ans, elle ne peut pas entrer(la nuit dernière,
  2 hanches cassées et une bataille de déhambulateur ont eu lieu )
- si la personne entre autre chose qu'un nombre, elle n'entre pas

Le programme doit demander l'age de la personne puis lui afficher
l'acceptation ou le refus.

Regardez du coté de prompt() , ça pourrait vous être utile et pour
 éviter les fraudeurs,
cherchez à tester si les valeurs entrées sont numériques.*/

var age = prompt("Bienvenue, Veuillez entrez votre age ?")
  if(isNaN(age))
    {alert("Vous ne nous avais pas indiqué votre age, nous vous remercions de votre visite, au revoir !!")}
  else if (age < 18)
    {confirm("Vous n'etes pas majeur, donc vous ne pouvez pas rentrez")}
  else if (age > 70)
          {alert("Nous sommes navrés mais notre établissement n'est pas adapté"+
          "à vous, nous sommes dans le regret de devoir vous laisser partir dans"+
          " un autre centre.")
              }
      else
          {alert("Bienvenue dans notre établissement, vous pouvez entrez")}
