function supprimerCompte(idUtilisateur)
{
  
  
           $("#lignecompte_"+idUtilisateur).remove();
  
     
           $.post("http://localhost/E-commerce/Controllers/supprimerCompte.php",
            {
              idUtilisateur:idUtilisateur
             

            },
            function(data,status)
            {
      
            
                alert("Le compte est supprimer.");
            
      



          });
  
  
}
  
