<?php
require_once("../Models/modelProduit.php");

class ControllerListeProduit
{
    public function __construct(){}
    
    public function controllerGetListe()
    {
        $b = new Produits();
        $resultat =$b->getListeProduit();
        echo json_encode($resultat);
    }
}

if(isset($_POST['chargerProduit']))
{
    $v = new ControllerListeProduit();
    $v->controllerGetListe();
}
?>