<?php
require_once("../Models/modelUtilisateur.php");

class ControllerAuthentification 
{
    public function __construct(){}
    
    public function controllerAuthentification($email,$password)
    {
        $b = new Utilisateur();
        $resultat =$b->Authentification($email,$password);
        echo json_encode($resultat);
    }
}

if(isset($_POST['email']) && isset($_POST['password']))
{
    $v = new ControllerAuthentification();
    $v->controllerAuthentification($_POST['email'], $_POST['password']);
}
?>