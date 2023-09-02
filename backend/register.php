<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
include('dbcon.php');

$name = $_POST['name'];
$pass = $_POST['pass'];




if($con){

    $q = "SELECT * FROM users WHERE name = '$name'";
    $result = $con->query($q);

if ($result->num_rows > 0) {
  while($row = $result->fetch_assoc()) {
    
    if($pass == $row['pass']){

        echo ("false");
        break;
    }

  }
}
else{
   
    if($name!='' && $pass!=''){

    $q = "INSERT INTO users (name,pass,data) VALUES ('$name','$pass','')";
    $result = $con->query($q);
    if($result){
        echo ("true");
    }
    else{
        echo ("false");
    }
}

}

   

}

else{

    echo ("false");
}





?>