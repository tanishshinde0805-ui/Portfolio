// =============================
// Live Style Switcher
// =============================
console.log("Style Switcher Loaded");

const styleSwitcher = document.querySelector(".style-switcher");
const switcherToggler = document.querySelector(".style-switcher-toggler");

switcherToggler.addEventListener("click", () => {
    console.log("Gear clicked");
    styleSwitcher.classList.toggle("open");
});
// Theme color switching
const alternateStyles = document.querySelectorAll(".alternate-style");

function setActiveStyle(color){
    alternateStyles.forEach((style)=>{
        if(color === style.getAttribute("title")){
            style.removeAttribute("disabled");
        }
        else{
            style.setAttribute("disabled","true");
        }
    });
}
// Dark mode
const dayNight = document.querySelector(".day-night");

dayNight.addEventListener("click", () => {

    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");

    document.body.classList.toggle("dark");
});