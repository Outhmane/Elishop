function modifierProduit(idproduit) 
{




        var myData = null;
        var reader = new FileReader();

         var imageProduit = $("#modifimage"+idproduit)[0].files[0];
         var nomImage = imageProduit.name;
         reader.readAsDataURL(imageProduit);

         reader.onloadend = function () {
             myData = {
                idProduit:idproduit,
                myImage: reader.result,
                libelleProd: $("#modiflibelle"+idproduit).val(),
                prixProd: $('#modifPrix'+idproduit).val(),
                quantiteProd: $('#modifQuantite'+idproduit).val(),
                nomImage:nomImage
            }

            
  $.post("http://localhost/E-commerce/Controllers/modifierProduit.php",
    {
        data:myData,
        contentType: "application/json",
    },
    function(data,status){

 
        
            $("#modifimage"+idproduit).css('display','none');
            $("#modiflibelle"+idproduit).css('display','none');
            $("#modifPrix"+idproduit).css('display','none');
            $("#modifQuantite"+idproduit).css('display','none');
            
            
            $("#valLibelle"+idproduit).text($("#modiflibelle"+idproduit).val());
            $("#valPrix"+idproduit).text($("#modifPrix"+idproduit).val());
            $("#valQuantite"+idproduit).text($("#modifQuantite"+idproduit).val());


            var reader = new FileReader();
    
             var imageModifProduit = $("#modifimage"+idproduit)[0].files[0];
             console.log(imageModifProduit);
             reader.readAsDataURL(imageModifProduit);
    
             reader.onloadend = function () {
                var myImage64 = reader.result

                $("#imagep"+idproduit).attr('src',myImage64);
            
            $("#imagep"+idproduit).css('display','block'); 
            $("#valLibelle"+idproduit).css('display','block'); 
            $("#valPrix"+idproduit).css('display','block');
            $("#valQuantite"+idproduit).css('display','block'); 

            
            $("#sauvegarder"+idproduit).css('display','none'); 
            $("#modifier"+idproduit).css('margin-left', '165px');
            $("#modifier"+idproduit).css('display','block'); 
                
            }
            
                
            

  
            
        
         

       
    });
}
}


function afficherContenu(idproduit) 
{
           
            
               
            $("#modifimage"+idproduit).css('display','block');
            $("#modiflibelle"+idproduit).css('display','block');
            $("#modifPrix"+idproduit).css('display','block');
            $("#modifQuantite"+idproduit).css('display','block');
            
       	    
            $("#imagep"+idproduit).css('display','none'); 
            $("#valLibelle"+idproduit).css('display','none'); 
            $("#valPrix"+idproduit).css('display','none');
            $("#valQuantite"+idproduit).css('display','none');
           
            $("#modifier"+idproduit).css('display','none');   
            $("#sauvegarder"+idproduit).css('display','block');   

 }