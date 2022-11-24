function deconnexion()
{


  $.post("http://localhost/E-commerce/Controllers/deconnexion.php",
  function()
  {

    window.location.href="http://localhost/E-commerce/index.html";

  }
  
  
  
  );




}