const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    getting = document.querySelector(".js-getting");

const USER_LS = "currentUser",
      SHOWING_CN = "showing";


function saveName(text){
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    paintGetting(currentValue);
    saveName(currentValue);
}

function askForName() {
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

function paintGetting(text){
    form.classList.remove(SHOWING_CN);
    getting.classList.add(SHOWING_CN);
    getting.innerText = `Hello ${text}`;
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS); 
    if(currentUser === null){
        //she is not
        askForName();
    }
    else {
        //she is
        paintGetting(currentUser);
    }
}

function init() {
    loadName();
}
init();