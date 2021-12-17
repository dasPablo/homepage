const isTouchDevice = () => {
  return window.matchMedia("(pointer: coarse)").matches
}
console.log(isTouchDevice());
// Horizontal Scoll
const scrollContainer = document.querySelector("#wrapper");

if (!isTouchDevice()) {
  scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
  });
}


if (isTouchDevice()) {
  document.getElementById("navbar").addEventListener("click", toggleNav);
  document.getElementById("footer").addEventListener("click", toggleFoot);
  // document.getElementById("sideinfo").addEventListener("click", toggleInfo);

  let getHeadline = document.querySelectorAll(".headline");
  let getHeadlineBar = document.querySelectorAll(".bar-content");


  let arrayLengthOne = getHeadline.length;
  for (let i = 0; i < arrayLengthOne; i++) {
    getHeadline[i].style.transform = "translateY(0)";
  }

  let arrayLengthTwo = getHeadlineBar.length;
  for (let i = 0; i < arrayLengthTwo; i++) {
    getHeadlineBar[i].style.transform = "rotate(90deg)";
  }
}

///////////////////////////////////Navbar Toggle///////////////////////////////////
let toggleNavStatus = false;

function toggleNav() {
  let getNavbar = document.querySelector("#nav");
  let getBar = document.querySelector(".bar");

  if (toggleNavStatus === false) {
    getNavbar.style.transform = "translateY(-4rem)";
    getBar.style.transform = "rotate(90deg)";

    toggleNavStatus = true;

  } else if (toggleNavStatus === true) {
    getNavbar.style.transform = "translateY(-8rem)";
    getBar.style.transform = "rotate(0deg)";

    toggleNavStatus = false;
  }
}





///////////////////////////////////Footer Toggle///////////////////////////////////
let toggleFooterStatus = false;

function toggleFoot() {
  let getFooter = document.querySelector("#footer");
  let getBarFooter = document.querySelector(".bar-footer");

  if (toggleFooterStatus === false) {
    getFooter.style.transform = "translateY(0)";
    getBarFooter.style.transform = "rotate(90deg)";

    toggleFooterStatus = true;

  } else if (toggleFooterStatus === true) {
    getFooter.style.transform = "translateY(calc(100% - var(--space-l))";
    getBarFooter.style.transform = "rotate(0deg)";

    toggleFooterStatus = false;
  }
}

///////////////////////////////////Sideinfo Toggle///////////////////////////////////
let toggleInfoStatus = false;

function toggleInfo() {
  let getInfo = document.querySelector(".information");
  let getRand = document.querySelector(".rand");
  let getBarInfo = document.querySelector(".bar-info");

  if (toggleInfoStatus === false) {

    getInfo.style.transform = "translateY(0)";
    getInfo.style.visibility = "visible";
    getInfo.style.opacity = "1";

    // getRand.style.transform = "translateY(0)"

    getBarInfo.style.transform = "rotate(90deg)";

    toggleInfoStatus = true;

  } else if (toggleInfoStatus === true) {
    getInfo.style.transform = "translateY(-8rem)";
    getInfo.style.visibility = "hidden";
    getInfo.style.opacity = "0";

    getRand.style.transform = "translateY(-8rem)"

    getBarInfo.style.transform = "rotate(0deg)";

    toggleInfoStatus = false;
  }
}
