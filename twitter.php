<?php
try{  
(function(){
session_start();
})();
}
catch(Exception $ex){
    // http_response_code(500);
    // header('Content-Type: application/json');
    echo '{"message":"error '.__LINE__.'"}';
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Twitter</title>
</head>
<body>
    <form action="logout.php" method="POST">
        <button type="submit">Logout</button>
    </form>
    <form id="formTweet" onsubmit="postTweet(); return false">
        <input name="tweetMessage" type="text" placeholder="Tweet Message" value="Message">
        <button type="submit">Tweet</button>
    </form>
    <div id="tweets">
	</div>
    <script src="app.js"></script>
</body>
</html>
