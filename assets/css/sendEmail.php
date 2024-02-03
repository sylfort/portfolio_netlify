<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = strip_tags(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $message = trim($_POST["message"]);

    // Specify your email here
    $to = 'contact@sylviomafort.dev';

    // Subject of the email
    $subject = "New Contact from $name";

    // Email content
    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Message:\n$message\n";

    // Email headers
    $email_headers = "From: $name <$email>";

    // Send the email
    mail($to, $subject, $email_content, $email_headers);
    
    // Redirect to a new page or display a success message
    echo "Thank you for your message. It has been sent.";
}
?>
