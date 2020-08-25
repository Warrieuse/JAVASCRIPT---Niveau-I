              //Exercice 8 : You get what you switch

              /*Votre client veganpourlesnuls.com veux sensibiliser le grand public sur la consommation
              des produits d'origine animale.
              Il a un petit projet a vous proposer :
              Créez un programme qui demande à l'utilisateur d'entrer un produit et qui lui renvoie un
              message lui disant si celui ci est d'origine animale.

              Pour commencer, il vous donne une petite liste d'aliments et des réponses qu'il
              souhaiterai voir :
              - tomate : bon pour la santé et vegan
              - oeuf : d'origine animale même si ça n'est pas directement leur viande
              - lait : d'origine animale même si ça n'est pas directement leur viande
              - tofu : issu du soja donc vegan mais sa culture intensive n'est pas top niveau environnement
              - miel : abeille = animal = non vegan
              - foie gras : Pire aliment non vegan

              Si l'utilisateur entre autre chose que les éléments de cette liste, le programme
              lui répondra qu'il n'a pas d'infos dessus.

              Renseignez vous sur la structure switch en javascript pour réaliser ce programme.*/

              var repas = prompt("Entrez votre produit") /*je crée ma variable repas et demande a ce que l'utilisateur
              entre son produit donc la valeur*/

              switch (repas) {/* switch permet d'eviter trop d'imbrication if else*/
                case "tomate":/*si utilisateur entre tomate*/
                  alert("bon pour la santé et vegan")/*alors il vera un fennetre s'afficher et dire le texte*/
                  break;/*break permet de passer a la suite*/
                case "oeuf":
                  alert("d'origine animale même si ça n'est pas directement leur viande")
                  break;
                case "lait":
                  alert("d'origine animale même si ça n'est pas directement leur viande")
                  break;
                case "tofu":
                  alert("issu du soja donc vegan mais sa culture intensive n'est pas top niveau environnement")
                  break;
                case "miel":
                  alert("abeille = animal = non vegan")
                  break;
                case "foie gras":
                  alert("Pire aliment non vegan")
                  break;

                default:/*si utilisateur entre un produit qui n'est pa  s dans la liste alors le mess change*/
                  alert("nous avons aucune information sur ce produit")

              }
