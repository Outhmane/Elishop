<?php
require_once("../Models/modelProduit.php");

class ControllerModifierProduit
{
    public function __construct(){}
    
    public function ModifierProduit($mynewData)
    {
        $b = new Produits();
        $resultat =$b->modifierProduit($mynewData);
        echo json_encode($resultat);
    }
}

if(isset($_POST['data']))
{
    $v = new ControllerModifierProduit();
    $v->ModifierProduit($_POST['data']);
}
?>