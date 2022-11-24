<?php
require_once("../Models/modelUtilisateur.php");

class ControllerModifierProfil
{
    public function __construct(){}
    
    public function ModifierProfil($nom,$prenom,$adresse,$telephone,$email,$password)
    {
        $b = new Utilisateur();
        $resultat =$b->modifierProfil($nom,$prenom,$adresse,$telephone,$email,$password);
        echo json_encode($resultat);
    }
}

if( isset($_POST['nom']) && isset($_POST['prenom']) && isset($_POST['adresse']) && isset($_POST['telephone']) && isset($_POST['email'])  && isset($_POST['password']) )
{
    $v = new ControllerModifierProfil();
    $v->ModifierProfil($_POST['nom'],$_POST['prenom'],$_POST['adresse'],$_POST['telephone'],$_POST['email'],$_POST['password']);
}
?>