window.onload = start;

/* With the placeholder text, we are adding/removing several different pieces of
text based on the user input/validation. The programme needs to have a clear sequence for it to
run correctly. First I am calling the 'hints', which needs to be presented on page load, this function
then calls the validate or clearError functions based on user input. The hint function is then
recalled or it's input removed. The other form inputs are listend for in load event listeners, which also in
turn validate or report errors. */

function start() {
    loadEventListeners();
    firstNameHint();
    secondNameHint();
    healthHint();
    switchToolTip();

}

function loadEventListeners() {
    $('#email').blur(validateEmail);
    $('#telephone').blur(validateTelephone);

    var email = $('#email');
    email.focus(function() {
        email = $(this);
        clearError(email);
    });

    var telephone = $('#telephone');
    telephone.focus(function() {
        telephone = $(this);
        clearError(telephone);
    });

    $('#userInfo').submit(processForm);
}



function validateFirstName() {

    var defaultText = "Enter your name.";
    var valid = true;
    var firstNameField = $('#first-name');
    var firstName = $('#first-name').val();

    /* first name contain only letters and is at least two charecters long, case insensitive  */
    var re = new RegExp(/^[a-z]{2,}$/i);
    if (re.test(firstName)) {
        removeNameFocus();
        removeRedError(firstNameField);
        return valid;
    } else {
        $('#first-nameError').append('error in the name field');
        removeNameFocus();
        addRedError(firstNameField);

        return valid = false;
    }
}

function validateSecondName() {

    var defaultText = "Enter your name.";
    var valid = true;
    var secondNameField = $('#second-name');
    var secondName = $('#second-name').val();

    /* first name contain only letters and is at least two charecters long, case insensitive  */
    var re = new RegExp(/^[a-z-]{2,}$/i);
    if (re.test(secondName)) {
        // removeNameFocus();
        removeRedError(secondNameField);
        return valid;
    } else {
        $('#second-nameError').append('error in the name field');

        addRedError(secondNameField);

        return valid = false;
    }
}

function validateEmail() {

    var valid = true;
    var emailField = $('#email');
    var email = $('#email').val();

    /* first name contain only letters and is at least two charecters long, case insensitive  */
    var re = new RegExp(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/);
    if (re.test(email)) {
        // removeNameFocus();
        removeRedError(emailField);

        return valid;
    } else {
        $('#emailError').append('error in the name field');

        // removeNameFocus();
        addRedError(emailField);

        return valid = false;
    }
}

function processForm() {

    clearAllErrors();

    var firstName = validateFirstName();
    var lastName = validateSecondName();
    var email = validateEmail();
    var health = validateHealth();



    if ((firstName == true) && (lastName == true) && (email == true) && (health == true))  {

        toggleModal();
        return false;
    }

    else{
        $('#submitError').html('There are errors in the form');
     return false;
    }
}

function validateHealth() {

    var valid = true;
    var healthField = $('#health');
    var health = $('#health').val();

    /* first name contain only letters and is at least two charecters long, case insensitive  */
    var re = new RegExp(/^zha\d{6}$/i);
    if (re.test(health)) {

        removeRedError(healthField);

        return valid;
    } else {
        $('#healthError').append('error in the name field');


        addRedError(healthField);

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

function healthHint() {

    var defaultText = "Enter your name.";
    var txtElem = $("#health");
    txtElem.val(defaultText);


    txtElem.css('color', '#A8A8A8');
    txtElem.css('fontStyle', "italic");


    txtElem.focus(function() {
        //the value being operated on

        if ($(this).val() == defaultText) {
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
        validateHealth();
    });
}



function validateTelephone() {

    var valid = true;
    var telephoneField = $('#telephone');
    var telephone = $('#telephone').val();

    /* first name contain only letters and is at least two charecters long, case insensitive  */
    var re = new RegExp(/^\d{11}$/i);
    if (re.test(telephone)) {
        // removeNameFocus();
        removeRedError(telephoneField);

        return valid;
    } else {
        $('#telephoneError').append('error in the name field');

        // removeNameFocus();
        addRedError(telephoneField);

        return valid = false;
    }
}

/*This function clears each individual error on blur of the particular form field
The id is passed as an argument to the function */
function clearError(id) {
    $('#' + $(id).attr('id') + 'Error').html("&nbsp;");
}

/* I'm using this simple function to clear all errors which get called on submit.
This also clears the submit error. Its the first thing to get called by the processForm
function. It's far easier to select all items by class and change them in jquery.  */
function clearAllErrors(){
    $( ".error" ).html("&nbsp;");
}

/* This remove the initial 'focus' on the first name field when the form is presented.   */
function removeNameFocus() {
    var firstNameField = $('#first-name');
    firstNameField.removeClass('focusgreen');
}


function switchToolTip() {
    $('#qmark').mouseover(function() {
        var toolTip = $('#ttip');
        toolTip.css('opacity', '1');
    });
    $('#qmark').mouseout(function() {
        var toolTip = $('#ttip');
        toolTip.css('opacity', '0');
    });
}

function addRedError(field) {

    field.addClass('backgroundred');
}

function removeRedError(field) {

    field.removeClass('backgroundred');
}



function toggleModal() {
    var modal = $(".modal");
    modal.addClass("show-modal");
    var closeButton = $(".close-button");

    closeButton.click(removeModal);
    $(window).click(windowOnClick);

    function windowOnClick(event) {
            if (event.target === modal) {
                removeModal();
            }
        }
    function removeModal(e){
        var modal = $(".modal");
        modal.removeClass("show-modal");

    }

}
