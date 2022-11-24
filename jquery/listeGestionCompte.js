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

      $.post("http://localhost/E-commerce/Controllers/listeGestionCompte.php",
      {
        chargerCompte: "compte",
      },
      function(retour,status){
        
         var res=jQuery.parseJSON(retour);
         
           if (res.length>0) {
          
           for (var i =0;i< res.length;i++)
             
           {
              $('#compte').append("<tr id='lignecompte_"+res[i].idutilisateur+"'><td><input type='text' id='modifNom"+res[i].idutilisateur+"' style='display:none' value='"+res[i].nom+"'/> <span id='valNom"+res[i].idutilisateur+"' >"+res[i].nom+"</span></td><td> <input type='text' id='modifPrenom"+res[i].idutilisateur+"' style='display:none' value='"+res[i].prenom+"'    /><span id='valPrenom"+res[i].idutilisateur+"'>"+res[i].prenom+"</span></td><td><input type='text' id='modifAdresse"+res[i].idutilisateur+"' style='display:none' value='"+res[i].adresse+"'    /><span id='valAdresse"+res[i].idutilisateur+"'>"+res[i].adresse+"</span></td><td><input type='text' id='modifNumtel"+res[i].idutilisateur+"' style='display:none' value='"+res[i].numtel+"'/><span id='valTel"+res[i].idutilisateur+"'>"+res[i].numtel+"</span></td><td><input type='text' id='modifEmail"+res[i].idutilisateur+"' style='display:none' value='"+res[i].email+"' /><span id='valEmail"+res[i].idutilisateur+"'>"+res[i].email+"</span></td><td><input type='text' id='modifLibelle"+res[i].idutilisateur+"' style='display:none' value='"+res[i].libelle+"'    /><span id='valLib"+res[i].idutilisateur+"'>"+res[i].libelle+"</span></td><td><button type='button' id='modifier"+res[i].idutilisateur+"' onclick='afficherContenu("+res[i].idutilisateur+")' class='btn btn-primary'>Modifier</button><button type='button' id='sauvegarder"+res[i].idutilisateur+"' style='display:none' onclick='modifierCompte("+res[i].idutilisateur+")' class='btn btn-primary'>Sauvegarder</button></td><td><button type='button' onclick='supprimerCompte("+res[i].idutilisateur+")' class='btn btn-primary'>Supprimer</button></td></tr>");
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
    else
    {

       window.location.href="http://localhost/E-commerce/";

    }


  });



});