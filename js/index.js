const div = document.querySelector(".img-container");
const body = document.querySelector("body");
const img = document.querySelector("img");
const videoIntro = document.querySelector("video.intro");
const menuSlide = document.querySelector(".menuSlide");
let today;
let date;

window.addEventListener("resize", windowSize);
document.querySelector(".burgerMenu").addEventListener("click", appear);
vidCont();

//-----------------star carousel--------

const carouselSlide = document.querySelector(".carousel-slide");
const carouselIframe = document.querySelectorAll(
  ".carousel-slide .iframe-container"
);
let videoPlaying;
let videoSrc;

//buttons
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");
//counter
let counterIframe = 1;
let sizeIframe = carouselIframe[0].clientWidth;

carouselSlide.style.transform =
  "translateX(" + -sizeIframe * counterIframe + "px)";

//button listeners

nextBtn.addEventListener("click", nextIframe);
prevBtn.addEventListener("click", prevIframe);
carouselSlide.addEventListener("transitionend", backToIframe);

function nextIframe() {
  if (counterIframe >= carouselIframe.length - 1) return;
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  //--stopVideo
  videoPlaying = carouselIframe[counterIframe].firstElementChild;
  videoSrc = carouselIframe[counterIframe].firstElementChild.src;
  //----
  counterIframe++;
  carouselSlide.style.transform =
    "translateX(" + -sizeIframe * counterIframe + "px)";
}

function prevIframe() {
  if (counterIframe <= 0) return;
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  //--stopVideo
  videoPlaying = carouselIframe[counterIframe].firstElementChild;
  videoSrc = carouselIframe[counterIframe].firstElementChild.src;
  //----
  counterIframe--;
  carouselSlide.style.transform =
    "translateX(" + -sizeIframe * counterIframe + "px)";
}

function backToIframe() {
  //--stopVideo--
  videoPlaying.src = videoSrc;
  //--conditions--
  if (carouselIframe[counterIframe].id === "lastClone") {
    carouselSlide.style.transition = "none";
    counterIframe = carouselIframe.length - 2;
    carouselSlide.style.transform =
      "translateX(" + -sizeIframe * counterIframe + "px)";
  }
  if (carouselIframe[counterIframe].id === "firstClone") {
    carouselSlide.style.transition = "none";
    counterIframe = carouselIframe.length - counterIframe;
    carouselSlide.style.transform =
      "translateX(" + -sizeIframe * counterIframe + "px)";
  }
}

function windowSize() {
  sizeIframe = carouselIframe[0].clientWidth;
  carouselSlide.style.transition = "none";
  carouselSlide.style.transform =
    "translateX(" + -sizeIframe * counterIframe + "px)";
}

//------------carousel end-------------------

function vidCont() {
  videoIntro.playbackRate = 0.8;
  today = new Date().toISOString().substr(0, 10);
  document.querySelector("#date").value = today;
  if (navigator.userAgent.indexOf("Chrome") != -1) {
    document.querySelector('input[type="date"]').style.backgroundImage = "none";
    document.querySelector('input[type="date"]').style.paddingLeft = "1rem";
    document.querySelector('input[type="time"]').style.backgroundImage = "none";
    document.querySelector('input[type="time"]').style.paddingLeft = "1rem";
  }
}

function appear() {
  menuSlide.classList.toggle("appear");
}
