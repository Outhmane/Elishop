$( document ).ready(function() {
   // remplir le compteur du panier
  var nombreArticles = sessionStorage.getItem("countArticles");
 if(nombreArticles){
     
     sessionStorage.setItem('countArticles', nombreArticles);
     $("#compteurPanier").html(sessionStorage.getItem("countArticles"));
 }

 // remplir les information livraison :

 $.post("http://localhost/E-commerce/Controllers/verificationSession.php",
  {
    chargerIndex: "verification",
  },
  function(data,status){
    var data = JSON.parse(data);

       if(data.idrole == 1)
       {
        $("#gestionAdmin").css('display','block');
        $("#Auth").css('display','none');
        $("#gestionClient").css('display','none');
        $("#panier").css('display','none');
        $(".ajoutPanier").css('display','none');
       }
       if(data.idrole == 2)
       {
        $("#gestionAdmin").css('display','none');
        $("#Auth").css('display','none');
        $("#gestionClient").css('display','block');
        $("#panier").css('display','block');
        $(".ajoutPanier").css('display','block');
       }
        $("#nomLivraison").val(data.nom);
        $("#prenomLivraison").val(data.prenom);
        $("#addressLivraison").val(data.adresse);
        $("#emailLivraison").val(data.email);

        $( "#nomLivraison" ).prop( "disabled", true );
        $( "#prenomLivraison" ).prop( "disabled", true );
        $( "#addressLivraison" ).prop( "disabled", true );
        $( "#emailLivraison" ).prop( "disabled", true );
    });

 

 // afficher la liste des articles dans le panier
 var Article = sessionStorage.getItem("listArticles");
      Article = JSON.parse(Article);
     var listArticles =Object.values(Article);
     var totalFacture = 0;
     listArticles.forEach(e => {
       $("#produitAchat").append("<li id='ligne_"+e.idProd+"' class='list-group-item d-flex justify-content-between lh-condensed'><div><button type='button' onclick='suppressionProdPanier("+e.idProd+")' class='close' aria-label='Close'><span aria-hidden='true'>&times;</span></button><h6 class='my-0'>"+e.libProd+"</h6></div><span class='text-muted'>"+e.prixProd+" € * "+e.quantiteProd+"</span></li>");
       totalFacture = totalFacture + (e.prixProd * e.quantiteProd);
      });
     
     $("#produitAchat").append("<li class='list-group-item d-flex justify-content-between'><span>Total (EURO)</span><strong style='margin-left: 150px;' id='montantTotal'>"+totalFacture+" €</strong></li>");

});


function suppressionProdPanier(idProduit)
{
    var Article = sessionStorage.getItem("listArticles");
      Article = JSON.parse(Article);
     var listArticles =Object.values(Article);
     
     var totalFacture = 0;
  
         for(var i=0;i <listArticles.length; i++){
            if(listArticles[i].idProd == idProduit)
            {
                var nombreArticles = sessionStorage.getItem("countArticles");
                sessionStorage.setItem('countArticles', nombreArticles - listArticles[i].quantiteProd);
                $("#compteurPanier").html(sessionStorage.getItem("countArticles"));

                $("#produitAchat").find('#ligne_'+listArticles[i].idProd).remove();
                listArticles.splice(i,1);
            }else{
                totalFacture = totalFacture + (listArticles[i].prixProd * listArticles[i].quantiteProd);
            }

        }
    
      sessionStorage.removeItem('listArticles');
      let cartItems = null;
      for(var i=0;i <listArticles.length; i++){
          
        if(cartItems != null)
        {
          if(cartItems[listArticles[i].idProd] == undefined)
          {
            cartItems = {
                ...cartItems,
                [listArticles[i].idProd]:listArticles[i]
              }
          }
        }
        else
        {
          cartItems = {
            [listArticles[i].idProd]:listArticles[i]
          }
        }
      }
      
      
    sessionStorage.setItem("listArticles",JSON.stringify(cartItems));

      $("#produitAchat").find("#montantTotal").html('');
      $("#produitAchat").find("#montantTotal").html(totalFacture+" €");

      

     
}

function confirmerCommande()
{
    var Article = sessionStorage.getItem("listArticles");
      Article = JSON.parse(Article);
     var listArticles =Object.values(Article);

   $.post("http://localhost/E-commerce/Controllers/insertCommande.php",
   {

    listArticle:listArticles

   },
   function (retour)
   {
    sessionStorage.removeItem('listArticles');
    sessionStorage.removeItem('countArticles');
    window.location.href="http://localhost/E-commerce/Views/MesCommandes.html";
    console.log(retour);
   

   });

}
