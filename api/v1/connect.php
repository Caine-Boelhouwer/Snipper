<?php
// Make connection with db
$mysqli = new mysqli("*", "*", "*", "*");

// Checking connection errors
if ($mysqli->connect_errno) {
    printf("Connect failed: %s\n", $mysqli->connect_error);
    exit();
}
