<?php
//get data from form  

$name = $_POST['name'];
$email= $_POST['emailaddress'];
$message= $_POST['message'];
$Number= $_POST['mobile'];
$to = "officialaksoftwares@gmail.com";
$subject = "User Mail From AK WEB DESIGNS";
$txt ="Name = ". $name . "\r\n  Email = " . $email . "\r\n Message =" . $message . "\r\n mobile number =" . $Number;
$headers = "From: noreply@akwebdesignsjp.com" . "\r\n" .
"CC: akwebdesignsjp@email.com";
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}
//redirect
header("Location:thankyou.html");
?>