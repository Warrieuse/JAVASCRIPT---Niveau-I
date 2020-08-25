      //Exercice 10 : Récapitulons

      /*Maintenant que vous connaissez les variables, conditions, boucles , opérateurs logiques,
       etc de javascript,
      vous pouvez réaliser un petit jeu simple :

      Jeu du plus ou moins

      L'ordinateur va choisir un nombre secret au hasard entre 1 et 100 et vous
      demander de trouver ce nombre.
      En fonction du nombre que vous entrez, il va vous dire s'il est supérieur ou
      inférieur au nombre secret.
      Tant que le nombre entré est différent du nombre secret, il vous demandera
      d'entrer un nombre.
      Si vous trouvez le nombre secret, la partie s'arrête et vous avez gagné.

      Si vous souhaitez aller plus loin, vous pouvez créer un compteur qui vous dira
      en combien de coups vous avez trouvé le nombre secret, donner un choix
      de difficulté, etc...*/

      //je crée un fonction pour mettre en relation mon jeu avec mon btn
      function partiefacile(){

        // je crée mes variables
      var solution = Math.round(Math.random() * 10) + 1 // l'ordi choisi un nbr entier aléatoire
      //entre 1 et 10
      var essai = 5 // l'utilisateur à 5 chance pour trouver le nbr
      var coup = 0 // je fait un compteur qui calcul le nbr de coup

      // donc quand la fonction se déclanche voila les instructions
      do {
        // affiche d'une fenetre demandant un nombre
        var saisie = parseInt(prompt("Entrez le nombre de votre choix"))
        if (isNaN(saisie)){ // l'utilisateur dois entrez un nbr
          alert("FAUX, Merci de tapez un nombre")
        }
        // si mauvais nbr supp
        else if (saisie > solution) {
          alert("Perdu, la solution est inférieure")
          // on enlève 1 essai pour limiter les coups
          essai = essai - 1
          coup = coup + 1 // on rajoute un coup a chaque passage
          }
          // si mauvais nbr inf
        else if (saisie < solution){
          alert("perdu, la solution est supérieure")
          essai = essai - 1
          coup = coup + 1
          }
          // sinon la réponse et forcement la bonne
        else{}
       }

      // début boucle tant que ...
      while ((saisie !== solution) && (essai > 0) && (coup > 0));

      if (isNaN(saisie)){ // rajout de if a ce niveau sinon c'est gagné
        alert("Au revoir")// methode différent dans MOYEN
      }
      // donc si le nbr d'essai n'est pas epuisée alors on gagne ou perd.
      else if (essai > 0) {
        alert("Bravo, vous avez gagné en "+ coup +" coups.")
      } else {
        alert("Désolé, vous avez Perdu")
      }
    }// fermeture fonction facile



    /*********************************MOYEN*********************************/

// Le code n'est pas fini il manque la condition d'afiche du nbr de coup
// et la condition d'entrez un nbr avec isNaN...
// térence m'as dis de cré une variable fausse par defaut et si ell est vraie
// la boucle commence pour le moment pas reussi
// ces conditions je les ai faites pour le niveaux facile mais j'ai eut besoin
// de noter plusieur fois la commande alors que celle de térence non...
    function partiemoyen()  {

    var solution = Math.round(Math.random() * 50) + 1
    var essai = 10

    var saisie = parseInt(prompt("Entrez le nombre de votre choix"))

    do {
      var saisie = parseInt(prompt("Entrez le nombre de votre choix"))
       if (saisie > solution) {
        alert("Perdu, la solution est inférieure")
        essai = essai - 1
        }
      else if (saisie < solution){
        alert("perdu, la solution est supérieure")
        essai = essai - 1
        }
      else{}
//    }/*fermeture booleen*/
    }/*fermeture do*/

    while ((saisie !== solution) && (essai > 0));

    if (essai > 0) {
      alert("Bravo, vous avez gangé")
    } else {
      alert("Désolé, vous avez Perdu")
    }
  }// fermeture fonction moyen

/**********************************DIFFICILE***********************************/

    function partiedifficile()  {
    var solution = Math.round(Math.random() * 100) + 1;
    var essai = 7;

    do {
      var saisie = parseInt(prompt("Entrez le nombre de votre choix"))
      if (saisie > solution) {
        alert("Perdu, la solution est inférieure")
        essai = essai - 1;
        }
      else if (saisie < solution){
        alert("perdu, la solution est supérieure")
        essai = essai - 1
        }
      else{}
     }

    while ((saisie !== solution) && (essai > 0));

    if (essai > 0) {
      alert("Bravo, vous avez gangé")
    } else {
      alert("Désolé, vous avez Perdu")
    }
  }// fermeture fonction difficile
