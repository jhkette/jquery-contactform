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
    firstNameHint();
    secondNameHint();


    // $('#second-name').blur(firstNameHint);
    $('#email').blur(validateEmail);

    $('#health').blur(validateHealth);
    $('#telephone').blur(validateTelephone);

    var email = $('#email');
    email.focus(function(){
       email = $(this);
       clearError(email);
    });

    var telephone = $('#telephone');
    telephone.focus(function(){
       telephone = $(this);
       clearError(telephone);
    });

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


function validateHealth(){

    var valid = true;
    var healthField = $('#health');
    var health = $('#health').val();
    console.log(health);
    /* first name contain only letters and is at least two charecters long, case insensitive  */
    var re = new RegExp(/^zha\d{6}$/i);
    if (re.test(health)) {
        // removeNameFocus();
        // removeRedError(firstNameField);
        console.log('valid')
        return valid;
    } else {
        $('#healthError').append('error in the name field');
        console.log(' not valid')
        // removeNameFocus();
        // addRedError(firstNameField);
        if(email ==''){
        // firstNameHint()
    }
        return valid = false;
    }
}

function firstNameHint() {

    var defaultText = "Enter your name.";
    var txtElem = $("#first-name");
    txtElem.val(defaultText);
    txtElem.css('color', '#A8A8A8');
    txtElem.css('fontStyle', "italic");


    txtElem.focus(function() {
        //the value being operated on
          removeNameFocus();
        if ($(this).val() == defaultText) {
            console.log('HELLLLLLO');
            $(this).val("");
            $(this).val("");
            $(this).css('color', '#000000');
            $(this).css('font-style', 'normal');
        }

        textElemId = $(this);
        clearError(textElemId);
    });
    txtElem.blur(function() {
        if ($(this).val() == "") {
            $(this).val(defaultText);
            $(this).css('color', '#A8A8A8');
            $(this).css('fontStyle', "italic");
        }
        validateFirstName();
    });
}


function secondNameHint() {

    var defaultText = "Enter your name.";
    var txtElem = $("#second-name");

    txtElem.val(defaultText);


    txtElem.css('color', '#A8A8A8');
    txtElem.css('fontStyle', "italic");


    txtElem.focus(function() {
        //the value being operated on

        if ($(this).val() == defaultText) {
            console.log('HELLLLLLO');
            $(this).val("");
            $(this).val("");
            $(this).css('color', '#000000');
            $(this).css('font-style', 'normal');
        }

        textElemId = $(this);
        clearError(textElemId);
    });
    txtElem.blur(function() {
        if ($(this).val() == "") {
            $(this).val(defaultText);
            $(this).css('color', '#A8A8A8');
            $(this).css('fontStyle', "italic");
        }
        validateSecondName();
    });
}

function clearError(id) {
    $('#'+$(id).attr('id')+'Error').html("&nbsp;");

}

function validateTelephone(){

    var valid = true;
    var healthField = $('#telephone');
    var health = $('#telephone').val();
    console.log(health);
    /* first name contain only letters and is at least two charecters long, case insensitive  */
    var re = new RegExp(/^\d{11}$/i);
    if (re.test(telephone)) {
        // removeNameFocus();
        // removeRedError(firstNameField);
        console.log('valid')
        return valid;
    } else {
        $('#telephoneError').append('error in the name field');
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
    var firstNameField = $('#first-name');
    firstNameField.removeClass('focusgreen');
}
