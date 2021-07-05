<?php

$colors = array("red", "orange", "blue", "green");
$colors[] = "yellow";

print_r($colors);

echo $colors[1];

echo "<br>";

$names[0] = "Jane";
$names[1] = "Jake";
$names[5] = "Jim";
$names["name"] = "Jim";

unset($names[5]);
echo sizeof($names);

print_r($names);

echo "<br>";

echo $names["name"];

$years["Jane"] = 1999;
$years["Jare"] = 1989;
$years["Jim"] = 2009;

echo "<br>";

print_r($years);

?>