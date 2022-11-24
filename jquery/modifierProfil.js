$( document ).ready(function() {
    // remplir le compteur du panier
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
        $("#modifierNom").val(data.nom);
        $("#modifierPrenom").val(data.prenom);
        $("#modifierAdresse").val(data.adresse);
        $("#modifierNumTel").val(data.numtel);
        $("#modifierEmail").val(data.email);
        $("#modifierPassword").val(data.password);

        $( "#modifierNom" ).prop( "disabled", true );
        $( "#modifierPrenom" ).prop( "disabled", true );
        $( "#modifierAdresse" ).prop( "disabled", true );
        $( "#modifierNumTel" ).prop( "disabled", true );
        $( "#modifierEmail" ).prop( "disabled", true );
        $( "#modifierPassword" ).prop( "disabled", true );
    });



});

function enabledInput(check)
{
        if(check==1)
        $( "#modifierNom" ).prop( "disabled", false );
        else if (check==2)
        $( "#modifierPrenom" ).prop( "disabled", false );
        else if (check==3)
        $( "#modifierAdresse" ).prop( "disabled", false );
        else if (check==4)
        $( "#modifierNumTel" ).prop( "disabled", false );
        else if (check==5)
        $( "#modifierEmail" ).prop( "disabled", false );
        else
        $( "#modifierPassword" ).prop( "disabled", false );
}

function modifSauvegarder()
{
    
    $.post("http://localhost/E-commerce/Controllers/modifierProfil.php",
    {
      nom: $( "#modifierNom" ).val(),
      prenom:$( "#modifierPrenom" ).val(),
      adresse:$( "#modifierAdresse" ).val(),
      telephone: $( "#modifierNumTel" ).val(),
      email:$( "#modifierEmail" ).val(),
      password:$( "#modifierPassword" ).val()
    },
    function(data,status){
      var data = JSON.parse(data);
  
          $( "#modifierNom" ).prop( "disabled", true );
          $( "#modifierPrenom" ).prop( "disabled", true );
          $( "#modifierAdresse" ).prop( "disabled", true );
          $( "#modifierNumTel" ).prop( "disabled", true );
          $( "#modifierEmail" ).prop( "disabled", true );
          $( "#modifierPassword" ).prop( "disabled", true );
      });
}