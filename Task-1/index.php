<?php
session_start();
?>

<?php

$_SESSION["name"] = $_POST['name'];
$_SESSION["email"] = $_POST['email'];
$_SESSION["studentClass"] = $_POST['stClass'];
$_SESSION["q1"] = $_POST['Q1'];
$_SESSION["q1"] = implode(',', $_SESSION["q1"]);
$_SESSION["q2"] = $_POST['Q2'];
$_SESSION["q3"] = $_POST['Q3'];
$_SESSION["q4"] = $_POST['Q4'];
$_SESSION["q5"] = $_POST['Q5'];
$_SESSION["q6"] = $_POST['Q6'];
$_SESSION["q6"] = implode(',', $_SESSION["q6"]);

$link = "<script>window.open('/HTML/page2.html', '_self')</script>";
echo $link;
