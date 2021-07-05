<?php

     session_start();

     // $_SESSION['user_name'] = 'jake1234';

     // echo $_SESSION['user_name'];

     if($_SESSION['email']){
          echo "You are logged in";
     } else {
          header("Location: login_task.php");
     }

?>