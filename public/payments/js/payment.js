  

// Step 1: Set up Stripe Elements

var stripe = Stripe('pk_live_5uXpbRMqWw11v8krM1FDliDM');
var elements = stripe.elements({
    fonts: [
      {
        cssSrc: 'https://fonts.googleapis.com/css?family=Open+Sans:300,500,700'
      }
    ]
  });


// Step 2: Create your payment form

  var style = {
    base: {
      // Add your base input styles here. For example:
      fontFamily: '"Open Sans", "Arial", sans-serif',
      fontSize: '16px',
      color: '#000',
      '::placeholder': {
        color: '#999',
      },
    }
  };


  // Card number 

  var cardNumber = elements.create('cardNumber', {
      style: style,
      placeholder: 'Card number',
    });

  cardNumber.mount('#card-number');

  cardNumber.addEventListener('change', function(event) {
    var displayError = document.getElementById('card-errors');
    if (event.error) {
      displayError.textContent = event.error.message;
    } else {
      displayError.textContent = '';
    }
  });

    // Card Expiry

    var cardExpiry = elements.create('cardExpiry', {
        style: style,
        placeholder: 'Card expiry',
      });
  
      cardExpiry.mount('#card-expiry');
  
      cardExpiry.addEventListener('change', function(event) {
      var displayError = document.getElementById('card-errors');
      if (event.error) {
        displayError.textContent = event.error.message;
      } else {
        displayError.textContent = '';
      }
    });


        // Card CVC

        var cardCvc = elements.create('cardCvc', {
            style: style,
            placeholder: 'CVC',
          });
      
          cardCvc.mount('#card-cvc');
      
          cardCvc.addEventListener('change', function(event) {
          var displayError = document.getElementById('card-errors');
          if (event.error) {
            displayError.textContent = event.error.message;
          } else {
            displayError.textContent = '';
          }
        });


// Step 3: Create a token to securely transmit card information


  // Create a token or display an error when the form is submitted.
var form = document.getElementById('payment-form');
form.addEventListener('submit', function(event) {
  event.preventDefault();

  stripe.createToken(cardNumber).then(function(result) {
    if (result.error) {
      // Inform the customer that there was an error.
      var errorElement = document.getElementById('card-errors');
      errorElement.textContent = result.error.message;
    } else {
      // Send the token to your server.
      stripeTokenHandler(result.token);
    }
  });
});

  // Add Fees to input

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

document.getElementById('payment_amount').addEventListener('change', function(event) {


  var invoicetotal = document.getElementById("payment_amount").value;

  if(invoicetotal != '') {

  invoicetotal = parseFloat(invoicetotal.replace(/,/g, ''));

  var flatfee = 0.30;
  var percentagecalc = 0.971;

  invoicetotal = parseFloat(invoicetotal);

  invoicetotalflatfee = invoicetotal + flatfee;

  chargetotal = invoicetotalflatfee / percentagecalc;

  chargetotal = chargetotal.toFixed(2);

  var ccfees = (chargetotal * 0.029) + 0.30;
  ccfees = ccfees.toFixed(2);

  invoicetotal = numberWithCommas(invoicetotal);
  chargetotalcommas = numberWithCommas(chargetotal);

  document.getElementById("invoice_total").innerHTML =  invoicetotal;
  document.getElementById("card_fee").innerHTML =  ccfees;
  document.getElementById("total_fees").innerHTML =  chargetotalcommas;

  console.log(chargetotal);

  var charge = (chargetotal * 100);

  charge = parseInt(charge);

  console.log(charge);

  var form = document.getElementById('payment-form');

  var hiddenAmount = document.createElement('input');
  hiddenAmount.setAttribute('type', 'hidden');
  hiddenAmount.setAttribute('name', 'chargeTotal');
  hiddenAmount.setAttribute('value', charge);
  form.appendChild(hiddenAmount);
  
  } else {

    var totaldue = '0.00';
    
    document.getElementById("invoice_total").innerHTML =  totaldue;
    document.getElementById("card_fee").innerHTML =  totaldue;
    document.getElementById("total_fees").innerHTML =  totaldue;

  }

});

document.getElementById('email_address').addEventListener('change', function(event) {

  var form = document.getElementById('payment-form');

  var emailaddress = document.getElementById("email_address").value; 

  var hiddenEmailAddress = document.createElement('input');
  hiddenEmailAddress.setAttribute('type', 'hidden');
  hiddenEmailAddress.setAttribute('name', 'customerEmail');
  hiddenEmailAddress.setAttribute('value', emailaddress);
  form.appendChild(hiddenEmailAddress);

});

document.getElementById('company_name').addEventListener('change', function(event) {

  var form = document.getElementById('payment-form');

  var companyname = document.getElementById("company_name").value; 

  var hiddenCompanyName = document.createElement('input');
  hiddenCompanyName.setAttribute('type', 'hidden');
  hiddenCompanyName.setAttribute('name', 'companyName');
  hiddenCompanyName.setAttribute('value', companyname);
  form.appendChild(hiddenCompanyName);

});

document.getElementById('invoice_number').addEventListener('change', function(event) {

  var form = document.getElementById('payment-form');

  var invoicenumber = document.getElementById("invoice_number").value; 

  var hiddenInvoiceNumber = document.createElement('input');
  hiddenInvoiceNumber.setAttribute('type', 'hidden');
  hiddenInvoiceNumber.setAttribute('name', 'invoiceNumber');
  hiddenInvoiceNumber.setAttribute('value', invoicenumber);
  form.appendChild(hiddenInvoiceNumber);

});

document.getElementById('client_number').addEventListener('change', function(event) {

  var form = document.getElementById('payment-form');

  var clientnumber = document.getElementById("client_number").value; 

  var hiddenClientNumber = document.createElement('input');
  hiddenClientNumber.setAttribute('type', 'hidden');
  hiddenClientNumber.setAttribute('name', 'clientNumber');
  hiddenClientNumber.setAttribute('value', clientnumber);
  form.appendChild(hiddenClientNumber);

});

 // Step 4: Submit the token and the rest of your form to your server

function stripeTokenHandler(token) {
  // Insert the token ID into the form so it gets submitted to the server
  var form = document.getElementById('payment-form');
  var hiddenInput = document.createElement('input');

  hiddenInput.setAttribute('type', 'hidden');
  hiddenInput.setAttribute('name', 'stripeToken');
  hiddenInput.setAttribute('value', token.id);
  form.appendChild(hiddenInput);

  // Submit the form
  form.submit();
}