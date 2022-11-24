<?php
require_once("../Models/modelProduit.php");

class ControllerListeTel 
{
    public function __construct(){}
    
    public function controllerGetListe()
    {
        $b = new Produits();
        $resultat =$b->getListeTele();
        echo json_encode($resultat);
    }
}

if(isset($_POST['chargerProduit']))
{
    $v = new ControllerListeTel();
    $v->controllerGetListe();
}
?>