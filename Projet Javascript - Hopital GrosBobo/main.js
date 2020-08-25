function visible(pNumber){
  /*créations de mes variables*/
  vSpan = document.getElementById("clik"+ pNumber)
  vSpanActive = document.getElementsByClassName("active")

  vArticle = document.getElementById("text" + pNumber)
  vArticleActive = document.getElementsByClassName("textactive")


  /*que dois tu faire avec ces variables*/
  vSpanActive[0].classList.remove("active");
    /*enlève la class active à l'element qui a cette class le 1er[0]*/
  vSpan.classList.add("active");
    /*et tu le rajoute sur l'element qui contient ID+pNumber cliqué*/

  vArticleActive[0].classList.remove("d-block")
    /*au clic tu efface la class d-block*/
  vArticleActive[0].classList.remove("textactive")
    /* au clic tu efface la class textactive au 1er element
    avec cette class*/
  vArticle.classList.add("textactive")
    /*au clic tu rajoute la class textactive à lIDtext cliqué*/
  vArticle.classList.add("d-block")
    /*et tu lui le met en display block*/


    //il y a une auytre méthode
  // vArticleActive.style.display="block";
}
