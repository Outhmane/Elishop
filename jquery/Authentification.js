function Authentification()
{

    var email=$('#connecterEmail').val();
  var password =$('#connecterMDP').val();

  

  $.post("http://localhost/E-commerce/Controllers/Authentification.php",
  {
     email:email,
     password:password

    
  },
   
       function(data,status)
       {
           if(data != null && data != undefined && data != 'false')
           {
            
              window.location.href = 'http://localhost/E-commerce/';
              $("#erreurAuthentifiaction").css('display','none');
           }
           else
           {
             
               $("#erreurAuthentifiaction").css('display','block');

           }
           

    
   });



}