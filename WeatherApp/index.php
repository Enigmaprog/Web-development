<?php

  error_reporting(E_ERROR | E_PARSE);

  $weather = "";

  $error = "";

  if(isset($_GET['city'])){

    $urlContent = file_get_contents('http://api.openweathermap.org/data/2.5/weather?q='.$_GET['city'].'&units=metric&appid=57b3d4b31411c07e161abb947b57fc93');

    $forcastArray = json_decode($urlContent, true);

    if($forcastArray['cod'] == 200) {

      $weather = 'The weather in '.$_GET['city'].' is '.$forcastArray['weather'][0]['description'];

      $weather = $weather.'. The temperature is '.$forcastArray['main']['temp'].'&#8451;'.'. The speed of wind is '.$forcastArray['wind']['speed'].' m/sec';

    } else {
      $error = "The city name is incorrect, please try another";
    }

  }

?>


<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">

    <link rel="stylesheet" type="text/css" href="styles/style.css">

    <title>Weather App</title>
  </head>
  <body>

    <div class="container" id="mainDiv">
      <h1>Weather in The City</h1>

      <form>
        <div class="mb-3">
          <label for="city" class="form-label">Input a city name</label>
          <input class="form-control" id="city" name="city" aria-describedby="Forcast city" placeholder="Enter city name">
        </div>

        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>

    <div id="forecastDiv">
          
            <?php  

              if($weather){

                echo '<div class="alert alert-primary" role="alert">'.$weather.'.'.'</div>';

              } else if ($error) {
                echo '<div class="alert alert-danger" role="alert">'.$error.'.'.'</div>';
              }

            ?>

    </div>

    <!-- Optional JavaScript; choose one of the two! -->

    <!-- Option 1: Bootstrap Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js" integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0" crossorigin="anonymous"></script>

    <!-- Option 2: Separate Popper and Bootstrap JS -->
    <!--
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.6.0/dist/umd/popper.min.js" integrity="sha384-KsvD1yqQ1/1+IA7gi3P0tyJcT3vR+NdBTt13hSJ2lnve8agRGXTTyNaBYmCR/Nwi" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.min.js" integrity="sha384-nsg8ua9HAw1y0W1btsyWgBklPnCUAFLuTMS2G72MMONqmOymq585AcH49TLBQObG" crossorigin="anonymous"></script>
    -->
  </body>
</html>