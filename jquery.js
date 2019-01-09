// Joseph Ketterer / Javascript / Part 2

/* I am using the jquery doc  */
$(document).ready(function() {

    var firstName = $('#first-name');
    var email = $('#email');

    nameHint(firstName, 'Enter your name');
    nameHint(email, 'Enter your email');
    switchToolTip();

    $('.input-text').bind({
    'blur':function() {
        var field = $(this);
        var id = $(this).attr('id');
        validateField(field, id);
    },
    'focus':function() {
        var id = $(this).attr('id');
        clearError(id);
    },
    });
    $('#userInfo').submit(function(event) {
        processForm();
        event.preventDefault();
    });
});


function validateField(field, id) {
    var re = '';
    var defaultText = '';
    var valid = true;

    // console.log(field);
    if (id == 'first-name') {
        re = new RegExp(/^[A-Za-z]{2,}$/i);
        defaultText = 'This is not a valid first name';
    }
    if (id == 'second-name') {
        re = new RegExp(/^[a-z][a-z-]+$/i);
        defaultText = 'This is not a valid second name';
    }
    if (id == 'email') {
        re = new RegExp(/^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$/);
        defaultText = 'This is not a valid email';
    }
    if (id == 'health') {
        re = new RegExp(/^(ZHA)(\d{6})$/);
        defaultText = 'This is not a valid ZHA number';
    }
    if (id == 'telephone') {
        re = new RegExp(/^\d{11}$/);
        defaultText = 'This is not a valid telephone number';
    }

    var val = field.val();
    console.log(val);
    if (re.test(val)) {
        removeNameFocus();
        removeRedError(field);
        return valid;
    } else {
        $('#' + id + 'Error').append(defaultText);
        removeNameFocus();
        addRedError(field);
        valid = false;
        return valid;
    }
}


// function to process form and call modal popup if valid - else return error
function processForm() {
    event.preventDefault();
    clearAllErrors();
    var valid = true;
    $('.input-text').each(function(element) {
        var field = $(this);
        var id = $(this).attr('id');
        if ((id !== 'telephone') && (field.val() !== '')) {
            validateField(field, id);
        }
        if (validateField == false) {
            var valid = false;
        }
    });

}

/* function to show first name hint. this calls validation function on blur. Calls remove name focus
and clear error  on focus. The 2 other hint functions follow the same structure.  */
function nameHint(field, message) {
    field.val(message);
    field.css('color', '#A8A8A8');
    field.css('fontStyle', "italic");

    field.focus(function() {

        removeNameFocus(); //remove 'focus' - ie background - on focus

        if ($(this).val() == message) {
            $(this).val("");
            $(this).val("");
            $(this).css('color', '#000000');
            $(this).css('font-style', 'normal');
        }


        // clearError(field.attr('id')); // call clearError with textElemId as an argument
    });
    field.blur(function() {
        if ($(this).val() == "") {
            $(this).val(message);
            $(this).css('color', '#A8A8A8');
            $(this).css('fontStyle', "italic");
        }
    });
}



/*This function clears each individual error on blur of the particular form field
The id is passed as an argument to the function */
function clearError(id) {
    $('#' + id + 'Error').html("&nbsp;");
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
