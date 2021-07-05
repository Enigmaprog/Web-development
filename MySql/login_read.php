<!-- CRUD - Create, Read, Update, Delete  -->

<?php

     include "db_connection.php";

        $query = 'SELECT * FROM users';

        $query_result = mysqli_query($connection, $query);
          if (!$query_result) {
               die("Query failed".mysqli_error());
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

     <div class="container">

        <div class="col-md-6">
        
               <?php

                    // while ($row = mysqli_fetch_row($query_result)) {
                    //      print_r($row);
                    // }
                    
                     while ($row = mysqli_fetch_assoc($query_result)) {
                         ?>
                         <pre>
                              <?php
                                   print_r($row);
                              ?>
                         </pre>
                         <?php
                    }

               ?>

        </div>

     </div>


</body>
</html>