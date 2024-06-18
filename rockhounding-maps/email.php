<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "sponsors@rockhounding.org";
    $subject = "New Submission from Rockhounding.org";
    $message = "";
    $headers = "From: no-reply@rockhounding.org\r\n";

    // Determine which form was submitted
    if (isset($_POST['location-name'])) {
        $location_name = htmlspecialchars($_POST['location-name']);
        $gps_coordinates = htmlspecialchars($_POST['gps-coordinates']);
        $found_here = htmlspecialchars($_POST['found-here']);
        $other_details = htmlspecialchars($_POST['other-details']);
        $access_type = htmlspecialchars($_POST['access-type']);

        $message = "Location Name: $location_name\n";
        $message .= "GPS Coordinates: $gps_coordinates\n";
        $message .= "What Can Be Found Here: $found_here\n";
        $message .= "Other Details: $other_details\n";
        $message .= "Access Type: $access_type\n";

        mail($to, $subject, $message, $headers);
        echo "success";
    } elseif (isset($_POST['name'])) {
        $name = htmlspecialchars($_POST['name']);
        $find = htmlspecialchars($_POST['find']);
        $story = htmlspecialchars($_POST['story']);
        $location = htmlspecialchars($_POST['location']);

        $message = "Name: $name\n";
        $message .= "Find: $find\n";
        $message .= "Story / Anything You Want To Share: $story\n";
        $message .= "Location: $location\n";

        if (isset($_FILES['picture']) && $_FILES['picture']['error'] == UPLOAD_ERR_OK) {
            $file_tmp = $_FILES['picture']['tmp_name'];
            $file_name = $_FILES['picture']['name'];
            $file_type = $_FILES['picture']['type'];

            $fp = fopen($file_tmp, "rb");
            $file = fread($fp, filesize($file_tmp));
            fclose($fp);

            $file = chunk_split(base64_encode($file));

            $boundary = md5(uniqid(time()));

            $headers .= "MIME-Version: 1.0\r\n";
            $headers .= "Content-Type: multipart/mixed; boundary=\"$boundary\"\r\n";

            $message = "--$boundary\r\n";
            $message .= "Content-Type: text/plain; charset=\"utf-8\"\r\n";
            $message .= "Content-Transfer-Encoding: 7bit\r\n\r\n";
            $message .= "Name: $name\n";
            $message .= "Find: $find\n";
            $message .= "Story / Anything You Want To Share: $story\n";
            $message .= "Location: $location\n";
            $message .= "\r\n--$boundary\r\n";
            $message .= "Content-Type: $file_type; name=\"$file_name\"\r\n";
            $message .= "Content-Transfer-Encoding: base64\r\n";
            $message .= "Content-Disposition: attachment; filename=\"$file_name\"\r\n\r\n";
            $message .= $file . "\r\n";
            $message .= "--$boundary--\r\n";

            mail($to, $subject, $message, $headers);
            echo "success";
        } else {
            mail($to, $subject, $message, $headers);
            echo "success";
        }
    } else {
        echo "Invalid submission.";
    }
} else {
    echo "Invalid request method.";
}
?>
