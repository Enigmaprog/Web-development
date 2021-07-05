<?php

include "db_connection.php";  

if (isset($_POST['submit'])) {
     $email = $_POST['email'];
     $password = $_POST['password'];
     $username = $_POST['username'];
     $id = $_POST['id'];

     // $update_query = "UPDATE users SET user_name = '$username', email = '$email', 
     //      password = '$password' WHERE id = $id"; 

     $update_query = "DELETE FROM users"; 
     // $update_query .= " user_name = '$username',";
     // $update_query .= " email = '$email',";
     // $update_query .= " password = '$password'";
     $update_query .= " WHERE id = $id";

     $update_query_result = mysqli_query($connection, $update_query);

     if(!$update_query_result) {
          die("Query failed ".mysqli_error());
     }

}

$query = "SELECT * FROM users;";

$query_result = mysqli_query($connection, $query);

if(!$query_result) {
     die("Query failed ".mysqli_error());
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
<form action="login_delete.php" method="post">
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
          <select name="id">
               <?php

                    while ($row = mysqli_fetch_assoc($query_result)) {
                         $id = $row['id'];                       
                         echo "<option value='$id'>$id</option>";
                    }

               ?>

          </select>
     </div>
     <button type="submit" class="btn btn-primary" name="submit">DELETE</button>
</form>

</body>
</html>