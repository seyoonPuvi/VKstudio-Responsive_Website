let nav_Element = document.querySelector(".header__nav");
let hamburger_Element = document.querySelector(".header__hamburger");

let hamburger_line1 = document.querySelector(".hamburger__line:nth-child(1)");
let hamburger_line2 = document.querySelector(".hamburger__line:nth-child(2)");
let hamburger_line3 = document.querySelector(".hamburger__line:nth-child(3)");

hamburger_Element.addEventListener("click",function(){
    nav_Element.classList.toggle("display__nav");
    hamburger_line1.classList.toggle("hamburger__line1");
    hamburger_line2.classList.toggle("hamburger__line2");
    hamburger_line3.classList.toggle("hamburger__line3");
});