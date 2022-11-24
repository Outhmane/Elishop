$( document ).ready(function() {



  $.post("http://localhost/E-commerce/Controllers/verificationSession.php",
  {
    chargerIndex: "verification",
  },
  function(data,status){
  
    if(data!= 'false')
    {
      data = JSON.parse(data);
      if(data.idrole==1)
      {
      $.post("http://localhost/E-commerce/Controllers/listeGestionProduit.php",
    {
      chargerProduit: "produit",
    },
    function(retour,status){
     
       var res=jQuery.parseJSON(retour);
       
         if (res.length>0) {
        
         for (var i =0;i< res.length;i++)
         {
           
         

            $('#produit').append("<tr id='ligneproduit_"+res[i].idproduit+"'><td><center><input type='file' id='modifimage"+res[i].idproduit+"' style='display:none' /><img id='imagep"+res[i].idproduit+"' style='width:100px ; heigth:100px;' src='"+res[i].imagep+"'></center></td><td><input type='text' id='modiflibelle"+res[i].idproduit+"' style='display:none' value='"+res[i].libelle+"'/><span id='valLibelle"+res[i].idproduit+"' >"+res[i].libelle+"</span></td><td><input type='text' id='modifPrix"+res[i].idproduit+"' style='display:none' value='"+res[i].prix+"'/><span id='valPrix"+res[i].idproduit+"' >"+res[i].prix+"</span></td><td><input type='text' id='modifQuantite"+res[i].idproduit+"' style='display:none' value='"+res[i].quantite+"'/><span id='valQuantite"+res[i].idproduit+"' >"+res[i].quantite+"</span></td><td><button type='button' id='modifier"+res[i].idproduit+"' onclick='afficherContenu("+res[i].idproduit+")' class='btn btn-primary'>Modifier</button><button type='button' id='sauvegarder"+res[i].idproduit+"' style='display:none' onclick='modifierProduit("+res[i].idproduit+")' class='btn btn-primary'>Sauvegarder</button></td><td><button type='button' onclick='supprimerProduit("+res[i].idproduit+")' class='btn btn-primary'>Supprimer</button></td></tr>");
         }
       }
       
       $("#gestionAdmin").css('display','block');
       $("#Auth").css('display','none');
       $("#gestionClient").css('display','none');
       $("#panier").css('display','none');

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