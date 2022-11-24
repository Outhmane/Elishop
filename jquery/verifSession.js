$( document ).ready(function() {
  
    $.post("http://localhost/E-commerce/Controllers/verificationSession.php",
        {
          chargerIndex: "verification",
        },
        function(data,status){
          if(data!= 'false')
          {
             data = JSON.parse(data);
             
             if(data.idrole == 1)
             {
              $("#gestionAdmin").css('display','block');
              $("#Auth").css('display','none');
              $("#gestionClient").css('display','none');
              $("#panier").css('display','none');
              
             }
             if(data.idrole == 2)
             {
              $("#gestionAdmin").css('display','none');
              $("#Auth").css('display','none');
              $("#gestionClient").css('display','block');
              $("#panier").css('display','block');
             }
          }else{
            var location = document.URL;

            if (location != "http://localhost/E-commerce/index.html" && location != "http://localhost/E-commerce/" && location != "http://localhost/E-commerce/Views/PageContact.html")
            {
             window.location.href="http://localhost/E-commerce/index.html";
            }

            

          }

    
        });
      
    });


