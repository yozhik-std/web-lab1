alert(navigator.userAgent);

window.alert("Hi!")
alert(window.prompt("Your name?"))
window.confirm("Yes?")
window.focus()
let timeoutID;

function delayedAlert() {
    timeoutID = window.setTimeout(slowAlert, 2000);
}

function slowAlert() {
    window.open("https://google.com")
}

function clearAlert() {
    window.clearTimeout(timeoutID);
}
delayedAlert()

