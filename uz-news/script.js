"use strict";

let monthTxt = document.querySelector(".month-txt");
let monthNumberTxt = document.querySelector(".month-number-txt");
let yearTxt = document.querySelector(".year-txt");

const dayNow = new Date();
let day = dayNow.getDate();
monthNumberTxt.innerHTML = day;

const month = [
  "Yanvar",
  "Fevral",
  "Mart",
  "Aprel",
  "May",
  "Iyun",
  "Iyul",
  "Avgust",
  "Sentyabr",
  "Oktyabr",
  "Noyabr",
  "Dekabr",
];

const monthNow = new Date();
let moon = month[monthNow.getMonth()];
monthTxt.innerHTML = moon;

const yearNow = new Date();
let year = yearNow.getFullYear();
yearTxt.innerHTML = year;

document.addEventListener("DOMContentLoaded", () => {
  const loader = document.querySelector(".loader");
  setTimeout(function () {
    loader.style.opacity = "0";
    setTimeout(function () {
      loader.style.display = "none";
    }, 800);
  }, 800);
});
