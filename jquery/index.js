$( document ).ready(function() {

    var nombreArticles = sessionStorage.getItem("countArticles");
    if(nombreArticles){
        
        sessionStorage.setItem('countArticles', nombreArticles);
        $("#compteurPanier").html(sessionStorage.getItem("countArticles"));
    }
});

function panier(idproduit, libelle, prix)
{

 var nombreArticles = sessionStorage.getItem("countArticles");
 nombreArticles = parseInt(nombreArticles);
 if(nombreArticles){
     
     sessionStorage.setItem('countArticles', nombreArticles + 1);
     $("#compteurPanier").html(sessionStorage.getItem("countArticles"));
 }else{
  sessionStorage.setItem('countArticles', 1);
  $("#compteurPanier").html(sessionStorage.getItem("countArticles"));
 }




}