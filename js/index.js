"use strict";
const burgerBtn = document.querySelector(".burger-btn");
const headerMenu = document.querySelector(".header__menu");

burgerBtn.addEventListener("click", () => {
    headerMenu.classList.toggle("_open");
    burgerBtn.classList.toggle("_active");
    
});