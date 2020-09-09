<?php
  session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
<form action="signup-action.php" method="post">
    <input type="text" name="email" placeholder="email"><br>
    <input type="text" name="username" placeholder="Your name"><br>
    <input name="password" type="text" placeholder="password" value="123"><br>
    <button class="button">Signup</button>
</form>
</body>
</html>