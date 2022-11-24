<?php
require_once("../Models/modelUtilisateur.php");

class ControllerListeCommande
{
    public function __construct(){}
    
    public function controllerGetCommande()
    {
        $b = new Utilisateur();
        $resultat =$b->getListeCommande();
        echo json_encode($resultat);
    }
}

if(isset($_POST['chargerCommande']))
{
    $v = new ControllerListeCommande();
    $v->controllerGetCommande();
}
?>