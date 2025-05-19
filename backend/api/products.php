<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");

$produtos = [
    [
        "id" => 1,
        "name" => "Ração Golden Cães 10kg",
        "image" => "/images/products/produto1.jpg",
        "price" => 129.9
    ],
    [
        "id" => 2,
        "name" => "Antipulgas Bravecto 20kg+",
        "image" => "/images/products/produto2.jpg",
        "price" => 169.5
    ],
    [
        "id" => 3,
        "name" => "Areia para Gatos 4kg",
        "image" => "/images/products/produto3.jpg",
        "price" => 45.0
    ],
    [
        "id" => 4,
        "name" => "Petisco Natural Ossinho 1kg",
        "image" => "/images/products/produto4.jpg",
        "price" => 39.9
    ]
];

echo json_encode($produtos);
?>