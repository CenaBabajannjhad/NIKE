'use strict'
const hamburgerMenuBtn = document.querySelector("#hamburger-menu-btn");
const menu = document.querySelector("#menu");
let isMenuOpen = false;

hamburgerMenuBtn.addEventListener("click", () => {
  isMenuOpen = !isMenuOpen;
  if(isMenuOpen){
      menu.classList.remove("left-[-100%]");
      menu.classList.add("left-0");
  }else{
    menu.classList.remove("left-0");
    menu.classList.add("left-[-100%]");
  }
});
