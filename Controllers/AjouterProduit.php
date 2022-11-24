<?php
require_once("../Models/modelProduit.php");

class ControllerAjouterProduit
{
    public function __construct(){}
    
    public function controllerAjouterProduit($myData)
    {
        $b = new Produits();
        $resultat =$b->ajouterProduit($myData);
        echo json_encode($resultat);
    }
}

if(isset($_POST['data']))
{
    $v = new ControllerAjouterProduit();
    $v->controllerAjouterProduit($_POST['data']);
}
?>