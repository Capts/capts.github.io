function validate() {
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");

    error_message.style.padding = "10px";

    var text;
    if (validateEmail(email)) {
        error_message.innerHTML = validateEmail(email);
        return false;
    }
    
    if (subject.length < 10) {
        text = "Please add your subject";
        error_message.innerHTML = text;
        return false;
    }
    if (message.length <= 50) {
        text = "Please Enter More Than 50 Characters";
        error_message.innerHTML = text;
        return false;
    }
    addAction();
    alert("Form Submitted Successfully!");
    return true;
}


function validateEmail(email) {
    if (email.indexOf("@") == -1 || email.length < 6 || !email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        return "Please enter a valid email";
    }
    return true;
}

function addAction() {
    let link = "https://script.google.com/macros/s/AKfycbzCeY8mENN3iSqwLxjnYjJSVN7UPSvSei6aICsdZ_CKWjkeX3HhatDiGd1mKP_rNH51VQ/exec";
    let dataEmail = "";

    document.form.action = link;
    document.form.method = "POST";
    console.log(document.user_form.action);
    return false;
}




// function validateEmail() {

//     var email = document.getElementById('email').value;

//     if (email.length == 0) {

//         producePrompt('Email Invalid', 'email-error', 'red');
//         return false;

//     }

//     if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {

//         producePrompt('Email Invalid', 'email-error', 'red');
//         return false;

//     }

//     producePrompt('Valid', 'email-error', 'green');
//     return true;
// }

// function validateSubject() {
//     var subject = document.getElementById('subject').value;

//     if (subject.length == 0) {
//         producePrompt('Subject is required', 'name-error', 'red')
//         return false;
//     }
//     producePrompt('Valid', 'name-error', 'green');
//     return true;
// }

// function validateMessage() {
//     var message = document.getElementById('message').value;
//     var required = 10;
//     var left = required - message.length;

//     if (left > 0) {
//         producePrompt(left + ' more characters required', 'message-error', 'red');
//         return false;
//     }

//     producePrompt('Valid', 'message-error', 'green');
//     return true;

// }

// function validateForm() {
//     if (!validateEmail() || !validateEmail() || !validateMessage()) {
//         jsShow('submit-error');
//         producePrompt('Please fix errors to submit.', 'submit-error', 'red');
//         setTimeout(function () { jsHide('submit-error'); }, 2000);
//     }
//     else {

//     }
// }

// function jsShow(id) {
//     document.getElementById(id).style.display = 'block';
// }

// function jsHide(id) {
//     document.getElementById(id).style.display = 'none';
// }




// function producePrompt(message, promptLocation, color) {

//     document.getElementById(promptLocation).innerHTML = message;
//     document.getElementById(promptLocation).style.color = color;


// }



// function addAction() {
//     let link = "https://script.google.com/macros/s/AKfycbzCeY8mENN3iSqwLxjnYjJSVN7UPSvSei6aICsdZ_CKWjkeX3HhatDiGd1mKP_rNH51VQ/exec";

//     document.form.action = link;
//     alert(document.user_form.action);
//     return false;
// }
