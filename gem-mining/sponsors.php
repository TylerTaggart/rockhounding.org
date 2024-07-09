<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $website = $_POST['website'];

    $to = "sponsors@rockhounding.org";
    $subject = "New Sponsor Request";
    $message = "Email: $email\nPhone: $phone\nWebsite: $website";
    $headers = "From: no-reply@rockhounding.org";

    if (mail($to, $subject, $message, $headers)) {
        echo "Your request has been sent successfully.";
    } else {
        echo "There was a problem sending your request. Please try again.";
    }
}
?>
