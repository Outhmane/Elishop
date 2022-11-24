<?php
require_once("../Models/modelProduit.php");

class ControllerListeCameras 
{
    public function __construct(){}
    
    public function controllerGetListe()
    {
        $b = new Produits();
        $resultat =$b->getListeCameras();
        echo json_encode($resultat);
    }
}

if(isset($_POST['chargerProduit']))
{
    $v = new ControllerListeCameras();
    $v->controllerGetListe();
}
?>