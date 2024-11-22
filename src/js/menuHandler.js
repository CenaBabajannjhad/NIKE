"use strict";

const hamburgerMenuBtn = document.querySelector("#hamburger-menu-btn");
const menu = document.querySelector("#menu");
const closeMenuBtn = document.querySelector("#close-menu-btn");

const menuHandler = () => {
  menu.classList.toggle("translate-x-[-100%]");
};

hamburgerMenuBtn.addEventListener("click", menuHandler);
closeMenuBtn.addEventListener("click", menuHandler);
