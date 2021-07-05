<!-- CRUD - CREATE, READ, UPDATE, DELETE -->

<?php
          include "db_connection.php";

          $query = "SELECT * FROM users WHERE password LIKE '%34%';";

          $query_result = mysqli_query($connection, $query);
          if(!$query_result) {
               die("Query failed".mysqli_error());
          }
          
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