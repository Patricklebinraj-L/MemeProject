<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
include('dbcon.php');

$id = $_GET['id'];

if($con){
  

    $q = "SELECT * FROM images WHERE id='$id'";
    $exe = $con->query($q);
    $data = array();
    while($row=$exe->fetch_assoc()){

        $t = $row['type'];
        $ex = explode("/",$t);

        $d = array("name"=>$row['user'],"img"=>$row['img'],"type"=>$ex[0],"id"=>$row['id'],"count"=>$row['count']);
        array_push($data,$d);
        $d = array();

    }

    echo json_encode($data);

}
else{

    $data = array(
        'info'=>"error"
    );

    echo json_encode($data);
}

?>

