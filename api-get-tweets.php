<?php
  session_start();

  // open the db
  $sTweets = file_get_contents('private/users.txt');
  $aTweets = json_decode($sTweets);
  header('Content-Type: application/json');

  foreach ($aTweets as &$aTweet) {
    if ($_SESSION["userId"] == $aTweet->id) {
       
        //print_r($aTweet->tweets);
        print_r(json_encode($aTweet->tweets));
        break;
    }
};
?>
