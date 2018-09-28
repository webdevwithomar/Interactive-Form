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
    $('#colors-js-puns').show();
    $('#color option:nth-child(-1n+3)').hide();
    $('#color option:nth-child(1n+4)').show();
    $('#color option:nth-child(4)').attr('selected', 'selected');
    $('#color option:nth-child(1)').removeAttr('selected');
  }
  else if ($('#design option:selected').attr('value') === 'js puns') { 
    $('#colors-js-puns').show();
    $('#color option:nth-child(1n+4)').hide();
    $('#color option:nth-child(-1n+3)').show();
    $('#color option:nth-child(1)').attr('selected', 'selected');
    $('#color option:nth-child(4)').removeAttr('selected');
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

let amountOfMoney = 0; // Variable to track the number of money

checkboxes.on('change', function () {
  const isChecked = $(this).is(':checked');
  if (isChecked) {
    if ($(this).attr('name') === 'all') {
      amountOfMoney += 200;
    }
    if ($(this).attr('name') === 'js-frameworks') {
      $('input[name="express"]').attr('disabled', 'disabled');
      $('input[name="express"]').parent().css('color', '#bbb');
      amountOfMoney += 100;
    }
    if ($(this).attr('name') === 'express') {
      $('input[name="js-frameworks"]').attr('disabled', 'disabled');
      $('input[name="js-frameworks"]').parent().css('color', '#bbb');
      amountOfMoney += 100;
    }
    if ($(this).attr('name') === 'js-libs') {
      $('input[name="node"]').attr('disabled', 'disabled');
      $('input[name="node"]').parent().css('color', '#bbb');
      amountOfMoney += 100;
    }
    if ($(this).attr('name') === 'node') {
      $('input[name="js-libs"]').attr('disabled', 'disabled');
      $('input[name="js-libs"]').parent().css('color', '#bbb');
      amountOfMoney += 100;
    }
    if ($(this).attr('name') === 'build-tools') {
      $('input[name="npm"]').attr('disabled', 'disabled');
      $('input[name="npm"]').parent().css('color', '#bbb');
      amountOfMoney += 100;
    }
    if ($(this).attr('name') === 'npm') {
      $('input[name="build-tools"]').attr('disabled', 'disabled');
      $('input[name="build-tools"]').parent().css('color', '#bbb');
      amountOfMoney += 100;
    }
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
      $('input[name="express"]').removeAttr('disabled', 'disabled');
      $('input[name="express"]').parent().removeAttr('style');
      amountOfMoney -= 100;
    }
    if ($(this).attr('name') === 'express') {
      $('input[name="js-frameworks"]').removeAttr('disabled', 'disabled');
      $('input[name="js-frameworks"]').parent().removeAttr('style');
      amountOfMoney -= 100;
    }
    if ($(this).attr('name') === 'js-libs') {
      $('input[name="node"]').removeAttr('disabled', 'disabled');
      $('input[name="node"]').parent().removeAttr('style');
      amountOfMoney -= 100;
    }
    if ($(this).attr('name') === 'node') {
      $('input[name="js-libs"]').removeAttr('disabled', 'disabled');
      $('input[name="js-libs"]').parent().removeAttr('style');
      amountOfMoney -= 100;
    }
    if ($(this).attr('name') === 'build-tools') {
      $('input[name="npm"]').removeAttr('disabled', 'disabled');
      $('input[name="npm"]').parent().removeAttr('style');
      amountOfMoney -= 100;
    }
    if ($(this).attr('name') === 'npm') {
      $('input[name="build-tools"]').removeAttr('disabled', 'disabled');
      $('input[name="build-tools"]').parent().removeAttr('style');
      amountOfMoney -= 100;
    }
  }

  $('.activities h2').text(`Total: $${amountOfMoney}`); // Set the text content of the h2
});