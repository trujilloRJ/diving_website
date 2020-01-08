const burguerBtn = document.querySelector(".burguer");
const mobileNav = document.querySelector(".mobile-navbar");
const allCont = document.querySelector(".all-container");

burguerBtn.addEventListener("click", toggleMenu);

// Set Initial State of Menu
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
