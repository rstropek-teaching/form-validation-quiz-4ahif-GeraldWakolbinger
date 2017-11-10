let mandatorySign: HTMLElement = document.getElementById("firstNameMandatory");
mandatorySign.style.visibility = "visible";

mandatorySign = document.getElementById("lastNameMandatory");
mandatorySign.style.visibility = "visible";

mandatorySign = document.getElementById("emailMandatory");
mandatorySign.style.visibility = "visible";

let emailTextbox: HTMLElement = document.getElementById("email");
emailTextbox.value = "";
let checkbox: HTMLElement = document.getElementById("newsletter");
checkbox.checked = true;

checkSelect("mediaChannelSelect");
checkCheckbox();
checkSubmit();

function checkInput(id: string) {
    let doc: HTMLElement = document.getElementById(id);
    let value: string = doc.value;
    console.log(value + " typed");
    let mandatorySign: HTMLElement = document.getElementById(id + "Mandatory");
    if (id == "email") {
        checkCheckbox();
    } else if (value == "") {
        mandatorySign.style.visibility = "visible";
    } else {
        mandatorySign.style.visibility = "hidden";
    }
    checkSubmit()
}
function checkSelect(id: string) {
    let doc: HTMLElement = document.getElementById(id);
    let value: string = doc.value;
    console.log(value + " selected");
    if (value == "Other") {
        let textArea: HTMLElement = document.getElementById("otherMediaChannel");
        textArea.style.visibility = "visible";
    } else {
        let textArea: HTMLElement = document.getElementById("otherMediaChannel");
        textArea.style.visibility = "hidden";
    }
}
function checkCheckbox() {
    let mandatory: HTMLElement = document.getElementById("emailMandatory");
    console.log("Checkbox:");
    console.log(document.getElementById("newsletter").checked);

    let doc: HTMLElement = document.getElementById("email");
    let value: string = doc.value;

    let checkbox: HTMLElement = document.getElementById("newsletter");
    if (checkbox.checked && value == "") {
        mandatory.style.visibility = "visible";
    } else {
        mandatory.style.visibility = "hidden";
    }

    checkSubmit();

}
function checkSubmit() {
    let firstNameMandatory: HTMLElement = document.getElementById("firstNameMandatory");
    let lastNameMandatory: HTMLElement = document.getElementById("lastNameMandatory");
    let emailMandatory: HTMLElement = document.getElementById("emailMandatory");
    let submitButton: HTMLElement = document.getElementById("submitButton");

    if (firstNameMandatory.style.visibility === "visible" || lastNameMandatory.style.visibility === "visible" || emailMandatory.style.visibility === "visible") {
        submitButton.style.visibility = "hidden";
    } else {
        submitButton.style.visibility = "visible";
    }

}




