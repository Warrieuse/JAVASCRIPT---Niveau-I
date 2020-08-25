                        //Exercice 11

                      /*du DOM en Javascript.
          Vous pouvez vous servir de ces indices comme base ou bien rédiger
          intégralement votre propre code.*/


// 1) Écrire la fonction JavaScript showHxContent permettant d'afficher le
//contenu du div correspondant au titre sur lequel on clique.

// Indice :
 function showHxContent(pNumber) {
	vDiv = document.getElementById("title" + pNumber);
	vDiv.style.display = "block";
 }
 // je souhaite qu'au clic de l'element ID qui se trouve dans une Div du html
// changr de style en display block
//
//

/*****************************************************************************/

// 2) Écrire la fonction JavaScript hideAllDivs permettant de masquer le
//contenu de tous les div du document.

// Indice :
 function hideAllDivs() {
 	vDivs = document.getElementsByTagName("div");
 	for (var i=0; i<vDivs.length; i++) {
 		vDivs.item(i).style.display="none";
	}
}
// je souhaite que au clic de input ayant pour valeur Masquer
//je récupère toutes les element div
// et la je fait une boucle pour faire un variable i qui est à 0(initialisation);
// puis tant qu'elle est inférieur à vDivs.length cest a dire que tant que
//i est inférieur à la longueur de chaine de caractère.... donc vide(condition);
// j'incrémente d'une i (incrémentation)
// lorsque item est a 0 alors le display change et devient NONE

/********************************************************************************/

// 3) Écrire la fonction alertTitle permettant d'afficher (avec la fonction
// JavaScript alert) le contenu du énième titre, défini par le champ de saisie title.
//
// Indice :
function alertTitle() {
	vHx = document.getElementsByTagName("h1");  // he récupère donc les titres en h1
	vIndice = document.getElementById("title").value;
  // variable qui utilise ID title du HTML avec un valeur
	vIndice = vIndice - 1;
  // je fait -1 a cette variable
	alert(vHx.item(vIndice).firstChild.data);
  //et donc au clic du bouton afficher je veut s'affiche la variable vHx
  //définit au dessus si mon vIndice vaut  affiché son 1er enfant donc le titre
}
//

/******************************************************************************/

// 4) Écrire la fonction deleteTitle permettant d'effacer le contenu du titre
//défini par le champ title. (suppression du nœud fils de type texte)
//
// Indice :
function deleteTitle() {
  vHx = document.getElementsByTagName("h1")
  vIndice = document.getElementById("title").value;
	vIndice = vIndice - 1;
	vHx.item(vIndice).removeChild(vHx.item(vIndice).firstChild);
  // idem au dessus mais j'utilise removeChild pour supprimer le titre
}
//
// 5) Écrire la fonction defineTitle permettant d'affecter le contenu du titre
//défini par le champ title avec la valeur "Nouveau titre". On testera que le
//titre a ou non déjà une valeur (nœud texte) avant l'ajout, afin de la supprimer si besoin.
//
// Indice :
function defineTitle() {
  // idem dessus
  vHx = document.getElementsByTagName("h1")
  vIndice = document.getElementById("title").value;
	vIndice = vIndice - 1;
  //je veut que le texte (vText = noeud TEXT)ce change en nouveau text defini entre parenthèse
	vText = document.createTextNode("Nouveau titre");
  //fais quelque chose avec title ( qui est le noeud enfant)
	if (vHx.item(vIndice).hasChildNodes()) {
    //je designe le titre supprimé
		vHx.item(vIndice).removeChild(vHx.item(vIndice).firstChild);
	}// je le remplace par le nouveau titre designé au dessus
	vHx.item(vIndice).appendChild(vText);
}
