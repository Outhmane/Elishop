<?php
require_once("../Models/modelUtilisateur.php");

class ControllerVerifSession
{
    public function __construct(){}
    
    public function verificationSession()
    {
        $b = new Utilisateur();
        $resultat =$b->verifSession();
        echo json_encode($resultat);
    }
}

if(isset($_POST['chargerIndex']))
{
    $v = new ControllerVerifSession();
    $v->verificationSession();
}
?>