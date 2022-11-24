<?php
require_once("../Models/modelUtilisateur.php");

class ControllerModifierCompte
{
    public function __construct(){}
    
    public function ModifierCompte($idUtilisateur,$nom,$prenom,$adresse,$telephone,$email,$role)
    {
        $b = new Utilisateur();
        $resultat =$b->modifierCompte($idUtilisateur,$nom,$prenom,$adresse,$telephone,$email,$role);
        echo json_encode($resultat);
    }
}

if( isset($_POST['idutilisateur'] ) && isset($_POST['nom']) && isset($_POST['prenom']) && isset($_POST['adresse']) &&isset($_POST['email']) && isset($_POST['telephone']) && isset($_POST['role']) )
{
    $v = new ControllerModifierCompte();
    $v->ModifierCompte($_POST['idutilisateur'],$_POST['nom'],$_POST['prenom'],$_POST['adresse'],$_POST['telephone'],$_POST['email'],$_POST['role']);
}
?>