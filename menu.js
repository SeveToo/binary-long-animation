const body = document.querySelector("body");
const optionsContainer = document.querySelector(".optionsContainer");
const menu = document.querySelector(".menu");
const options = document.querySelector(".options");
const closeBTN = document.querySelector(".closeBTN");

const red = document.querySelector(".red");
const blue = document.querySelector(".blue");
const green = document.querySelector(".green");
const yellow = document.querySelector(".yellow");

red.onclick = () => {
  body.style.setProperty("--choosed-bgcolor", "#e43d40");
  // body.style.setProperty("--choosed-color", "#dddddd");
};
blue.onclick = () => {
  body.style.setProperty("--choosed-bgcolor", "#3db5e4");
  // body.style.setProperty("--choosed-color", "#dddddd");
};
green.onclick = () => {
  body.style.setProperty("--choosed-bgcolor", "#3de49e");
  // body.style.setProperty("--choosed-color", "#191919");
};
yellow.onclick = () => {
  body.style.setProperty("--choosed-bgcolor", "#e4d33d");
  // body.style.setProperty("--choosed-color", "#191919");
};

// :root
// // get variable from inline style
// element.style.getPropertyValue("--my-variable");

// // get variable from wherever
// getComputedStyle(element).getPropertyValue("--my-variable");

// // set variable on inline style
// element.style.setProperty("--my-variable", 4);
// // document.querySelector('body').style.getPropertyValue("--my-variable");

menu.onclick = () => {
  optionsContainer.classList.add("openMenu");
  menu.classList.remove("open");
  setTimeout(() => {
    options.classList.add("open");
  }, 300);
};
// options.onmouseover = () => {
//   options.style.backgroundColor = "red";
// };

closeBTN.onclick = () => {
  optionsContainer.classList.remove("openMenu");
  options.classList.remove("open");
  menu.classList.add("open");
};
