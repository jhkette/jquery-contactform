/* Joseph Ketterer
JKETTE01
Javascript
Tobi Brodie
*/

/* I am using the jquery document.ready to load all the function and assign all the variables that are needed
for the programme to run on page load  */
$(document).ready(function() {
    var firstName = $('#first-name');
    var email = $('#email');
    nameHint(firstName, 'Enter your name');
    nameHint(email, 'Enter your email');
    switchToolTip();
    /*The on function here allows me to attach two different user events to each element in 'input-text' */
    $('.input-text').on({
        'blur': function() {
            var field = $(this);
            var id = $(this).attr('id');
            validateField(field, id);
        },
        'focus': function() {
            var id = $(this).attr('id');
            var field = $(this);
            removeRedError(field);
            clearError(id);
        },
    });
    $('#userInfo').submit(function(event) {
        processForm();
    });
});

/*The validate field function takes the form field DOM element and its id as parameters. I'm using a switch case statement to assign a regular expression value to
var re. I'm then testing the form field value against the regular expression. The title is dealt with seperately as it can only be one of 5 values. */
function validateField(field, id) {
    var re = '';
    var defaultText = '';
    var valid = true;
    if (id == 'title') {
        if ((field.val() == 'Mr') || (field.val() == 'Mrs') || (field.val() == 'Miss') || (field.val() == 'Master') || (field.val() == 'Ms')) {
            return valid;
        } else {
            $('#' + id + 'Error').html('Please select a title');
            valid = false;
            return valid;
        }
    } else {
        switch (true) {
            case (id == 'first-name'):
                removeNameFocus(); // remove initial focus on first name as the user has entered something in this field
                re = new RegExp(/^[A-Za-z]{2,}$/i);
                defaultText = 'Your first name should be at least two charecters and only contain letters';
                break;

            case (id == 'second-name'):
                re = new RegExp(/^[a-z][a-z-]{1,}$/i);
                defaultText = 'Your second name should be at least two charecters and only contain letters or a hyphen';
                break;

            case (id == 'email'):
                re = new RegExp(/^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$/);
                defaultText = 'This is not a valid format for an email';
                break;

            case (id == 'health'):
                re = new RegExp(/^(ZHA)(\d{6})$/);
                defaultText = 'This should be the letters ZHA followed by six digits.';
                break;

            case (id == 'telephone'):
                re = new RegExp(/^\d{11}$/);
                defaultText = 'This is not a valid telephone number. It should be eleven digits.';
                break;
        }
        /* I'm only validating the telephone field if there is an entry. If a user has focused on field but left it empty,  I am simply ignoring it, it is considered de facto valid.
        This is because it is not mandatory. However, if there is an entry and it is incorrect an incorrect an error will show.  */
        if (id == 'telephone') {
            if (field.val() !== '') {
                if (re.test(field.val())) {
                    return valid;
                } else {
                    $('#' + id + 'Error').append(defaultText);
                    addRedError(field);
                    valid = false;
                    return valid;
                }
            }
        } else {
            if (re.test(field.val())) {
                return valid;
            } else {
                $('#' + id + 'Error').append(defaultText);
                addRedError(field);
                valid = false;
                return valid;
            }
        }
    }
}

/* function to process form and call modal popup if valid - else return error. It loops through all fields and calls validateField for each form field.
If one returns one returns valid == false, the form does not get submitted. */
function processForm() {
    event.preventDefault();
    clearAllErrors();
    var valid = true;
    $('.input-text').each(function(element) {
        var field = $(this);
        var id = $(this).attr('id');
        if (id !== 'telephone') {
            if (validateField(field, id) == false) {
                valid = false;
            }
        }
    });
    if (valid == true) {
        toggleModal();
    } else {
        $('#submitError').html('There are errors in the form');
    }
}

/* function to show first name hint. It removes hint on focus and re-add hint on blur if field is left empty*/
function nameHint(field, message) {
    field.val(message);
    field.css('color', '#A8A8A8');
    field.css('fontStyle', "italic");

    field.focus(function() {
        if ($(this).val() == message) {
            $(this).val("");
            $(this).val("");
            $(this).css('color', '#000000');
            $(this).css('font-style', 'normal');
        }
    });
    field.blur(function() {
        if ($(this).val() == "") {
            $(this).val(message);
            $(this).css('color', '#A8A8A8');
            $(this).css('fontStyle', "italic");
        }
    });
}

/*This function clears each individual error on blur of the particular form field. The id is passed as an argument to the function */
function clearError(id) {
    $('#' + id + 'Error').html("&nbsp;");
}

/* I'm using this simple function to clear all errors which get called on submit. This stops multiple errors appearing by the same field*/
function clearAllErrors() {
    $(".error").html("&nbsp;");
}

/* This remove the initial 'focus' on the first name field when the form is presented.   */
function removeNameFocus() {
    var firstNameField = $('#first-name');
    firstNameField.removeClass('focus');
}

/* function to show and hide tooltip on mouseout/mouseover. I'm using the 'on' function here, this allows me to attach the qmark element to two different user events,  */
function switchToolTip() {
    $('#qmark').on({
        'mouseover': function() {
            var toolTip = $('#ttip');
            toolTip.css('opacity', '1');
        },
        'mouseout': function() {
            var toolTip = $('#ttip');
            toolTip.css('opacity', '0');
        },
    });
}
/* function to add pale red background. Is called by validation function if there is an error */
function addRedError(field) {
    field.addClass('backgroundred');
}

/* function to remove red background. again this is called by validation function - if input is valid */
function removeRedError(field) {
    field.removeClass('backgroundred');
}
