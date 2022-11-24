$( document ).ready(function() {

  var nombreArticles = sessionStorage.getItem("countArticles");
 if(nombreArticles){
     
     sessionStorage.setItem('countArticles', nombreArticles);
     $("#compteurPanier").html(sessionStorage.getItem("countArticles"));
 }

    $.post("http://localhost/E-commerce/Controllers/verificationSession.php",
    {
      chargerIndex: "verification",
    },
    function(data,status){
      var data = JSON.parse(data);
      if(data!= 'false')
      {
        
        if(data.idrole==2)
        {
          
         
        $.post("http://localhost/E-commerce/Controllers/commande.php",
      {
        chargerCommande: "commandes",
      },
      function(retour,status){
       
         var res=jQuery.parseJSON(retour);
         
           if (res.length>0) {
          
           for (var i =0;i< res.length;i++)
           {
             
           
  
              $('#commande').append("<tr id='lignecommande_"+res[i].idutilisateur+"'><td>"+res[i].libelle+"</td><td>"+res[i].quantiteProduit+"</td><td>"+res[i].datecommande+"</td><td>"+res[i].datelivraison+"</td><td>"+res[i].etatcommande+"</td></tr>");
           }
         }
         
         $("#gestionAdmin").css('display','none');
         $("#Auth").css('display','none');
         $("#gestionClient").css('display','block');
         $("#panier").css('display','block');
  
      });
       
      }
      else
      {
        window.location.href="http://localhost/E-commerce/";
  
      }
    }
    else{
  
         window.location.href="http://localhost/E-commerce/";
  
      }
  
  
    });
  
  
  
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