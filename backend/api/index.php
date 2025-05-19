<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

$requestUri = $_SERVER['REQUEST_URI'];
$requestPath = parse_url($requestUri, PHP_URL_PATH);
$requestMethod = $_SERVER['REQUEST_METHOD'];

// Remove o prefixo /petshop-backend/ (ajustar se necessário)
$basePath = '/petshop-backend/';
$path = str_replace($basePath, '', $requestPath);

switch ($path) {
    case 'products':
        require __DIR__ . '/api/products.php';
        break;

    default:
        http_response_code(404);
        echo json_encode(['error' => 'Endpoint não encontrado']);
        break;
}
