const throttle = require('lodash.throttle');
const obj = {}
const form = document.querySelector("form")
const input =document.querySelector("input")
const textarea=document.querySelector("textarea")
    
form.addEventListener("input",throttle(createData,500));
form.addEventListener("submit", submitForm);


 checkInput()
function createData(e) {
    e.preventDefault()
    obj[e.target.name] = e.target.value;

    const json = JSON.stringify(obj);
    localStorage.setItem("feedback-form-state", json)
 
}

function submitForm(e) {
    e.preventDefault();
    if (obj["email"]) {
     console.log(obj);   
    }
    
    e.currentTarget.reset()
    localStorage.clear()
    
}

function checkInput() {

    const savedMsg = localStorage.getItem("feedback-form-state");
   
    if (savedMsg) {
         const mail = JSON.parse(savedMsg)["email"];
        const msg = JSON.parse(savedMsg)["message"];
        input.value = mail;
        textarea.value=msg
    }
}