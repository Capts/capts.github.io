












function stoppedTyping(value) {
    console.log(value);
    if (value > 0) {
        document.getElementById('buttonSub').disabled = false;
    } else {
        document.getElementById('buttonSub').disabled = true;
    }
}

function verify() {
    var email = document.forms["Form"]["email"].value;
    var subject = document.forms["Form"]["subject"].value;
    var message = document.forms["Form"]["message"].value;
    

    if (email == "" || subject == "" || message == ""){
        snackTionFailed();
        return;
        
    }else{
        email = "";
        subject = "";
        message = "";
        snackTion();
        return;
    }
}

function snackTion() {
    // Get the snackbar DIV
    var x = document.getElementById("snackbar");
    timeOut(x);
}
function snackTionFailed() {
    // Get the snackbarFailed DIV
    var x = document.getElementById("snackbarFailed");
    timeOut(x);

}

function timeOut(x) {
    // Add the "show" class to DIV
    x.className = "show";
    
    // After 5 seconds, remove the show class from DIV
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 5000);
}