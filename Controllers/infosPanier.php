<?php

require_once("../Models/modelUtilisateur.php");

class controllerPanier
{

     function getUtilisateurPanier()
     {
       $p = new Utilisateur();
       $resultat =$p->getUtilisateur();
       echo json_encode($resultat);
     }
}

if(isset($_POST['demandeInfos']))
{
   $cp= new controllerPanier();
   $cp->getUtilisateurPanier();

}



?>