
if(isset($_FILES['file']))
{

	$extension = pathinfo($_FILES['file']['name'], PATHINFO_EXTENSION);

	$new_name = 'images/'.time() . '.' . $extension;

	$upload = move_uploaded_file($_FILES['file']['tmp_name'], $new_name);

    if($upload){
        $name = $_POST['name'];
        // $q = "INSERT INTO images(user,img,data) VALUES ('$name','$new_name','')";
        $data = array(
            'image_source'=>$name
        );
    
        echo json_encode($data);
    }
    else{
        $data = array(
            'image_source'=>"insert error"
        );
    
        echo json_encode($data);
    }



}
