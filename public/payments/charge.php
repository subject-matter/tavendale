<?php

require 'vendor/autoload.php';

// Set your secret key: remember to change this to your live secret key in production
// See your keys here: https://dashboard.stripe.com/account/apikeys
\Stripe\Stripe::setApiKey("sk_live_geYNVtPyLmOGk40cGLg6MDGb"); // live key: sk_live_geYNVtPyLmOGk40cGLg6MDGb

// Token is created using Checkout or Elements!
// Get the payment token ID submitted by the form:

$customeremail = $_POST['customerEmail'];

$invoicenumber = $_POST['invoiceNumber'];

$name = $_POST['companyName'];

$clientnumber = $_POST['clientNumber'];

$amount = $_POST['chargeTotal'];

$token = $_POST['stripeToken'];

$charge = \Stripe\Charge::create([
    'amount' => $amount,
    'currency' => 'nzd',
    'description' => 'Invoice Payment',
    'source' => $token,
    'receipt_email' =>  $customeremail,
    'metadata' => ['Name' => $name, 'Email Address' => $customeremail, 'Invoice Number' => $invoicenumber, 'Client Number' => $clientnumber],
]);

$arr = (array)$charge;
if (empty($arr)) {
    header('Location: /payments/payment-failed.php');
} else {
    header('Location: /payments/payment-successful.php');
}

?>
