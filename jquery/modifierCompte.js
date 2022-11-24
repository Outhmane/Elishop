function modifierCompte(idutilisateur) 
{



   var nom= $("#modifNom"+idutilisateur).val();
   var prenom = $("#modifPrenom"+idutilisateur).val();
   var adresse = $("#modifAdresse"+idutilisateur).val();
   var telephone = $("#modifNumtel"+idutilisateur).val();
   var email = $("#modifEmail"+idutilisateur).val();
   var role = $("#modifLibelle"+idutilisateur).val();

  if (role=="Admin") 
  {

    role=1;
  }
  else if (role=="Client") 
  {
     role=2;
  }

  $.post("http://localhost/E-commerce/Controllers/modifierCompte.php",
    {
              idutilisateur:idutilisateur,
              nom:nom,
              prenom:prenom,
              adresse:adresse,
              telephone:telephone,
              email:email,
              role:role
    },
    function(data,status){

    

            $("#modifNom"+idutilisateur).css('display','none');
            $("#modifPrenom"+idutilisateur).css('display','none');
            $("#modifAdresse"+idutilisateur).css('display','none');
            $("#modifNumtel"+idutilisateur).css('display','none');
            $("#modifEmail"+idutilisateur).css('display','none');
            $("#modifLibelle"+idutilisateur).css('display','none');
       	    
            $("#valNom"+idutilisateur).css('display','block'); 
            $("#valPrenom"+idutilisateur).css('display','block'); 
            $("#valAdresse"+idutilisateur).css('display','block');
            $("#valTel"+idutilisateur).css('display','block'); 
            $("#valEmail"+idutilisateur).css('display','block'); 
            $("#valLib"+idutilisateur).css('display','block');
            
            $("#sauvegarder"+idutilisateur).css('display','none'); 
            $("#modifier"+idutilisateur).css('display','block');     
            $("#modifier"+idutilisateur).css('margin-left', '90px');

            $("#valNom"+idutilisateur).text($("#modifNom"+idutilisateur).val());
            $("#valPrenom"+idutilisateur).text($("#modifPrenom"+idutilisateur).val());
            $("#valAdresse"+idutilisateur).text($("#modifAdresse"+idutilisateur).val());
            $("#valTel"+idutilisateur).text($("#modifNumtel"+idutilisateur).val());
            $("#valEmail"+idutilisateur).text($("#modifEmail"+idutilisateur).val());
            $("#valLib"+idutilisateur).text($("#modifLibelle"+idutilisateur).val());
         

       
    });
}


function afficherContenu(idutilisateur) 
{
           
            $("#modifNom"+idutilisateur).css('display','block');
            $("#modifPrenom"+idutilisateur).css('display','block');
            $("#modifAdresse"+idutilisateur).css('display','block');
            $("#modifNumtel"+idutilisateur).css('display','block');
            $("#modifEmail"+idutilisateur).css('display','block');
            $("#modifLibelle"+idutilisateur).css('display','block');
           
            $("#valNom"+idutilisateur).css('display','none'); 
            $("#valPrenom"+idutilisateur).css('display','none'); 
            $("#valAdresse"+idutilisateur).css('display','none');
            $("#valTel"+idutilisateur).css('display','none'); 
            $("#valEmail"+idutilisateur).css('display','none'); 
            $("#valLib"+idutilisateur).css('display','none');    
           
            $("#modifier"+idutilisateur).css('display','none');   
            $("#sauvegarder"+idutilisateur).css('display','block');   

 }
