<?php
require_once("../Models/modelUtilisateur.php");

class ControllerAjouterCompte
{
    public function __construct(){}
    
    public function controllerAjouterCompte($role,$nom,$prenom,$adresse,$email,$telephone,$motdepasse)
    {
        $b = new Utilisateur();
        $resultat =$b->ajouterCompte($role,$nom,$prenom,$adresse,$telephone,$email,$motdepasse);
        echo json_encode($resultat);
    }
}

if(isset($_POST['role']) && isset($_POST['nom']) && isset($_POST['prenom']) && isset($_POST['adresse']) &&isset($_POST['email']) && isset($_POST['telephone']) && isset($_POST['motdepasse']))
{
    $v = new ControllerAjouterCompte();
    $v->controllerAjouterCompte($_POST['role'],$_POST['nom'],$_POST['prenom'],$_POST['adresse'],$_POST['email'],$_POST['telephone'],$_POST['motdepasse']);
}
?>