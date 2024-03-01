<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
include('dbcon.php');

if ($con) {
    if (isset($_FILES['file'])) {
        $extension = pathinfo($_FILES['file']['name'], PATHINFO_EXTENSION);
        $type = $_FILES['file']['type'];
        $format = $_POST['format'];
        $ex = explode("/", $type);
        $ff = $ex[1]; // file format to check
        $tm = time() . '.' . $extension;

        // $dir = '../images/'.$tm;    // online

        $dir = '../app/public/images/' . $tm; // localhost

        if ($format == "img") {
            $allowedImageFormats = ["jpeg", "png", "jpg", "gif", "tiff"];
            if (in_array($ff, $allowedImageFormats)) {
                $upload = move_uploaded_file($_FILES['file']['tmp_name'], $dir);
                $user = $_POST['name'];
                $dir = 'images/' . $tm;
                $q = "INSERT INTO images (user, img, type) VALUES ('$user', '$dir', '$format')";
                $exe = mysqli_query($con, $q);
                if ($exe && $upload) {
                    echo json_encode(["success" => true]);
                } else {
                    echo json_encode(["success" => false, "error" => "Upload failed"]);
                }
            } else {
                echo json_encode(["success" => false, "error" => "Invalid image format"]);
            }
        } else {
            $allowedVideoFormats = ["mp4", "avi", "ogg"];
            if (in_array($ff, $allowedVideoFormats)) {
                $upload = move_uploaded_file($_FILES['file']['tmp_name'], $dir);
                $user = $_POST['name'];
                $dir = 'images/' . $tm;
                $q = "INSERT INTO images (user, img, type) VALUES ('$user', '$dir', '$format')";
                $exe = mysqli_query($con, $q);
                if ($exe && $upload) {
                    echo json_encode(["success" => true]);
                } else {
                    echo json_encode(["success" => false, "error" => "Upload failed"]);
                }
            } else {
                echo json_encode(["success" => false, "error" => "Invalid video format"]);
            }
        }
    }
} else {
    echo json_encode(["success" => false, "error" => "Database connection failed"]);
}
?>
