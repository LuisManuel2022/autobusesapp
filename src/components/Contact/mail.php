<?php
if($_SERVER[ 'REQUEST_METHOD'] != 'POST') {
    header("Location: index.html")
}


//if ( ! isset( $_POST['nombre'])) {
   // header("Location: localhost:3000/contact")
/*
}
*/
$nombre = $_POST['nombre'];
$telefono = $_POST['telefono'];
$email = $_POST['email'];
$asunto = $_POST['asunto'];
$queja = $_POST['queja'];


$rta = mail('compaluis51@hotmail.com', "Mensaje web: $asunto", $queja );
var_dump($nombre)