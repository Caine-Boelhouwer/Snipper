<?php
// Allow cross orgins to access this api & convert content to json
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

// Make db connection
require_once 'connect.php';

// Get all snippets from db
$query = "SELECT * FROM snippets";
$result = $mysqli->query($query);

// Init snippets array
$snippets = [];

// Put all snippets in array
while ($row = $result->fetch_assoc()) {
	$snippet = [
		"id" => (int) $row["id"],
		"title" => $row["title"],
		"language" => $row["language"],
		"version" => (double) $row["version"],
		"code" => html_entity_decode($row["code"], ENT_QUOTES),
	];

	array_push($snippets, $snippet);
}

// Convert snippets array to json
echo json_encode($snippets);

// Free results and close msqli connection
$result->free();
$mysqli->close();
die();