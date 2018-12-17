window.onload = start;

/* With the placeholder text, we are adding/removing several different pieces of
text based on the user input/validation. The programme needs to have a clear sequence for it to
run correctly. First I am calling the 'hints', which needs to be presented on page load, this function
then calls the validate or clearError functions based on user input. The hint function is then
recalled or it's input removed. The other form inputs are listend for in load event listeners, which also in
turn validate or report errors. */

function start() {

    // firstNameHint();
    // secondNameHint();
    // healthHint();
    loadEventListeners();
    // switchToolTip();
    $('#first-name').blur(validateFirstName);
    $('#second-name').blur(validateSecondName);
    $('#email').blur(validateEmail);
}

function loadEventListeners() {
 //     var email = $( "#email" );
 //     email.focus(function(){
 //         email = $(this).id;
 //          clearError(email);
 //
 // });
 //
 // var telephone= $( "#telephone" );
 // email.focus(function(){
 //          email = $(this).id;
 //         clearError(email);
 //    });
 //
 //
 //
 //
 //
 //     $('#telephone').blur = validateTelephone;
 //     $('#email').blur = validateEmail;
 //
 //      // call processForm function on submit
 //     $('#userInfo').submit = processForm;
}




function validateFirstName() {

    var defaultText = "Enter your name.";
    var valid = true;
    var firstNameField = $('#first-name');
    var firstName = $('#first-name').val();
    console.log(firstName);
    /* first name contain only letters and is at least two charecters long, case insensitive  */
    var re = new RegExp(/^[a-z]{2,}$/i);
    if (re.test(firstName)) {
        // removeNameFocus();
        // removeRedError(firstNameField);
        console.log('valid')
        return valid;
    } else {
        $('#first-nameError').append('error in the name field');
        console.log(' not valid')
        // removeNameFocus();
        // addRedError(firstNameField);
        if(firstName ==''){
        // firstNameHint()
    }
        return valid = false;
    }
}

function validateSecondName() {

    var defaultText = "Enter your name.";
    var valid = true;
    var secondNameField = $('#second-name');
    var secondName = $('#second-name').val();
    console.log(secondName);
    /* first name contain only letters and is at least two charecters long, case insensitive  */
    var re = new RegExp(/^[a-z-]{2,}$/i);
    if (re.test(secondName)) {
        // removeNameFocus();
        // removeRedError(firstNameField);
        console.log('valid')
        return valid;
    } else {
        $('#second-nameError').append('error in the name field');
        console.log(' not valid')
        // removeNameFocus();
        // addRedError(firstNameField);
        if(secondName ==''){
        // firstNameHint()
    }
        return valid = false;
    }
}

function validateEmail(){

    var valid = true;
    var emailField = $('#email');
    var email = $('#email').val();
    console.log(email);
    /* first name contain only letters and is at least two charecters long, case insensitive  */
    var re = new RegExp(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/);
    if (re.test(email)) {
        // removeNameFocus();
        // removeRedError(firstNameField);
        console.log('valid')
        return valid;
    } else {
        $('#emailError').append('error in the name field');
        console.log(' not valid')
        // removeNameFocus();
        // addRedError(firstNameField);
        if(email ==''){
        // firstNameHint()
    }
        return valid = false;
    }
}




function removeNameFocus(){
    var firstNameField = document.getElementById('first-name');
    firstNameField.classList.remove('focusgreen');
}
