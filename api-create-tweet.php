<?php

try{
  session_start();
  $sTweetId = uniqid();

  if( ! isset($_POST['tweetTitle']) ){
    http_response_code(400);
    header('Content-Type: application/json');
    echo '{"error":"missing title"}';
    exit();
  }
  if( strlen($_POST['tweetTitle']) < 2 ){
    http_response_code(400);
    header('Content-Type: application/json');
    echo '{"error":"title must be at least 2 characters"}';
    exit();
  }
  if( strlen($_POST['tweetTitle']) > 100 ){
    http_response_code(400);
    header('Content-Type: application/json');
    echo '{"error":"title cannot be longet than 100 characters"}';
    exit();
  }

//   if( ! isset($_POST['tweetMessage']) ){
//     http_response_code(400);
//     header('Content-Type: application/json');
//     echo '{"error":"missing message"}';
//     exit();
//   }
//   if( strlen($_POST['tweetMessage']) < 2 ){
//     http_response_code(400);
//     header('Content-Type: application/json');
//     echo '{"error":"message must be at least 2 characters"}';
//     exit();
//   }
//   if( strlen($_POST['tweetMessage']) > 140 ){
//     http_response_code(400);
//     header('Content-Type: application/json');
//     echo '{"error":"title cannot be longet than 140 characters"}';
//     exit();
//   }

  // $aTweet = ["id"=>$sTweetId, "title"=>$sTweetTitle];
  // echo json_encode($aTweet);
  // {"id":"5f5728a48e590","title":"x"}

  $jTweet          = new stdClass(); // {}
  $jTweet->id      = $sTweetId;
  $jTweet->title   = $_POST['tweetTitle'];
  //$jTweet->message = $_POST['tweetMessage'];
  // echo json_encode($jTweet);

  // open the db
  $sTweets = file_get_contents('private/users.txt');
  // convert the data to an object []
  $aTweets = json_decode($sTweets);
  // access tweets
  //print_r($aTweets[0]->tweets);
  //echo $_SESSION["userId"];

  foreach ($aTweets as &$aTweet) {
    if ($_SESSION["userId"] == $aTweet->id) {
        //$aTweet->tweets = $jTweet;
        //$aTweet->tweets = $jTweet;
        array_push($aTweet->tweets, $jTweet);
        //print_r($aTweet->tweets);
        print_r($aTweet);
        //echo 'match';
        // convert the object back to text
        $sTweets = json_encode($aTweets);
        file_put_contents('private/users.txt', $sTweets);
        break;
    }
};
//   write the tweet to the object
  //array_push($aTweets, $jTweet);
//   // convert the object back to text
//   $sTweets = json_encode($aTweets);
//   // save the text into the file
//   file_put_contents('tweets.txt', $sTweets);

  header('Content-Type: application/json');
  //echo '{ "id":"'.$sTweetId.'"}';
  //echo $sTweetId;
}
catch(Exception $ex){
  // http_response_code(500);
  // header('Content-Type: application/json');
  echo '{"message":"error '.__LINE__.'"}';
}