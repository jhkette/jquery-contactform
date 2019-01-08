// Joseph Ketterer
$(document).ready(function() {

    /* The programme structure of the form validation is exactly the same as for the javascript form. Notes on functions etc
    are therefore less detailed. */

    /* on document.ready call these functions.. These need to be loaded first at the hint text needs to be present on window load.
    The hints then call function based on user behaviour. On focus the hint is cleared, on blur the formfield
    is validated etc.*/
    var firstNameRe = new RegExp(/^[A-Za-z]{2,}$/i);
    var healthRe = new RegExp(/^(ZHA)(\d{6})$/);
    var telephoneRe = new RegExp(/^\d{11}$/);
    var emailRe = new RegExp(/^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$/);


    nameHint();

    $('.input-text').on('blur', function(){
        var id = $(this).id;


    });





    $('#userInfo').submit(processForm);

});

/* validate first name uses a regular expression to validate the form. The initial focus on the first name
is removed if valid by calling a function from here or re -added if it still incorrect. There needs to be seperate
valiadtion functions for each input. we can't just loop through all the inputs as we are testing each input against
specific regular expressions. Each function also needs to return a value */
function validateField(id)  {


    var defaultText = "Enter your name.";
    var valid = true;
    var firstNameField = $('#first-name');
    /* first name contain only letters and is at least two charecters long, case insensitive  */

    if (re.test(firstNameField.val())) {
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



// function to process form and call modal popup if valid - else return error
function processForm() {

    clearAllErrors();
    var firstNameRe = new RegExp(/^[A-Za-z]{2,}$/i);
    var healthRe = new RegExp(/^(ZHA)(\d{6})$/);
    var telephoneRe = new RegExp(/^\d{11}$/);
    var emailRe = new RegExp(/^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$/);


    var firstName = validateField('first-name', firstNameRe, 'not valid');


    if (firstName == true) {
        toggleModal(); //modal is called if all the neccersary inputs are correct
        return false;
    } else {
        $('#submitError').html('There are errors in the form');
        return false;
    }
}

/* function to show first name hint. this calls validation function on blur. Calls remove name focus
and clear error  on focus. The 2 other hint functions follow the same structure.  */
function nameHint() {
    var firstNameRe = new RegExp(/^[A-Za-z]{2,}$/i);
    var emailRe = new RegExp(/^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$/);
    var hintField = $('.hint');
    var nameText = "Enter your name.";
    var emailText = "Enter your name.";

    if(hintField.id == 'first-name'){
        hintField.val = (nameText);
    }
    if(hintField.id == 'email'){
        hintField.val = (emailText);
    }
    hintField.css('color', '#A8A8A8');
    hintField.css('fontStyle', "italic");

    hintField.focus(function() {

        removeNameFocus(); //remove 'focus' - ie background - on focus

        if ($(this).val() == defaultText) {
            $(this).val("");
            $(this).val("");
            $(this).css('color', '#000000');
            $(this).css('font-style', 'normal');
        }

        var textElemId = $(this);
        clearError(textElemId); // call clearError with textElemId as an argument
    });
    hintField.blur(function() {
        if ($(this).val() == "") {
            $(this).val(defaultText);
            $(this).css('color', '#A8A8A8');
            $(this).css('fontStyle', "italic");
        }

        var id =  $(this).id;
        validateField(id);    
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
function clearAllErrors() {
    $(".error").html("&nbsp;");
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

    function removeModal(e) {
        var modal = $(".modal");
        modal.removeClass("show-modal");
    }
}
