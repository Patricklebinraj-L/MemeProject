<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS,UPDATE');
include('dbcon.php');


$nm = $_POST['name'];
$a = $_POST['id'];

if($a=="" || $nm==""){
    echo "false";
}
else{

$flag = 0;

$q = "SELECT * from images where id='$a'";
$e = $con->query($q);
$s = '';



while($row=$e->fetch_assoc()){
    $s = $row['likes'];
}
$arr = array();
if($s==""){
    $s = array();
    array_push($s,$nm);
    $q = "UPDATE images SET count=".(1)." WHERE id='$a'";
    $e = $con->query($q);
    if($e){
        $flag=1;
    }

}
else{
    $s = json_decode($s);
    $c=0;
    foreach ($s as $x) {
        if($x==$nm){
            $c=1;
            break;
        }
      }
    if($c==0){

        array_push($s,$nm);
        $q = "SELECT * from images where id='$a'";
        $e = $con->query($q)->fetch_assoc();
        $q = "UPDATE images SET count=".($e['count']+1)." WHERE id='$a'";
        $e = $con->query($q);
        if($e){
            $flag=1;
        }



    }
    

}
$arr = json_encode($s);

$q = "UPDATE images SET likes='$arr' WHERE id='$a'";
$e = $con->query($q);

if($flag==1){
    $q = "SELECT * FROM images WHERE id = '$a'";
    $exe = $con->query($q);
    $data = array();
    while($row=$exe->fetch_assoc()){

        $count = $row['count'];
    }

    if($count){
        echo $count;
    }
    else{
        echo "false";
    }
}
else{
    echo "false";
}


}


?>