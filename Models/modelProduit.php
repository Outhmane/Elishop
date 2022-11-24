<?php

class Produits
{

   

public function __construct(){}

public function getListeTele()
{


require('Pageconnection.php');
	

    $sql = "select * from produit p,categorie c where p.idcategorie=c.idcategorie and c.libellec='telephones'";
          $execute = $bdd->query($sql);
          $donnee=$execute->fetchAll();

          return $donnee;
}


public function getListePcPortable()
{

    require('Pageconnection.php');

	

    $sql = "select * from produit p,categorie c where p.idcategorie=c.idcategorie and c.libellec='pc'";
          $execute = $bdd->query($sql);
          $donnee=$execute->fetchAll();

          return $donnee;
}

public function getListeTelevisions()
{


    require('Pageconnection.php');
	

    $sql = "select * from produit p,categorie c where p.idcategorie=c.idcategorie and c.libellec='television'";
          $execute = $bdd->query($sql);
          $donnee=$execute->fetchAll();

          return $donnee;
}

public function getListeCameras()
{


   require('Pageconnection.php');
	

    $sql = "select * from produit p,categorie c where p.idcategorie=c.idcategorie and c.libellec='camera'";
          $execute = $bdd->query($sql);
          $donnee=$execute->fetchAll();

          return $donnee;
}

public function getListeProduit()
{


  require('Pageconnection.php');
  

    $sql = "select * from produit";
          $execute = $bdd->query($sql);
          $donnee=$execute->fetchAll();

          return $donnee;
}



public function supprProduit($idProduit)
{
  require('Pageconnection.php');

              $sql = "delete from produit where idproduit = ".$idProduit."";
              $execute = $bdd->query($sql);

      return $execute;
}

public function ajouterProduit($donnee)
{

      require('Pageconnection.php');

      $sql = "INSERT INTO produit(idcategorie,quantite,prix,libelle,imagep) VALUES(".$donnee['idCategorie'].",".$donnee['quantiteProd'].", ".$donnee['prixProd'].", '".$donnee['libelleProd']."','".$donnee["myImage"]."')";
      $execute = $bdd->query($sql);


      
      return $execute;
  
}

// public function base64ToImage($base64_string,$imageName) {
  
//       list(, $base64_string) = explode(';', $base64_string);
//       list(, $base64_string) = explode(',', $base64_string);

//       return $base64_string;
//       // $image = base64_decode($base64_string);

//       // file_put_contents('C:/xampp/htdocs/E-commerce/Views/images/'.$imageName, $image);
  

// }


public function modifierProduit($donnees)
{
  require('Pageconnection.php');

  $sql = 'UPDATE produit SET   quantite = '.$donnees['quantiteProd'].',prix = '.$donnees['prixProd'].',libelle="'.$donnees['libelleProd'].'",imagep="'.$donnees["myImage"].'" where idproduit= '.$donnees['idProduit'].'';
              $execute = $bdd->query($sql);

      return $execute;
}




}




?>