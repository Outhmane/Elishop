<?php
require_once("../Models/modelProduit.php");

class ControllerListePc
{
    public function __construct(){}
    
    public function controllerGetListe()
    {
        $b = new Produits();
        $resultat =$b->getListePcPortable();
        echo json_encode($resultat);
    }
}

if(isset($_POST['chargerProduit']))
{
    $v = new ControllerListePc();
    $v->controllerGetListe();
}
?>