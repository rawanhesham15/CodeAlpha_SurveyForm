<?php
session_start();
?>

<?php
$_SESSION["q7"] = filter_input(INPUT_POST, "Q7", FILTER_VALIDATE_INT);
$_SESSION["q8"] = $_POST['Q8'];
$_SESSION["q9"] = $_POST['Q9'];
$_SESSION["q10"] = $_POST['Q10'];
$_SESSION["q11"] = $_POST['Q11'];
$_SESSION["q12"] = $_POST['Q12'];
$_SESSION["q13"] = $_POST['Q13'];
$_SESSION["q13"] = implode(',', $_SESSION["q13"]);
$_SESSION["q14"] = $_POST['Q14'];
$_SESSION["q15"] = $_POST['Q15'];
$_SESSION["q16"] = $_POST['Q16'];

$link = "<script>window.open('/HTML/page3.html', '_self')</script>";
echo $link;
