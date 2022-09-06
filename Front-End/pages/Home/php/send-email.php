<?php
ini_set('default_charset','UTF-8');

$to = 'coliveiraimobiliaria@gmail.com';


function url(){
  return sprintf(
    "%s://%s",
    isset($_SERVER['smtp.hostinger.com']) && $_SERVER['smtp.hostinger.com'] != 'off' ? 'https' : 'http',
    $_SERVER['smtp.hostinger.com']
  );
}

if($_POST) {

   $name = trim(stripslashes($_POST['name']));
   $email = trim(stripslashes($_POST['email']));
   $subject = trim(stripslashes($_POST['subject']));
   $contact_message = trim(stripslashes($_POST['message']));
   
	if ($subject == '') { $subject = "C OLIVEIRA Formulário de contato"; }

   // Set Message
   $message .= "E-mail de:" . $name . "<br />";
	 $message .= "Endereço de email: " . $email . "<br />";
   $message .= "Mensagem: <br />";
   $message .= nl2br($contact_message);
   $message .= "<br /> ----- <br /> Este e-mail foi enviado do seu site " . url() . " Formulário de Contato. <br />";

   // Set From: header
   $from =  $name . " <" . $email . ">";

   // Email Headers
	$headers = "From: " . $from . "\r\n";
	$headers .= "Reply-To: ". $email . "\r\n";
 	$headers .= "MIME-Version: 1.0\r\n";
	$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

   ini_set("sendmail_from", $to); 
   $mail = mail($to, $subject, $message, $headers);

	if ($mail) { echo "OK"; }
   else { echo "Algo deu errado. Por favor, tente novamente."; }

}
dd($_POST);
?>