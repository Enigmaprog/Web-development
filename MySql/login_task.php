<?php

     session_start();
     // echo $_SESSION['user_name'];

     include "db_connection.php";  

     if (isset($_POST['submit'])) {
          
          if(!$_POST['email'] OR !$_POST['password']) {
               echo "You must input email and password"; 
          } else {
               $email = $_POST['email'];
               $password = $_POST['password'];
               $username = $_POST['username'];
               
               $select_query = "SELECT * FROM users WHERE email = '$email';";
               $select_query_result = mysqli_query($connection, $select_query);
               if(mysqli_num_rows($select_query_result) > 0){
                    echo "This email already exists, please input another email";
               } else {
                    $query = "INSERT INTO users (user_name, email, password) VALUES 
                    ('$username', '$email', '$password');";
          
                    $query_result = mysqli_query($connection, $query);
          
                    if(!$query_result) {
                         die("Query failed".mysqli_error());
                    } else {
                         $_SESSION['email'] = $email;
                         header("Location: session_and_cookies.php");
                         echo "You are signed up";
                    }
               }
          }
     }
?>


<!DOCTYPE html>
<html>
<head>
    <title></title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" 
    integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">

</head>
<body>
    
     <form action="login_task.php" method="post">
     <div class="mb-3">
          <label for="exampleInputUsername1" class="form-label">Username</label>
          <input type="text" class="form-control" name="username" id="exampleInputUsername1" aria-describedby="emailHelp" placeholder="Enter your name">
     </div>

     <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email address</label>
          <input type="email" class="form-control" name="email" id="exampleInputEmail1" aria-describedby="emailHelp">
          <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
     </div>
     <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input type="password" class="form-control" name="password" id="exampleInputPassword1">
     </div>
     <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1">
          <label class="form-check-label" for="exampleCheck1">Check me out</label>
     </div>
     <button type="submit" class="btn btn-primary" name="submit" >Submit</button>
     </form>

</body>
</html>