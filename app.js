"use strict";

// Menu
const iconMenu = document.getElementById("menu__icon");
const menu = document.querySelector(".menu");

iconMenu.addEventListener("click", toggleMenu);
document.addEventListener("click", closeMenuOnClick);
document.addEventListener("keydown", closeMenuOnEsc);

function toggleMenu() {
  menu.classList.toggle("open");
  iconMenu.classList.toggle("fa-bars");
  iconMenu.classList.toggle("fa-times");
}
function closeMenuOnClick(event) {
  if (!iconMenu.contains(event.target) && menu.classList.contains("open")) {
    toggleMenu();
  }
}
function closeMenuOnEsc(event) {
  if (event.key === "Escape" && menu.classList.contains("open")) {
    toggleMenu();
  }
}

//slider
//
//
const sliderOne = document.querySelector(".slider_one");
const sliderTwo = document.querySelector(".slider_two");
const sliderThree = document.querySelector(".slider_three");
const readMoreLink = sliderTwo.querySelector("#readmore");
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");

const setActiveSlider = function (slider) {
  slider.classList.add("active-slider");
  slider.classList.remove("disable-slider");
  slider.querySelector(".slider-info").appendChild(readMoreLink);
};

const setDisableSlider = function (slider) {
  slider.classList.remove("active-slider");
  slider.classList.add("disable-slider");
};

const slideOne = function () {
  setDisableSlider(sliderTwo);
  setDisableSlider(sliderThree);
  setActiveSlider(sliderOne);
};

const slideTwo = function () {
  setDisableSlider(sliderOne);
  setDisableSlider(sliderThree);
  setActiveSlider(sliderTwo);
};

const slideThree = function () {
  setDisableSlider(sliderOne);
  setDisableSlider(sliderTwo);
  setActiveSlider(sliderThree);
};

const arrowScrollLeft = function () {
  if (!sliderThree.classList.contains("disable-slider")) {
    slideTwo();
  } else if (!sliderTwo.classList.contains("disable-slider")) {
    slideOne();
  } else {
    slideThree();
  }
};

const arrowScrollRight = function () {
  if (!sliderOne.classList.contains("disable-slider")) {
    slideTwo();
  } else if (!sliderTwo.classList.contains("disable-slider")) {
    slideThree();
  } else {
    slideOne();
  }
};

leftArrow.addEventListener("click", arrowScrollLeft);
rightArrow.addEventListener("click", arrowScrollRight);
sliderOne.addEventListener("click", slideOne);
sliderTwo.addEventListener("click", slideTwo);
sliderThree.addEventListener("click", slideThree);
