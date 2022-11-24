<?php
require_once("../Models/modelProduit.php");

class ControllerListeTelevisions 
{
    public function __construct(){}
    
    public function controllerGetListe()
    {
        $b = new Produits();
        $resultat =$b->getListeTelevisions();
        echo json_encode($resultat);
    }
}

if(isset($_POST['chargerProduit']))
{
    $v = new ControllerListeTelevisions();
    $v->controllerGetListe();
}
?>