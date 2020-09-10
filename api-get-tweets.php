
<?php
    //header('HTTP/1.1 500 Internal Server Error');
    exit("I error because");
// echo "latestReceivedTweetId";
//echo $_GET['latestReceivedTweetId'];
$sTweets = file_get_contents('private/users.txt');
$aTweets = json_decode($sTweets);

// Based on the array on top
// Based on the latestReceivedTweetId
// Send one tweet at a time NOt an array
// setInterval
// for loop

  foreach ($aTweets as &$aTweet) {
    if ($_SESSION["userId"] == $aTweet->id) {
        // print_r($aTweet->tweets);
        echo json_encode($aTweets);
        break;
    }
};

// http_response_code(200);
header('Content-Type: application/json');
echo json_encode($aTweets);