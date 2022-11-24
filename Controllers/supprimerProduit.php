<?php
require_once("../Models/modelProduit.php");

class ControllerSupprimerProduit
{
    public function __construct(){}
    
    public function controllerSupprimerProduit($idProduit)
    {
        $b = new Produits();
        $resultat =$b->supprProduit($idProduit);
        echo json_encode($resultat);
    }
}

if(isset($_POST['idProduit']) )
{
    $v = new ControllerSupprimerProduit();
    $v->controllerSupprimerProduit($_POST['idProduit']);
}
?>