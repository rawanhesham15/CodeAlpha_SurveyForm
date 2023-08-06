<?php
session_start();
?>

<?php
$_SESSION["q17"] = $_POST['Q17'];
$_SESSION["q18"] = $_POST['Q18'];
$_SESSION["q19"] = $_POST['Q19'];
$_SESSION["q20"] = $_POST['Q20'];
$_SESSION["q21"] = $_POST['Q21'];
$_SESSION["q22"] = $_POST['Q22'];

$host = "localhost:3307";
$dbname = "surveydb";
$username = "root";
$password = "";

$conn = mysqli_connect($host, $username, $password, $dbname);

if (mysqli_connect_errno()) {
    die("Connection Error: " . mysqli_connect_error());
}

$sql = "INSERT INTO answers (name, email, class, Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9, Q10, Q11, Q12, Q13, Q14, Q15, Q16, Q17, Q18, Q19, Q20, Q21, Q22)
        VALUES (?, ?, ?, ?, ?, ?, ?, ? ,?, ?, ?, ?, ?, ?, ?,?, ?, ?, ?, ?, ?,?, ?, ?,?)";

$stmt = mysqli_stmt_init($conn);

if (!mysqli_stmt_prepare($stmt, $sql)) {
    die(mysqli_error($conn));
}

mysqli_stmt_bind_param(
    $stmt,
    "sssssssssisssssssssssssss",
    $_SESSION["name"],
    $_SESSION["email"],
    $_SESSION["studentClass"],
    $_SESSION["q1"],
    $_SESSION["q2"],
    $_SESSION["q3"],
    $_SESSION["q4"],
    $_SESSION["q5"],
    $_SESSION["q6"],
    $_SESSION["q7"],
    $_SESSION["q8"],
    $_SESSION["q9"],
    $_SESSION["q10"],
    $_SESSION["q11"],
    $_SESSION["q12"],
    $_SESSION["q13"],
    $_SESSION["q14"],
    $_SESSION["q15"],
    $_SESSION["q16"],
    $_SESSION["q17"],
    $_SESSION["q18"],
    $_SESSION["q19"],
    $_SESSION["q20"],
    $_SESSION["q21"],
    $_SESSION["q22"],
);

mysqli_stmt_execute($stmt);

// echo "Record saved.";

$link = "<script>window.open('/HTML/page4.html', '_self')</script>";
echo $link;
?>