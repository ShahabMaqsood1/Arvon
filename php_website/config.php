<?php
// Database Configuration
define('DB_HOST', 'localhost');
define('DB_USER', 'your_username');  // Change this in cPanel
define('DB_PASS', 'your_password');  // Change this in cPanel
define('DB_NAME', 'arvon_db');       // Change this in cPanel

// Site Configuration
define('SITE_URL', 'https://arvon.pk');
define('SITE_NAME', 'ARVON');
define('CONTACT_EMAIL', 'info@arvon.pk');

// Database Connection
function getDBConnection() {
    $conn = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);
    
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    
    return $conn;
}

// Helper Functions
function sanitize($data) {
    return htmlspecialchars(strip_tags(trim($data)));
}

function jsonResponse($data, $statusCode = 200) {
    http_response_code($statusCode);
    header('Content-Type: application/json');
    echo json_encode($data);
    exit;
}
?>
