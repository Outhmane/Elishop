$( document ).ready(function() {

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

    var data=jQuery.parseJSON(data);
      $.post("http://localhost/E-commerce/Controllers/listePcPortables.php",
      {
          chargerProduit: "pc",
      },
        function(retour,status)
       {
        
         
    
        var res=jQuery.parseJSON(retour);
  
        if (res.length>0) {
        for (var i =0;i< res.length;i++)
        { 
          
          $('#produit').append("<div class='col-lg-3 col-md-6 mb-4'><div class='card'><div class='view overlay'><img src='"+res[i].imagep+"' class='card-img-top' style='width: 250px ;height:200px;'><a><div class='mask rgba-white-slight'></div></a></div><div class='card-body text-center'>                <a href='#' class='grey-text'>                  <h5>"+res[i].libelle+"</h5>                </a>                <h5>                  <strong>                    <a href='#' class='dark-grey-text'>Smartphone                      <span class='badge badge-pill danger-color'>Nouveau</span>                    </a>                  </strong>                </h5>                <h4 class='font-weight-bold blue-text'>                  <strong>"+res[i].prix+" €</strong>                </h4>              </div>             </div> <button type='button' onclick='panier("+res[i].idproduit+",\""+res[i].libelle+"\","+res[i].prix+");' style='display:none; margin-left:60px;' class='btn btn-default ajoutPanier'>Ajouter au panier</button> </div> ");    
         
        }
      }

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
   
  });
  
    



  });






       
});

function panier(idproduit, libelle, prix)
{
 var panier = {idProd: idproduit, libProd: libelle, prixProd: prix, quantiteProd:0};
 var nombreArticles = sessionStorage.getItem("countArticles");
 nombreArticles = parseInt(nombreArticles);
 if(nombreArticles){
     
     sessionStorage.setItem('countArticles', nombreArticles + 1);
     $("#compteurPanier").html(sessionStorage.getItem("countArticles"));
 }else{
  sessionStorage.setItem('countArticles', 1);
  $("#compteurPanier").html(sessionStorage.getItem("countArticles"));
 }
   
 insertCart(panier);
}

function insertCart(products)
{
  let cartItems = sessionStorage.getItem('listArticles');
  cartItems = JSON.parse(cartItems);

  if(cartItems != null)
  {
    if(cartItems[products.idProd] == undefined)
    {
      cartItems = {
        ...cartItems,
        [products.idProd]:products
      }
    }
    cartItems[products.idProd].quantiteProd += 1;
  }
  else
  {
    products.quantiteProd =1;
    cartItems = {
      [products.idProd]:products
    }
  }

  sessionStorage.setItem("listArticles",JSON.stringify(cartItems));
  

}