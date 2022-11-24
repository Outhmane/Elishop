<?php

require_once("../Models/modelUtilisateur.php");

class controllerinsertCommande
{

     function insertedCommande($listArticle)
     {
       $p = new Utilisateur();
       $resultat =$p->insertCommande($listArticle);
       echo json_encode($resultat);
     }
}

if(isset($_POST['listArticle']) )
{
   $cic= new controllerinsertCommande();
   $cic->insertedCommande($_POST['listArticle']);

}




?>