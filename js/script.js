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

$('#payment option[value="select_method"]').attr('disabled', true); // The first option is disabled because it is not a payment method

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

// bitcoin and paypal div are hidden by default

paypal.hide();
bitCoin.hide();

// A function that takes the payment method divs as arguments and show or hide them
function paymentMethods (paymentShow, paymentHide, paymentHide1) {
  $(paymentShow).show();
  $(paymentHide).hide();
  $(paymentHide1).hide();
  $(paymentHide).removeAttr('selected');
  $(paymentHide1).removeAttr('selected');
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
// 5 Functions below are to generate and hide errorMessages and generate the border colors if error occurs

function errorMessage(element, text, errorName) {
  const message = $('<p>'+text+'</p>');
  $('form').append(message);
  $(message).css('color', 'firebrick');
  $(message).attr('id', errorName);
  $(message).insertBefore(element);
  $('#'+errorName).hide();
}

function showError(id) {
  $('#'+id).show();
}

function hideError(id) {
  $('#'+id).hide();
}

function errorBorder (boxId) {
  $('#' + boxId).css('border','2px solid firebrick');
}

function errorFix (boxId) {
  $('#' + boxId).css('border','2px solid #c1deeb');
}

// Regrex Email validation function
function IsEmail(email) {
  var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if (!regex.test(email)) {
    return false;
  } else {
    return true;
  }
}

/*======= Live Validation =======*/

// Calling a function to generate an error message for name
errorMessage($('#name'), 'Must be at least 3 characters', 'nameError')

// The event listener below shows or hides the error message based on the length of character in the text input field
$('#name').keyup(function(){
  const $text = $('#name').val();
  if ($text.length < 3 || $text === '') {
    showError('nameError');
    errorBorder('name');
  } else {
    hideError('nameError');
    errorFix('name');
  }
});

// Calling a function to generate an error message for email
errorMessage($('#mail'), 'Invalid Email Address', 'mailError')

// The event listener below shows or hides the error message based on the length of character in the text input field
$('#mail').keyup(function(){
  const $text = $('#mail').val();
  if ($text === '' || IsEmail($text) === false) {
    showError('mailError');
    errorBorder('mail');
  } else {
    hideError('mailError');
    errorFix('mail');
  }
});

// Calling a function to generate an error message for credit-card
errorMessage($('#credit-card'), 'Invalid Credit Card Information', 'ccError')

// The 3 Functions below checks credit card info when calling

function ccNum () {
  if ($('#cc-num').val().length < 13 || $('#cc-num').val().length > 16 || isNaN($('#cc-num').val())) {
    showError('ccError');
    errorBorder('cc-num');
  } else {
    hideError('ccError');
    errorFix('cc-num');
  }
}

function zip () {
  if ($('#zip').val().length !== 5 || isNaN($('#zip').val())) {
    showError('ccError');
    errorBorder('zip');
  } else {
    hideError('ccError');
    errorFix('zip');
  }
}

function cvv () {
  if ($('#cvv').val().length !== 3 || isNaN($('#cvv').val())) {
    showError('ccError');
    errorBorder('cvv');
  } else {
    hideError('ccError');
    errorFix('cvv');
  }
}

// Since the credit card method is selected by default, the conditional statement below checks to see if the user has provided the credit card info correctly.

if ($('#payment option:selected').attr('value') === 'credit card') {
  
  $('#cc-num').blur(function(){
    ccNum();
  });

  $('#zip').blur(function(){
    zip();
  });

  $('#cvv').blur(function(){
    cvv();
  });
} else {
  hideError('ccError');
}

/*
- The Event Listener below fires whenever the status
of the payment method select element is changed.

- The conditional statement checks to see if only the
option with the credit card value is selected.

- If the condition is true, it checks if the user
has provided the credit card number, zip and cvv
properly.
*/

$('#payment').on('change', function(){
  if ($('#payment option:selected').attr('value') === 'credit card') {
    $('#cc-num').keyup(function(){
      ccNum();
    });
  
    $('#zip').keyup(function(){
      zip();
    });
  
    $('#cvv').keyup(function(){
      cvv();
    });
  } else {
    hideError('ccError');
  }
});

errorMessage($('.activities input[name="all"]'), 'At least one activity should be checked', 'activityError')

/*======= Validation When Submitting =======*/

$('form').on('submit',function(e){
  
  // The Name Field
  if ($('#name').val().length < 3 || $('#name').val() === '') {
    showError('nameError');
    errorBorder('name');
    e.preventDefault();
  } else {
    hideError('nameError');
    errorFix('name');
  }

  // The Email Field
  if ($('#mail').val() === '' || IsEmail($('#mail').val()) === false) {
    showError('mailError');
    errorBorder('mail');
    e.preventDefault();
  } else {
    hideError('mailError');
    errorFix('mail');
  }

  // The Register Activity
  if ($('input[type="checkbox"]:checked').length < 1) {
    showError('activityError');
    e.preventDefault();
  } else {
    hideError('activityError');
  }

  // The Credit Card Info
  if ($('#payment option:selected').attr('value') === 'credit card') {
    
    if ($('#cc-num').val().length < 13 || $('#cc-num').val().length > 16 || isNaN($('#cc-num').val())) {
      showError('ccError');
      errorBorder('cc-num');
      e.preventDefault();
    } else {
      hideError('ccError');
      errorFix('cc-num');
    }

    if ($('#zip').val().length !== 5 || isNaN($('#zip').val())) {
      showError('ccError');
      errorBorder('zip');
      e.preventDefault();
    } else {
      hideError('ccError');
      errorFix('zip');
    }
    
    if ($('#cvv').val().length !== 3 || isNaN($('#cvv').val())) {
      showError('ccError');
      errorBorder('cvv');
      e.preventDefault();
    } else {
      hideError('ccError');
      errorFix('cvv');
    }

  }

});