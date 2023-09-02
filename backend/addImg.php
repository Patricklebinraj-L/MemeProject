<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
include('dbcon.php');

if($con){

    if(isset($_FILES['file'])){

        $extension = pathinfo($_FILES['file']['name'], PATHINFO_EXTENSION);

        $type = $_FILES['file']['type'];

        $tm = time().'.'.$extension;

	    $dir = '../images/'.$tm;

        $upload = move_uploaded_file($_FILES['file']['tmp_name'],$dir);

        $user = $_POST['name'];

        $dir = 'images/'.$tm;

        $q = "INSERT INTO images(user,img,type) VALUES ('$user','$dir','$type')";

        $exe = mysqli_query($con,$q);

        if($exe && $upload){

            echo TRUE;
        }
        else{

            echo FALSE;
        }

    }       

}
else{

    echo FALSE;
}

?>

