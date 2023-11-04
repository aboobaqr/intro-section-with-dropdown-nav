'use strict';

//Variables
const hamburger = document.getElementById('hamburger');
const sideBar = document.querySelector('.side-bar');
const dropDown = document.querySelector('.dropdown');
const dropDownTwo = document.querySelector('.dropdown-two');

const image = document.querySelector('.image');

const imageTwo = document.querySelector('.image-two');

const dropDownNav = document.querySelector('.dropdown ul');

const dropDownNavTwo = document.querySelector('.dropdown-two ul');

const sideBarDrop1 = document.querySelector('.side-bar-dropdown1');

const sideBarDrop2 = document.querySelector('.side-bar-dropdown2');

const sideBarNav1 = document.querySelector('.side-bar-dropdown1 ul')


const sideBarNav2 = document.querySelector('.side-bar-dropdown2 ul')

console.log(sideBarNav2);

const sideBarImg1 = document.querySelector('.side-bar-img1');

const sideBarImg2 = document.querySelector('.side-bar-img2');

let clicked = false;

// Functions
function buttonToggle(image, nav) {
  if (clicked) {
    clicked = false;
    image.src = '/images/icon-arrow-down.svg';
    nav.classList.remove('active');
  } else {
    clicked = true;
    image.src = '/images/icon-arrow-up.svg';
    nav.classList.add('active');
  }
}

// Eventhandlers
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  sideBar.classList.toggle('active');
});

// Desktop dropdown
dropDown.addEventListener('click', () => {
  buttonToggle(image, dropDownNav);
});
dropDownTwo.addEventListener('click', () => {
  buttonToggle(imageTwo, dropDownNavTwo);
});

// Mobile Dropdown
sideBarDrop1.addEventListener('click', () => {
  buttonToggle(sideBarImg1, sideBarNav1);
});

sideBarDrop2.addEventListener('click', () => {
  buttonToggle(sideBarImg2, sideBarNav2);
});
