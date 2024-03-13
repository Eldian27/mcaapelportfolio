<?php
// You can replace this with actual data retrieval logic from a database
$portfolioData = [
    [
        'image' => 'path/to/image0.jpg',
        'caption' => 'Description 1'
    ],
    [
        'image' => 'path/to/image2.jpg',
        'caption' => 'Description 2'
    ],
    // Add more items as needed
];

header('Content-Type: application/json');
echo json_encode($portfolioData);
?>
