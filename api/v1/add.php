<?php
// Allow cross orgins to access this api
header('Access-Control-Allow-Origin: *');

// Make db connection
require_once 'connect.php';

// Decode angular js json post
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

if($request->add) {
	// Strip code with specialchars func
	$code = htmlentities($request->code, ENT_QUOTES);
	
	// Insert snippet in to db
	$query = "INSERT INTO snippets (title, language, version, code) 
			  VALUES ('$request->title', '$request->language', '$request->version', '$code')";

	// Check if snippet is correctly inserted
	if ($mysqli->query($query) === TRUE) {
	    echo "Record updated successfully";
	} else {
	    echo "Error updating record: " . $mysqli->error;
	}

	// Close mysqli connection
	$mysqli->close();
	die();
} else {
	echo false;
	die();
}