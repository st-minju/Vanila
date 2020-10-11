const title = document.querySelector("#title");
/*
const BASE_COLOR = "black"
const OTHER_COLOR = "blue";

function handleClick() {
   const currentColor = title.style.color;
   if(currentColor === BASE_COLOR){
       title.style.color = OTHER_COLOR;
   }
   else {
       title.style.color = BASE_COLOR;
   }
}
*/

const CLICKED_CLASS = "clicked";

function handleClick() {
    title.classList.toggle(CLICKED_CLASS);

}
function init() {
    //title.style.color = BASE_COLOR;
    title.addEventListener("click", handleClick);
}
init();