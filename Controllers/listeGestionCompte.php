<?php
require_once("../Models/modelUtilisateur.php");

class ControllerListeCompte
{
    public function __construct(){}
    
    public function controllerGetListe()
    {
        $b = new Utilisateur();
        $resultat =$b->getListeCompte();
        echo json_encode($resultat);
    }
}

if(isset($_POST['chargerCompte']))
{
    $v = new ControllerListeCompte();
    $v->controllerGetListe();
}
?>