<?php
// Make connection with db
$mysqli = new mysqli("localhost", "zodasmooi_caine", "pl06play", "zodasmooi_caine");

// Checking connection errors
if ($mysqli->connect_errno) {
    printf("Connect failed: %s\n", $mysqli->connect_error);
    exit();
}