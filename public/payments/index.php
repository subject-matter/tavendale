<html>

<head>
    <title>Payments | Tavendale and Partners</title>
    <meta type="description" cotnent="Tavendale and Partners payment page." />
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,500,700" rel="stylesheet">
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0" />
    <link href="/payments/css/style.css" rel="stylesheet" />

</head>

<body>

    <section class="background">

        <div class="white-container">

            <div class="form-container">

                <header>
                    <a href="https://www.tp.co.nz">
                        <img src="/payments/img/tp-logo.svg" alt="Tavendale and Partners Logo" />
                    </a>
                    <a class="back-button" href="https://www.tp.co.nz">BACK TO HOME PAGE</a>
                </header>

                <div class="content">
                    <h1>Secure Payment Page</h1>
                    <p>We are happy to offer a secure online payment service.</p>
                    <p>Please complete all fields below and press submit payment. We will send you an email to confirm payment.</p>
                    <p>Please note, all charges are in NZ dollars.</p>

                </div>

                <div class="form">

                    <h2>Pay an Invoice</h2>
                    <p>All fields are required.</p>

                    <form action="/payments/charge.php" method="post" id="payment-form" autocomplete="off">

                        <input id="company_name" placeholder="Name" autocomplete="off" required>
                        <input id="email_address" placeholder="Email address" autocomplete="off" required>
                        <input id="invoice_number" placeholder="Invoice number" autocomplete="off" required>
                        <input id="client_number" placeholder="Client number" autocomplete="off" required>

                        <div class="card-details">
                            <img src="/payments/img/secure-icon.png" class="secure-icon" alt="Padlock Icon" />


                            <div class="form-row">

                                <input id="payment_amount" placeholder="Payment amount (NZD)" autocomplete="off" required>

                                <div id="card-number"></div>

                                <div id="card-expiry"></div>

                                <div id="card-cvc"></div>

                                <table>
                                    <tr>
                                        <td>Invoice total:</td>
                                        <td class="align-right">$<span id="invoice_total">0.00</span></td>
                                    </tr>
                                    <tr>
                                        <td>Credit card fee:</td>
                                        <td class="align-right"> $<span id="card_fee">0.00</span></td>
                                    </tr>
                                    <tr>
                                        <td><strong>Total due:</strong></td>
                                        <td class="align-right"> <strong>$<span id="total_fees">0.00</span></strong></td>
                                    </tr>
                                </table>

                                <!-- Used to display Element errors. -->
                                <div id="card-errors" role="alert"></div>
                            </div>

                            <button type="submit">Submit Payment</button>

                            <img src="/payments/img/payment-icons.png" class="payment-icons" alt="Visa, Mastercard, American Express and Diners Club Logos" />

                    </form>

                </div>



                <div class="under-form">

                    <p>Please note all transactions inccur a credit card fee.</p>
                    <p>Secure payments processed by<img src="/payments/img/stripe-logo.png" class="stripe-logo" alt="Stripe Logo" /></p>

                </div>

            </div>


            <div class="page-divider"></div>

            <footer>


                <div class="social-icons">
                    <a href="https://www.linkedin.com/company-beta/1440983/" target="_blank" rel="noopener"><img src="/payments/img/linkedin-icon.png" alt="LinkedIn Icon" /></a>
                    <a href="https://www.facebook.com/tavendaleandpartners/" target="_blank" rel="noopener"><img src="/payments/img/facebook-icon.png" alt="Facebook Icon" /></a>
                </div>

                <p>Contact us at <a href="mailto:you+us@tp.co.nz">you+us@tp.co.nz</a></p>
            </footer>

        </div>

        </div>

    </section>

    <script src="https://js.stripe.com/v3/"></script>
    <script src="/payments/js/payment.js"></script>

</body>

</html>