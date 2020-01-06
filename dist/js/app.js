const burguerBtn = document.querySelector(".burguer");
const mobileNav = document.querySelector(".mobile-navbar");

burguerBtn.addEventListener("click", toggleMenu);

// Set Initial State of Menu
let showMenu = false;

function toggleMenu() {
  if (!showMenu) {
    mobileNav.classList.add("active");
    burguerBtn.classList.add("close");
    showMenu = true;
  } else {
    mobileNav.classList.remove("active");
    burguerBtn.classList.remove("close");
    showMenu = false;
  }
}
