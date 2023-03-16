<?php

header('Access-Control-Allow-Origin: *');


$username = $_POST['username'];
$email = $_POST['email'];
$password = $_POST['password'];


if(empty($username) || empty($email) || empty($password)) {
    echo json_encode(array('error' => 'All fields are required.'));
    exit;
}


$password_hashed = password_hash($password, PASSWORD_DEFAULT); 


$servername = "localhost";
$user = "root";
$password = "Mysql@252002";
$dbname = "users";

$conn = mysqli_connect($servername, $user, $password, $dbname);


if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}


$stmt = $conn->prepare("INSERT INTO user (uname, email, password) VALUES (?, ?, ?)");
$stmt->bind_param("sss", $username, $email, $password_hashed);

// Execute the query
if ($stmt->execute()) {
    echo json_encode(array('success' => 'Registration successful.'));
} 
else{
    echo json_encode(array('error' => 'fail.'));
    
}


$stmt->close();
$conn->close();

?>
