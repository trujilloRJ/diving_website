// Variables from the DOM
const burguerBtn = document.querySelector(".burguer");
const mobileNav = document.querySelector(".mobile-navbar");
const allCont = document.querySelector(".all-container");
const navBar = document.querySelector(".navbar");
const showcase = document.querySelector(".showcase");

// burguer menu interaction
burguerBtn.addEventListener("click", toggleMenu);
let showMenu = false;
function toggleMenu() {
  if (!showMenu) {
    mobileNav.classList.add("active");
    burguerBtn.classList.add("close");
    allCont.classList.add("shift");
    showMenu = true;
  } else {
    mobileNav.classList.remove("active");
    burguerBtn.classList.remove("close");
    allCont.classList.remove("shift");
    showMenu = false;
  }
}

// scroll nav interaction
const options = {
  rootMargin: "-100px 0px 0px 0px"
};
const showcaseObserver = new IntersectionObserver(function(
  entries,
  showcaseObserver
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      navBar.classList.add("scrolled");
    } else {
      navBar.classList.remove("scrolled");
    }
  });
},
options);
showcaseObserver.observe(showcase);
