<?php
require_once("../Models/modelUtilisateur.php");

class ControllerSupprimerCompte
{
    public function __construct(){}
    
    public function controllerSupprimerCompte($idUtilisateur)
    {
        $b = new Utilisateur();
        $resultat =$b->supprCompte($idUtilisateur);
        echo json_encode($resultat);
    }
}

if(isset($_POST['idUtilisateur']) )
{
    $v = new ControllerSupprimerCompte();
    $v->controllerSupprimerCompte($_POST['idUtilisateur']);
}
?>