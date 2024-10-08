// Collect data from form
const nameInput = document.querySelector("#FirstName");
const surnameInput = document.querySelector("#SecondName");
const email = document.querySelector("#email");
const phoneNumber = document.querySelector("#PhoneNumber");
const message = document.querySelector("#message");
const address = document.querySelector('#address');
const addressP = document.querySelector('#addressP');
const errorNodes = document.querySelectorAll(".error");

// Functions that execute themselves on the validation of the form when the submit button is pressed.
function validateForm(){

    clearMessages();

    if(nameInput.value.length < 1){
        errorNodes[0].innerText = "El nombre no puede estar en blanco";
        nameInput.classList.add("error-border");
    }
    
    if(surnameInput.value.length < 1){
        errorNodes[1].innerText = "El apellido no puede estar en blanco";
        surnameInput.classList.add("error-border");
    }

    if(!emailIsValid(email.value)){
        errorNodes[2].innerText = "El correo és inválido";
        email.classList.add("error-border");
    }

    if(!phoneNumberIsValid(phoneNumber.value)){
        errorNodes[3].innerText = "El número de teléfono és inválido";
        phoneNumber.classList.add("error-border");
    }

    if (address.value.length < 1){
        errorNodes[4].innerText = "La dirección no puede estar en blanco";
        address.classList.add("error-border");
        addressP.classList.add("small-margin");
    }
    
    if(message.value.length < 1){
        errorNodes[5].innerText = "El contenido del mensaje no puede estar en blanco";
        message.classList.add("error-border");
    }
}

// Function that clears error messages
function clearMessages(){
    for(let i = 0; i < errorNodes.length; i++){
        errorNodes[i].innerText = "";
    }
    nameInput.classList.remove("error-border")
    surnameInput.classList.remove("error-border")
    email.classList.remove("error-border")
    phoneNumber.classList.remove("error-border")
    address.classList.remove("error-border")
    message.classList.remove("error-border")
}

// Function that checks if the email is correct
function emailIsValid(email){
    let pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(email);
}

// Function that checks if the phone number is correct
function phoneNumberIsValid(phoneNumber){
    let pattern = /^\d{3} \d{3} \d{3}$/
    return pattern.test(phoneNumber)
}

// Dealing with Textarea Height
function calcHeight(value) {
    let numberOfLineBreaks = (value.match(/\n/g) || []).length;
    // min-height + lines x line-height + padding + border
    let newHeight = 20 + numberOfLineBreaks * 20 + 12 + 2;
    return newHeight;
  }
  
  let textarea = document.querySelector("#message");
  textarea.addEventListener("keyup", () => {
    textarea.style.height = calcHeight(textarea.value) + "px";
  });