$(document).ready(function (e) {



$('#categorie').on('change',function(){
    
    if($("#categorie option:selected").val() != "default")
    {
        $('#erreurCategorie').css("display","none");
    }
    else
    {
        $('#erreurCategorie').css("display","block");
    }



});






    $('#enregistrerProduit').on('click', function () {
  

        if($("#categorie option:selected").val() != "default" && $("#libelleProduit").val() != "" && 
        $('#prixProduit').val() !="" && $('#quantiteProduit').val() != "") 
        {

        var myData = null;
        var reader = new FileReader();

         var imageProduit = $('#imageProduit')[0].files[0];
         var nomImage = imageProduit.name;
         reader.readAsDataURL(imageProduit);

         reader.onloadend = function () {
             myData = {
                myImage: reader.result,
                idCategorie : $("#categorie option:selected").val(),
                libelleProd: $('#libelleProduit').val(),
                prixProd: $('#prixProduit').val(),
                quantiteProd: $('#quantiteProduit').val(),
                nomImage:nomImage
            }
            

              $.post("http://localhost/E-commerce/Controllers/AjouterProduit.php",
            {
              data:myData,
              contentType: "application/json",
            

            },
            function(data,status)
            {
              
              
                 $('#imageProduit').val("");
                 $('#categorie').find('option').removeAttr("selected");
                 $('#libelleProduit').val("");
                 $('#prixProduit').val("");
                 $('#quantiteProduit').val("");
                
            
               location.reload();
        });

        }

    }
    else
    {
        alert("Il faut remplir tout les champs");
    }
    });
});