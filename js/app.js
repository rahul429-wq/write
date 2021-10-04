const hamburger = document.querySelector(".hamburger");
const navlist = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navlist.classList.toggle("show");
});

const leftbtn = document.getElementById("left");
const rightbtn = document.getElementById("right");
let img1 = document.getElementById("img1");
const h1 = document.getElementById("h1");
const p = document.getElementById("p1");
document.slide.src =
  "https://images.unsplash.com/photo-1554744512-5a8ef212982d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80";

var imgs = ["../src/hashmi.png", "../src/bhavik.png", "../src/rudra.png"];
var h1s = ["Hashmi Ranawadia", "Bhavik Prajapati", "rudra Suthar"];
var ps = ["+9825342173", "+9638271908", "+9825342712"];
var i = 0;
function setImage() {
  document.slide.src = imgs[i];
  // console.log(h1s[i]);
  h1.innerHTML = h1s[i];
  p.innerHTML = ps[i];
}
var time = 2000;
window.onload = slideImage;
function slideImage() {
  if (i < imgs.length - 1) {
    i++;
  } else {
    i = 0;
  }
  setImage();
  setTimeout("slideImage()", time);
}

rightbtn.addEventListener("click", function () {
  console.log("right");
  if (i < imgs.length - 1) {
    i++;
  } else {
    i = 0;
  }
  setImage();
});

leftbtn.addEventListener("click", function () {
  if (i > 0) {
    i--;
  } else {
    i = imgs.length - 1;
  }
  setImage();
});
