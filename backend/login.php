<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
include('dbcon.php');

$name = $_POST['name'];
$pass = $_POST['pass'];


if($con){

  if($name!='' && $pass!=''){

    $q = "SELECT * FROM users WHERE name = '$name'";
    $result = $con->query($q);

      if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
          if($name == $row['name']){

            if($pass == $row['pass']){

              echo json_encode(["success" => true, "error" => "Login successfull !"]);
                break;
            }
            else{
              echo json_encode(["success" => false, "error" => "Password is wrong !"]);
            }

          }
          else{

            echo json_encode(["success" => false, "error" => "No user found !"]);

          }
          
 

        }
      }
      else{
        echo json_encode(["success" => false, "error" => "No user found !"]);
      }

   

}
elseif($name==""){
  echo json_encode(["success" => false, "error" => "Please enter username  !"]);
}
elseif($pass==""){
  echo json_encode(["success" => false, "error" => "Please enter password  !"]);
}
else{
  echo json_encode(["success" => false, "error" => "Please enter username !"]);
}

}
else{
  echo json_encode(["success" => false, "error" => "Something went wrong"]);
}

?>