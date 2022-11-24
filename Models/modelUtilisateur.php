<?php
 session_start();
class Utilisateur
{


	public function __construct(){} 

  public function inscription($nom,$prenom,$adresse,$telephone,$email,$motPasse)
{
	require('Pageconnection.php');

              $sql = "INSERT INTO utilisateur(nom,prenom,adresse,numtel,email,password,idrole) VALUES('".$nom."', '".$prenom."', '".$adresse."','".$telephone."','".$email."','".$motPasse."',2)";
              $execute = $bdd->query($sql);

      return $execute;
}
  
public function Authentification($email,$password)
{

  require('Pageconnection.php');
   
  
  $sql = "select * from utilisateur where email = '".$email."' and password ='".$password."'";
     $execute = $bdd->query($sql);
     $donnee = $execute->fetch();
     
     if($donnee != false)
     {
      $_SESSION['idutilisateur'] = $donnee['idutilisateur'];
      $_SESSION['idrole'] = $donnee['idrole'];
      $_SESSION['nom'] = $donnee['nom'];
      $_SESSION['prenom'] = $donnee['prenom'];
      $_SESSION['adresse'] = $donnee['adresse'];
      $_SESSION['numtel'] = $donnee['numtel'];
      $_SESSION['email'] = $donnee['email'];
      $_SESSION['password'] = $donnee['password'];
     }
     
     return $donnee;

}
public function verifSession()
{
  if(isset($_SESSION['idutilisateur']))
  {
      $infosSession = array('idutilisateur' => $_SESSION['idutilisateur'], 'idrole' => $_SESSION['idrole'], 
      'nom' => $_SESSION['nom'], 'prenom' => $_SESSION['prenom'], 'adresse' => $_SESSION['adresse'], 
      'numtel' => $_SESSION['numtel'], 'email' => $_SESSION['email'],'password' => $_SESSION['password'] );
      return $infosSession;
  }else
  {
      return false;
  }

}
public function modifierProfil($nom,$prenom,$adresse,$telephone,$email,$password)
{
  require('Pageconnection.php');
  $idUtilisateur=$_SESSION['idutilisateur'];
    $sql = "UPDATE utilisateur SET  nom ='".$nom."' ,prenom = '".$prenom."',adresse = '".$adresse."',numtel=".$telephone.",email='".$email."',password='".$password."' where idutilisateur = ".$idUtilisateur."";
              $execute = $bdd->query($sql);

      return $execute;
}

public function getListeCommande()
{


  require('Pageconnection.php');
  

    $sql = "select c.idutilisateur,p.libelle,datelivraison,datecommande,quantiteProduit,etatcommande from commander c, utilisateur u , produit p where c.idutilisateur=u.idutilisateur and c.idproduit=p.idproduit and u.idutilisateur=".$_SESSION['idutilisateur']." ";
          $execute = $bdd->query($sql);
          $donnee=$execute->fetchAll();
     
     return $donnee;
}


public function getListeCompte()
{



  require('Pageconnection.php');

    $sql = "select * from utilisateur u, role r where u.idrole=r.idrole";
          $execute = $bdd->query($sql);
          $donnee=$execute->fetchAll();

          return $donnee;
}




public function ajouterCompte($role,$nom,$prenom,$adresse,$telephone,$email,$motPasse)
{
	require('Pageconnection.php');

              $sql = "INSERT INTO utilisateur(idrole,nom,prenom,adresse,numtel,email,password) VALUES('".$role."','".$nom."', '".$prenom."', '".$adresse."','".$telephone."','".$email."','".$motPasse."')";
              $execute = $bdd->query($sql);

      return $execute;
}

public function modifierCompte($idUtilisateur,$nom,$prenom,$adresse,$telephone,$email,$role)
{
  require('Pageconnection.php');

    $sql = "UPDATE utilisateur SET  nom ='".$nom."' ,prenom = '".$prenom."',adresse = '".$adresse."',numtel=".$telephone.",email='".$email."',idrole=".$role." where idutilisateur = ".$idUtilisateur."";
              $execute = $bdd->query($sql);

      return $execute;
}

public function supprCompte($idUtilisateur)
{
  require('Pageconnection.php');

              $sql = "delete from utilisateur where idutilisateur = ".$idUtilisateur."";
              $execute = $bdd->query($sql);

      return $execute;
}



public function insertPanier($article)
{
  
  if (!isset($_SESSION['article'])) {
    $_SESSION['article'] = array();
  }

    $existeProd = false;

    foreach($_SESSION['article'] as $key => $value) {
      
     if($value['idProd'] == $article['idProd'])
     {
      $existeProd = true;
     }
    
    }

   if(!$existeProd)
   {
     array_push($_SESSION['article'],$article);
   }

   return $_SESSION['article'];

}

public function insertCommande($listArticle)
{
     require('Pageconnection.php');
    
     // current date & livraison date
    $dateCommande= new dateTime();
    $dateLiv= new dateTime();
    $dateLivraison=$dateLiv->modify('+20 day');
    // date format
    $dateCommande=$dateCommande->format("Y/m/d");
    $dateLivraison=$dateLivraison->format("Y/m/d");
    
    $idUtilisateur=$_SESSION['idutilisateur'];
    $etatCommande="En cours";
    
    
    foreach ($listArticle as $value)
    {
       $sql = "INSERT INTO commander(idutilisateur,idproduit,datelivraison,datecommande,quantiteProduit,etatcommande) VALUES(".$idUtilisateur.",".$value['idProd'].", '".$dateLivraison."', '".$dateCommande."',".$value['quantiteProd'].",'".$etatCommande."')";
       $execute = $bdd->query($sql);

    }

    

      return $listArticle;

}
}
?>