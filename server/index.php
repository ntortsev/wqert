<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');
header('Access-Control-Allow-Methods: *');
header('Access-Control-Allow-Credentaials: true');

$method = $_SERVER['REQUEST_METHOD'];

$request = explode('/', trim($_SERVER['PATH_INFO'], '/'));

$type = array_shift($request);

$id = array_shift($request);

$db = mysqli_connect('localhost', 'root', 'univer', 'shop');

$response = [];

switch ($method) {
    case 'GET':
        if ($id) {
            $query = "SELECT * FROM $type WHERE id = $id";
            $result = mysqli_query($db, $query);
            $response = mysqli_fetch_assoc($result);
        } else {
            $query = "SELECT * FROM $type";
            $result = mysqli_query($db, $query);
            while ($row = mysqli_fetch_assoc($result)) {
                $response[] = $row;
            }
        }
        break;
    case 'POST':
        $input = json_decode(file_get_contents('php://input'), true);
        $query = "INSERT INTO $type SET ";
        foreach ($input as $key => $value) {
            $query .= "$key = '$value', ";
        }
        $query = rtrim($query, ', ');
        mysqli_query($db, $query);
        $response = ['message' => 'Resource created'];
        break;
    case 'PUT':
        $input = json_decode(file_get_contents('php://input'), true);
        $query = "UPDATE $type SET ";
        foreach ($input as $key => $value) {
            $query .= "$key = '$value', ";
        }
        $query = rtrim($query, ', ');
        $query .= " WHERE id = $id";
        mysqli_query($db, $query);
        $response = ['message' => 'Resource updated'];
        break;
    case 'DELETE':
        $query = "DELETE FROM $type WHERE id = $id";
        mysqli_query($db, $query);
        $response = ['message' => 'Resource deleted'];
        break;
}
header('Content-Type: application/json');
echo json_encode($response);
?>