<?php
require_once '../config.php';

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    jsonResponse(['success' => false, 'message' => 'Invalid request method'], 405);
}

$conn = getDBConnection();

// Get POST data
$data = json_decode(file_get_contents('php://input'), true);

$name = sanitize($data['name'] ?? '');
$email = sanitize($data['email'] ?? '');
$phone = sanitize($data['phone'] ?? '');
$subject = sanitize($data['subject'] ?? '');
$message = sanitize($data['message'] ?? '');

// Validation
if (empty($name) || empty($email) || empty($subject) || empty($message)) {
    jsonResponse(['success' => false, 'message' => 'All required fields must be filled'], 400);
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    jsonResponse(['success' => false, 'message' => 'Invalid email address'], 400);
}

// Insert into database
$stmt = $conn->prepare("INSERT INTO contact_messages (name, email, phone, subject, message) VALUES (?, ?, ?, ?, ?)");
$stmt->bind_param("sssss", $name, $email, $phone, $subject, $message);

if ($stmt->execute()) {
    // Send email notification
    $to = CONTACT_EMAIL;
    $email_subject = "New Contact Form Submission: " . $subject;
    $email_body = "Name: $name\nEmail: $email\nPhone: $phone\n\nMessage:\n$message";
    $headers = "From: noreply@arvon.pk\r\n";
    $headers .= "Reply-To: $email\r\n";
    
    mail($to, $email_subject, $email_body, $headers);
    
    $stmt->close();
    $conn->close();
    jsonResponse(['success' => true, 'message' => 'Message sent successfully']);
} else {
    $stmt->close();
    $conn->close();
    jsonResponse(['success' => false, 'message' => 'Failed to send message'], 500);
}
?>
