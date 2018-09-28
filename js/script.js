/*****************************
Basic Info 
******************************/

$('#name').focus(); // By default, the name input is focused

const $otherJob = $('<input type="text" id="other-title" placeholder="Your Job Role">') // Creates a text field, gives it an id attribute and a placeholder attribute and stores it in a variable

$('fieldset:first-child').append($otherJob); // Selects the first fieldset and appends the other-job text field

$($otherJob).hide(); // By Default the text field is hidden

$('#title').on('change', function () { // Listens for any select option change
  if ($(this).val() === 'other') { // Checks if the option has the value 'other'
    $($otherJob).show(); // Shows the text field
  } else {
    $($otherJob).hide(); // Hides the text field
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

/*
- The Event Listener below checks to see if the status
of a checkbox is changed.

- If a checkbox is changed, the conditional statement
checks to see which checkbox has been checked.

- If the condition is true, the competing events
are disabled by giving an attribute to the checkbox
'disabled'

- The text color beside diabled event checkboxes are
also changed to grey by selecting the checkbox's parent
element and setting it's text color to #bbb.
*/

checkboxes.on('change', function () {
  const isChecked = $(this).is(':checked');
  if (isChecked) {
    if ($(this).attr('name') === 'js-frameworks') {
      $('input[name="express"]').attr('disabled', 'disabled');
      $('input[name="express"]').parent().css('color', '#bbb');
    }
    if ($(this).attr('name') === 'express') {
      $('input[name="js-frameworks"]').attr('disabled', 'disabled');
      $('input[name="js-frameworks"]').parent().css('color', '#bbb');
    }
    if ($(this).attr('name') === 'js-libs') {
      $('input[name="node"]').attr('disabled', 'disabled');
      $('input[name="node"]').parent().css('color', '#bbb');
    }
    if ($(this).attr('name') === 'node') {
      $('input[name="js-libs"]').attr('disabled', 'disabled');
      $('input[name="js-libs"]').parent().css('color', '#bbb');
    }
    if ($(this).attr('name') === 'build-tools') {
      $('input[name="npm"]').attr('disabled', 'disabled');
      $('input[name="npm"]').parent().css('color', '#bbb');
    }
    if ($(this).attr('name') === 'npm') {
      $('input[name="build-tools"]').attr('disabled', 'disabled');
      $('input[name="build-tools"]').parent().css('color', '#bbb');
    }
  }

  /*
  - The conditional statement below, checks to see which 
  checkbox has not been checked.

  - If the condition is true, the competing events
  are enabled by removing the attribute of a checkbox 
  'disabled'.

  - The text color beside enabled event checkboxes are
  also changed to their original color by selecting the 
  checkbox's parent element and removing its style
  attribute.
  */

  if (!isChecked) {
    if ($(this).attr('name') === 'js-frameworks') {
      $('input[name="express"]').removeAttr('disabled', 'disabled');
      $('input[name="express"]').parent().removeAttr('style');
    }
    if ($(this).attr('name') === 'express') {
      $('input[name="js-frameworks"]').removeAttr('disabled', 'disabled');
      $('input[name="js-frameworks"]').parent().removeAttr('style');
    }
    if ($(this).attr('name') === 'js-libs') {
      $('input[name="node"]').removeAttr('disabled', 'disabled');
      $('input[name="node"]').parent().removeAttr('style');
    }
    if ($(this).attr('name') === 'node') {
      $('input[name="js-libs"]').removeAttr('disabled', 'disabled');
      $('input[name="js-libs"]').parent().removeAttr('style');
    }
    if ($(this).attr('name') === 'build-tools') {
      $('input[name="npm"]').removeAttr('disabled', 'disabled');
      $('input[name="npm"]').parent().removeAttr('style');
    }
    if ($(this).attr('name') === 'npm') {
      $('input[name="build-tools"]').removeAttr('disabled', 'disabled');
      $('input[name="build-tools"]').parent().removeAttr('style');
    }
  }
});