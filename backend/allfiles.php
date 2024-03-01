<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
include('dbcon.php');

if($con){
  

    $q = "SELECT * FROM images ORDER BY ID DESC";
    $exe = $con->query($q);
    $data = array();
    while($row=$exe->fetch_assoc()){

        $t = $row['type'];
        $ex = explode("/",$t);
        $comments = json_decode($row['comments'],true);

        $d = array("name"=>$row['user'],"img"=>$row['img'],"type"=>$ex[0],"id"=>$row['id'],"count"=>$row['count'],"comments"=>$comments);
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

