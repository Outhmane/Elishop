function insererUtilisateur()
{
  
  var nom =$('#nom').val();
  var prenom = $('#prenom').val();
  var adresse =$('#adresse').val();
  var tel = $('#telephone').val();
  var email = $('#email').val();
  var mdp = $('#MDP').val();
  var confmdp = $('#confmtdp').val();
  

  if (nom !="" && prenom !="" && adresse!="" && tel!="" && email!="" && mdp!="" && confmdp!="" )
   {
      if(mdp==confmdp)
      {


           $.post("http://localhost/E-commerce/Controllers/inscription.php",
            {
              nom:nom ,
              prenom:prenom,
              adresse:adresse,
              telephone:tel,
              email:email,
              motdepasse:mdp

            },
            function(data,status)
            {
      console.log(data);
          $('#nom').val("");
          $('#prenom').val("");
          $('#adresse').val("");
          $('#telephone').val("");
          $('#email').val("");
          $('#MDP').val("");
          $('#confmtdp').val("");
            

          $('#erreurPasse').css('display','none');
          
            alert("Vous etes bien inscrit.");
       
            


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