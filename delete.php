<?php
require 'config.php';

if (isset($_GET['id_users'])) {
    $id = $_GET['id_users'];
    mysqli_query($conn, "DELETE FROM users WHERE id_users = '$id'");
    header("Location: read.php");
}
?>