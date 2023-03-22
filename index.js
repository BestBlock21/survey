const slidePage = document.querySelector(".slide-page");
const nextBtnFirst = document.querySelectorAll(".firstNext");
const radio = document.querySelector(".radio ~ span");
const reviewEl = document.querySelector(".review");
const prevBtnSec = document.querySelector(".prev-1");
const nextBtnSec = document.querySelectorAll(".next-1");
const prevBtnThird = document.querySelector(".prev-2");
const nextBtnThird = document.querySelectorAll(".next-2");
const prevBtnFourth = document.querySelector(".prev-3");
const submitBtn = document.querySelector(".submit");
const progressText = document.querySelectorAll(".step p");
const progressCheck = document.querySelectorAll(".step .check");
const bullet = document.querySelectorAll(".step .bullet");
let current = 1;

$ = function (id) {
  return document.getElementById(id);
};

var show = function (id) {
  $(id).style.display = "block";
};
var hide = function (id) {
  $(id).style.display = "none";
};

for (let i = 0; i < nextBtnFirst.length; i++) {
  nextBtnFirst[i].addEventListener("click", function (event) {
    for (let j = 0; j < nextBtnFirst.length; j++) {
      console.log("loop2");
      if (i !== j) {
        nextBtnFirst[j].style.height = "3rem";
      }
    }
    console.log("clicked");
    event.preventDefault();
    nextBtnFirst[i].style.height = "5rem";

    slidePage.style.marginLeft = "-25%";
    bullet[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    current += 1;
  });
}

for (let i = 0; i < nextBtnSec.length; i++) {
  nextBtnSec[i].addEventListener("click", function (event) {
    for (let j = 0; j < nextBtnSec.length; j++) {
      console.log("loop2");
      if (i !== j) {
        nextBtnSec[j].style.height = "3rem";
      }
    }
    console.log("clicked");
    event.preventDefault();
    nextBtnSec[i].style.height = "5rem";
    slidePage.style.marginLeft = "-50%";
    bullet[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    current += 1;
  });
}

for (let i = 0; i < nextBtnThird.length; i++) {
  nextBtnThird[i].addEventListener("click", function (event) {
    for (let j = 0; j < nextBtnThird.length; j++) {
      console.log("loop2");
      if (i !== j) {
        nextBtnThird[j].style.height = "3rem";
      }
    }
    event.preventDefault();
    nextBtnThird[i].style.height = "5rem";

    slidePage.style.marginLeft = "-75%";
    bullet[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    current += 1;
  });
}

// });
submitBtn.addEventListener("click", function () {
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
});

prevBtnSec.addEventListener("click", function (event) {
  event.preventDefault();
  slidePage.style.marginLeft = "0%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});
prevBtnThird.addEventListener("click", function (event) {
  event.preventDefault();
  slidePage.style.marginLeft = "-25%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});
prevBtnFourth.addEventListener("click", function (event) {
  event.preventDefault();
  slidePage.style.marginLeft = "-50%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});
