<?php
require_once("../Models/modelUtilisateur.php");

class ControllerInscription
{
    public function __construct(){}
    
    public function controllerInscri($nom,$prenom,$adresse,$email,$telephone,$motdepasse)
    {
        $b = new Utilisateur();
        $resultat =$b->inscription($nom,$prenom,$adresse,$telephone,$email,$motdepasse);
        echo json_encode($resultat);
    }
}

if(isset($_POST['nom']) && isset($_POST['prenom']) && isset($_POST['adresse']) &&isset($_POST['email']) && isset($_POST['telephone']) && isset($_POST['motdepasse']))
{
    $v = new ControllerInscription();
    $v->controllerInscri($_POST['nom'],$_POST['prenom'],$_POST['adresse'],$_POST['email'],$_POST['telephone'],$_POST['motdepasse']);
}
?>