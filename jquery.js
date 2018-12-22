window.onload = start;

/* The programme structure of the form validation is exactly the same as for the javascript form. Notes on functions etc
are therefore less detailed. */

// on window load call these functions
function start() {
    loadEventListeners();
    firstNameHint();
    secondNameHint();
    healthHint();
    switchToolTip();
}

// load event listeners
function loadEventListeners() {
    $('#email').blur(validateEmail);
    $('#telephone').blur(validateTelephone);
    $('#title').blur(validateTitle);

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

    var title = $('#title');
    title.focus(function() {
        title = $(this);
        clearError(title);
    });

    $('#userInfo').submit(processForm);

}


// function to validate first name
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
        $('#first-nameError').append('The first name contains an error');
        removeNameFocus();
        addRedError(firstNameField);
        valid = false;
        return valid;
    }
}

// function to validate last name
function validateSecondName() {

    var defaultText = "Enter your name.";
    var valid = true;
    var secondNameField = $('#second-name');
    var secondName = $('#second-name').val();
    /* last name contain only letters OR contains letters and '-' .  Is at least two charecters long, case insensitive   */
    var re = new RegExp(/^[a-z][a-z-]+$/i);
    if (re.test(secondName)) {
        removeRedError(secondNameField);
        return valid;
    } else {
        $('#second-nameError').append('The second name contains an error');
        addRedError(secondNameField);
        valid = false;
        return valid;
    }
}

// function to validate email
function validateEmail() {

    var valid = true;
    var emailField = $('#email');
    var email = $('#email').val();

    var re = new RegExp(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/);
    if (re.test(email)) {
        removeRedError(emailField);
        return valid;
    } else {
        $('#emailError').append('This is not a valid email');
        addRedError(emailField);
        valid = false;
        return valid;
    }
}

// function to validate health
function validateHealth() {

    var valid = true;
    var healthField = $('#health');
    var health = $('#health').val();
    // input starts with zha and then 6 numbers case insensitive
    var re = new RegExp(/^zha\d{6}$/i);
    if (re.test(health)) {
        removeRedError(healthField);
        return valid;
    } else {
        $('#healthError').append('This is not a valid health authority number');
        addRedError(healthField);
        valid = false;
        return valid;
    }
}

/*Function to validate title. The inital selection is an empty string.
This way i'm making the user SELECT a title rather than just add the default selection.
 If the value which accords to an empty string
is selected an error is thrown */
function validateTitle(){
    var valid = true;
    var title = $('#title');
    if(title.val() == "") {
        $('#titleError').html('Enter your title');
        valid = false;
        return valid;
    } else{
        return valid;
    }

}

// function to validate telephone
function validateTelephone() {

    var valid = true;
    var telephoneField = $('#telephone');
    var telephone = $('#telephone').val();
    /* regular expression to match 11 digits. no other chrecters allowed */
    var re = new RegExp(/^\d{11}$/i);
    if (re.test(telephone)) {
        removeRedError(telephoneField);
        return valid;
    } else {
        $('#telephoneError').append('error in the name field');

        addRedError(telephoneField);
        valid = false;
        return valid;
    }
}

// function to process form and call modal popup if valid - else return error
function processForm() {

    clearAllErrors();

    var firstName = validateFirstName();
    var lastName = validateSecondName();
    var email = validateEmail();
    var health = validateHealth();
    var title = validateTitle();

    if ((firstName == true) && (lastName == true) && (email == true) && (title == true) && (health == true))  {
        toggleModal(); //modal is called if all the neccersary inputs are correct
        return false;
    }
    else{
        $('#submitError').html('There are errors in the form');
     return false;
    }
}

/* function to show first name hint. this calls validation function on blur. Calls remove name focus
and clear error  on focus */
function firstNameHint() {

    var defaultText = "Enter your name.";
    var txtElem = $("#first-name");
    txtElem.val(defaultText);
    txtElem.css('color', '#A8A8A8');
    txtElem.css('fontStyle', "italic");

    txtElem.focus(function() {

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

//  function to show hint for the last name field
function secondNameHint() {

    var defaultText = "Enter your name.";
    var txtElem = $("#second-name");
    txtElem.val(defaultText);
    txtElem.css('color', '#A8A8A8');
    txtElem.css('fontStyle', "italic");

    txtElem.focus(function() {

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

//  function to show hint for health authority field
function healthHint() {

    var defaultText = "Enter your name.";
    var txtElem = $("#health");
    txtElem.val(defaultText);
    txtElem.css('color', '#A8A8A8');
    txtElem.css('fontStyle', "italic");

    txtElem.focus(function() {

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
    firstNameField.removeClass('focus');
}

// function to show and hide toolip on mouseout/mouseover
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
// function to add pale red background. Is called by validation function if there is an error
function addRedError(field) {
    field.addClass('backgroundred');
}

// function to remove red background. again this is called by validation function - if input is valid
function removeRedError(field) {
    field.removeClass('backgroundred');
}

// function to show modal. This is called by the processForm function if validation is complete
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
