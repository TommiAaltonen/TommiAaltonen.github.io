<?php
$email = strip_tags(trim(($_POST['email'])));
$nimi = strip_tags(trim(($_POST['name'])));
$viesti = strip_tags(trim(($_POST['message'])));
$captcha = strip_tags(trim(($_POST['captcha'])));
$secret = '6Le2UQ0UAAAAADRczXCaAi_VS0Jvaj6ty9lRf_cJ';

$IP = $_SERVER['REMOTE_ADDR'];

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

$verifyResponse = file_get_contents('https://www.google.com/recaptcha/api/siteverify?secret='.$secret.'&response='.$captcha);
$responseData = json_decode($verifyResponse);
if($responseData->success){
  $to      = 'tommi.aaltonen@leadnium.fi';
  $subject = 'Leadnium Contact';
  $message = 'Lähettäjä: '.$nimi.'
  Sähköposti: '.$email.'
  Viesti: '.$viesti.'
  Viesti lähetettiin IP osoitteesta: '.$IP.'';
  $headers = 'From: webmaster@aaltonen.xyz' . "\r\n" .
      'Reply-To: tommi.aaltonen@leadnium.fi' . "\r\n" .
      'X-Mailer: PHP/' . phpversion();

  mail($to, $subject, $message, $headers);


  echo '<div class="alert alert-success"><strong>Message sent successfully!</strong><br></div>';
}
else {
  echo '<div class="alert alert-danger"><strong>ERROR!</strong><br></div>';
}
}
else {
  echo '<div class="alert alert-danger"><strong>ERROR!</strong><br></div>';
}
?>
