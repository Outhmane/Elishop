function insererCompte()
{
  var role=$('#role').val();
  var nom =$('#nom').val();
  var prenom = $('#prenom').val();
  var adresse =$('#adresse').val();
  var tel = $('#telephone').val();
  var email = $('#email').val();
  var mdp = $('#password').val();
  var confmdp = $('#confirmationMDP').val();
  

  if (role!=null && nom !="" && prenom !="" && adresse!="" && tel!="" && email!="" && mdp!="" && confmdp!="" )
   {
      if (role=="Admin") 
      {
        role=1;
      }
      else if (role=="Client") 
      {
         role=2;
      }


      if(mdp==confmdp)
      {
        

           $.post("http://localhost/E-commerce/Controllers/ajouterCompte.php",
            {
              role:role,
              nom:nom ,
              prenom:prenom,
              adresse:adresse,
              telephone:tel,
              email:email,
              motdepasse:mdp

            },
            function(data,status)
            {
          $('#role').val("");
          $('#nom').val("");
          $('#prenom').val("");
          $('#adresse').val("");
          $('#telephone').val("");
          $('#email').val("");
          $('#password').val("");
          $('#confirmationMDP').val("");

            
          location.reload();
            
       $('#erreurPasse').css('display','none');



    });
  }
  else
  {

    $('#erreurPasse').css('display','block');
  }
  }
  else
  {
    
    alert("Il faut remplir tout les champs");
  }
}