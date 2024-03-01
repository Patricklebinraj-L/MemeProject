<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
include('dbcon.php');

$name = $_POST['name'];
$pass = $_POST['pass'];
$repass = $_POST['repass'];




if($con){

    $q = "SELECT * FROM users WHERE name = '$name'";
    $result = $con->query($q);

if ($result->num_rows > 0) {
  while($row = $result->fetch_assoc()) {
    

    echo json_encode(["success" => false, "error" => "Already username exists! Try again"]);

  }
}
else{
if($name==""){
    echo json_encode(["success" => false, "error" => "Please enter username  !"]);
}
elseif($pass==""){
    echo json_encode(["success" => false, "error" => "Please enter password !"]);
  }
elseif($repass==""){
    echo json_encode(["success" => false, "error" => "Please enter re-password  !"]);
}

else{

    if($repass!=$pass){
        echo json_encode(["success" => false, "error" => "Password should match re-password !"]);
    }
    else{

    $q = "INSERT INTO users (name,pass,data) VALUES ('$name','$pass','')";
    $result = $con->query($q);
    if($result){

            echo json_encode(["success" => true, "error" => "Successfully registered !"]);
          
    }
    else{
        echo json_encode(["success" => false, "error" => "Something went wrong !Try again"]);
    }
}


}

}

}

else{

    echo json_encode(["success" => false, "error" => "Something went wrong !Try again"]);
}





?>