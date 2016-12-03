<?php
// Allow cross orgins to access this api & convert content to json
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

// Make db connection
require_once 'connect.php';

// Get snippet with specific id
$query = "SELECT * FROM snippets WHERE id = ".$_GET['id']."";
$result = $mysqli->query($query);
$row = $result->fetch_array(MYSQLI_ASSOC);

// Put all snippets in array
$snippet = [
	"id" => (int) $row["id"],
	"title" => $row["title"],
	"language" => $row["language"],
	"version" => (double) $row["version"],
	"code" => html_entity_decode($row["code"], ENT_QUOTES),
];

// Convert snippets array to json
echo json_encode($snippet);

// Free results and close msqli connection
$result->free();
$mysqli->close();
die();