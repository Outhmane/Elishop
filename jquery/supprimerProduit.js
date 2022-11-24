function supprimerProduit(idProduit)
{
  
  console.log(idProduit);
           $("#ligneproduit_"+idProduit).remove();
  
     
           $.post("http://localhost/E-commerce/Controllers/supprimerProduit.php",
            {
              idProduit:idProduit

            },
            function(data,status)
            {
      
                alert("Le produit est supprimer.");
            
      



          });
  
  
}