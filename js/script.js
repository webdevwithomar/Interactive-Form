/*****************************
Basic Info 
******************************/

$('#name').focus(); // By default, the name input is focused

const $otherJob = $('#other-title'); // Selects the other job text field

$($otherJob).hide(); // By Default the text field is hidden

/*
- The event listener below, fires whenever
the status of the select field with the
id 'title' changes.

- The conditional statement inside the event
handler checks if the option inside the select
element is selected and has the value of
other.

- If the condition is true, the other job text
field is shown.

- If the condition becomes false, the text field
becomes hidden again.
*/

$('#title').on('change', function () {
  if ($(this).val() === 'other') { 'other'
    $($otherJob).show();
  } else {
    $($otherJob).hide();
  }
});

/*****************************
T-Shirt Info 
******************************/

$('#colors-js-puns').hide(); // By default, the div containing t-shirt color option is hidden

// The function below takes some option elements as arguments, hides or shows them and adds or removes attributes from them
function showHideColors (hide, show, addAttr, rmvAttr) {
  $('#colors-js-puns').show();
  $(hide).hide();
  $(show).show();
  $(addAttr).attr('selected', 'selected');
  $(rmvAttr).removeAttr('selected');
}

/*
- The event listener below fires whenever the
status of a select element is changed.

- Then it checks to see which t-shirt design
is selected using the attribute value.

- Based on the t-shirt design, the condition
shows and hides the color options.
*/

$('#design').on('change', function(){
  if ($('#design option:selected').attr('value') === 'heart js') {
    showHideColors (
    '#color option:nth-child(-1n+3)',
    '#color option:nth-child(1n+4)',
    '#color option:nth-child(4)',
    '#color option:nth-child(1)'
    )
  }
  else if ($('#design option:selected').attr('value') === 'js puns') { 
    showHideColors (
    '#color option:nth-child(1n+4)',
    '#color option:nth-child(-1n+3)',
    '#color option:nth-child(1)',
    '#color option:nth-child(4)'
    )
  } else {
    $('#colors-js-puns').hide();
  }
});

/*****************************
Register for Activities
******************************/

const checkboxes = $('input:checkbox'); // Selects the checkbox and stores it in a variable

const payment = $('<h2></h2>'); // Creates a new h2 element

$('.activities').append(payment); // Append it to the DOM

let amountOfMoney = 0; // Variable to track the number of money

// This function takes an input as an argument and gives the input an attribute, selects its parent and sets the text color.
function activitiesSection (selectInputwithNameAttr) {
  $(selectInputwithNameAttr).attr('disabled', 'disabled');
  $(selectInputwithNameAttr).parent().css('color', '#bbb');
  amountOfMoney += 100;
}

/*
- The Event Listener below fires if the status
of a checkbox is changed.

- If a checkbox is changed, the conditional statement
checks to see which checkbox has been checked.

- If the condition is true, the competing events
are disabled by giving an attribute to the checkbox
'disabled'

- The text color beside diabled event checkboxes are
also changed to grey by selecting the checkbox's parent
element and setting it's text color to #bbb.

- The amount of money adds to the amountOfMoney variable
*/

checkboxes.on('change', function () {
  const isChecked = $(this).is(':checked');
  if (isChecked) {
    if ($(this).attr('name') === 'all') {
      amountOfMoney += 200;
    }
    if ($(this).attr('name') === 'js-frameworks') {
      activitiesSection('input[name="express"]');
    }
    if ($(this).attr('name') === 'express') {
      activitiesSection('input[name="js-frameworks"]');
    }
    if ($(this).attr('name') === 'js-libs') {
      activitiesSection('input[name="node"]');
    }
    if ($(this).attr('name') === 'node') {
      activitiesSection('input[name="js-libs"]');
    }
    if ($(this).attr('name') === 'build-tools') {
      activitiesSection('input[name="npm"]');
    }
    if ($(this).attr('name') === 'npm') {
      activitiesSection('input[name="build-tools"]');
    }
  }

  // This function takes an input as an argument and removes an attribute, selects its parent and removes the style attribute.
 function activitiesSection2 (selectInputwithNameAttr) {
  $(selectInputwithNameAttr).removeAttr('disabled', 'disabled');
  $(selectInputwithNameAttr).parent().removeAttr('style');
  amountOfMoney -= 100;
}

  /*
  - The conditional statement below, checks to see if a 
  checkbox has not been checked.

  - If the condition is true, the competing events
  are enabled by removing the attribute of their checkbox 
  'disabled'.

  - The text color beside enabled event checkboxes are
  also changed to their original color by selecting the 
  checkbox's parent element and removing its style
  attribute.

  - Substracts the amount of money if unchecks the checkbox.
  */

  if (!isChecked) {
    if ($(this).attr('name') === 'all') {
      amountOfMoney -= 200;
    }
    if ($(this).attr('name') === 'js-frameworks') {
      activitiesSection2 ('input[name="express"]')
    }
    if ($(this).attr('name') === 'express') {
      activitiesSection2 ('input[name="js-frameworks"]')
    }
    if ($(this).attr('name') === 'js-libs') {
      activitiesSection2 ('input[name="node"]')
    }
    if ($(this).attr('name') === 'node') {
      activitiesSection2 ('input[name="js-libs"]')
    }
    if ($(this).attr('name') === 'build-tools') {
      activitiesSection2 ('input[name="npm"]')
    }
    if ($(this).attr('name') === 'npm') {
      activitiesSection2 ('input[name="build-tools"]')
    }
  }

  $('.activities h2').text(`Total: $${amountOfMoney}`); // Set the text content of the h2
});

/*****************************
Payment Info
******************************/

$('#payment option[value="credit card"]').attr('selected', true); // Credit card option is selected by default

$('#payment option[value="select_method"]').hide(); // Select from method is hide

// Selecting the div with the ID credit-card
const creditCard = $('#credit-card');

// Selecting the div that is the sibling of the div with the ID credit-card and setting its id to paypal
$('#credit-card').next().attr('id', 'paypal');

// Selecting the div with the id paypal and storing it to a variable
const paypal = $('#paypal');

// Selecting the div that is the sibling of the div with the ID credit-card and setting its id to bitcoin
$('#credit-card').next().next().attr('id', 'bitcoin');

// Selecting the div with the id bitcoin and storing it to a variable
const bitCoin = $('#bitcoin');

// A function that takes the payment method divs as arguments and show or hide them
function paymentMethods (paymentShow, paymentHide, paymentHide1) {
  $(paymentShow).show();
  $(paymentHide).hide();
  $(paymentHide1).hide();
}

/*
- The event listener below fires whenever 
changes happen to the payment select option

- If the credit card option is selected, the
credit card boxese are shown and other two
payment boxes are hidden

- If the paypal option is selected, the
paypal box is shown and other two
payment boxes are hidden

- If the bitcoin option is selected, the
bitcoin box is shown and other two
payment boxes are hidden
*/

$('#payment').on('change', function () {
  if ($('#payment option:selected').attr('value') === 'credit card') {
    paymentMethods(creditCard, paypal, bitCoin);
  }
  else if ($('#payment option:selected').attr('value') === 'paypal') {
    paymentMethods(paypal, creditCard, bitCoin);
  }
  else if ($('#payment option:selected').attr('value') === 'bitcoin') {
    paymentMethods(bitCoin, creditCard, paypal);
  }
});

/*****************************
Form Validation
******************************/
// Below is a function for errorMessages
function errorMessage(element, text) {
  const message = $('<p>'+text+'</p>');
  $('form').append(message);
  $(message).css('color', 'firebrick');
  $(message).insertBefore(element);
}

$('form').on('submit',function(e){
  if ($('#name').val() === '') {
    e.preventDefault();
    errorMessage($('#name'), 'Name field cannot be blank')
  }
});