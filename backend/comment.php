<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS,UPDATE');
include('dbcon.php');


$name = $_POST['name'];
$id = $_POST['id'];
$comment = $_POST['comment'];

if($id==""){
    echo FALSE;
}


elseif($name=="" || $comment==""){
 
    $q = "SELECT * FROM images WHERE id = '$id'";
    $exe = $con->query($q);
    $data = array();
    while($row=$exe->fetch_assoc()){

        $comments = $row['comments'];
    }

    if($comments){
        echo $comments;
    }
    else{
        echo FALSE;
    }
  
 
}
else{

$flag = 0;

$q = "SELECT * from images where id='$id'";
$e = $con->query($q);
$s = '';



while($row=$e->fetch_assoc()){
    $s = $row['comments'];
}
$arr = array();
if($s==""){
    $s = array();
    array_push($s,[$name=>$comment]);
    $s = json_encode($s);
    $q = "UPDATE images SET comments='$s' WHERE id='$id'";
    $e = $con->query($q);
    if($e){
        $flag=1;
    }

}
else{
    $s = json_decode($s);

    array_push($s,[$name=>$comment]);
    $s = json_encode($s);
    $q = "UPDATE images SET comments='$s' WHERE id='$id'";
    $e = $con->query($q);
    if($e){
        $flag=1;
    }



}

if($flag==1){

    $q = "SELECT * FROM images WHERE id = '$id'";
    $exe = $con->query($q);
    while($row=$exe->fetch_assoc()){

        $comments = $row['comments'];
    }

    if($comments){
        echo $comments;
    }
    else{
        echo FALSE;
    }

}
else{
    echo FALSE;
}


}
?>