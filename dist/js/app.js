// Variables from the DOM
const burguerBtn = document.querySelector(".burguer");
const mobileNav = document.querySelector(".mobile-navbar");
const allCont = document.querySelector(".all-container");
const navBar = document.querySelector(".navbar");
const showcase = document.querySelector(".showcase");
const rkey = document.querySelector(".rkey");
const lkey = document.querySelector(".lkey");
const slides = document.querySelector(".slides");
const slidesList = document.querySelectorAll(".slides .slide");
const mobileBtns = document.querySelectorAll(".mob");
// fomr variables
const form = document.getElementById('form');
const user_name = document.getElementById('name');
const num_people = document.getElementById('num_people');
const date = document.getElementById('date');


// burguer menu interaction
burguerBtn.addEventListener("click", toggleMenu);
mobileBtns.forEach(btn => {
  btn.addEventListener("click", toggleMenu);
});
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

// slideshow interaction
let counter = 1;
const numSlides = slidesList.length;
let size = slides.offsetWidth / numSlides;
window.addEventListener("resize", () => {
  size = slides.offsetWidth / numSlides;
  counter = 1;
  slides.style.transform = "translateX(0px)";
  lkey.style.visibility = "hidden";
  rkey.style.visibility = "visible";
});
lkey.addEventListener("click", () => {
  if (counter > 1) {
    slides.style.transform = "translateX(" + -size * (counter - 2) + "px)";
    counter--;
    rkey.style.visibility = "visible";
  }
  if (counter == 1) {
    lkey.style.visibility = "hidden";
  }
});

rkey.addEventListener("click", () => {
  if (counter < numSlides) {
    slides.style.transform = "translateX(" + -size * counter + "px)";
    counter++;
    lkey.style.visibility = "visible";
  }
  if (counter == numSlides) {
    rkey.style.visibility = "hidden";
  }
});

// FORM
form.addEventListener('submit', (e)=>{
  e.preventDefault()
  const isValid = checkInputs()

  if (isValid){
    // send whatsapp
    // https://wa.me/whatsappphonenumber?text=urlencodedtext
    const phoneNumber = 5353759414
    const text = `Hi!%20I%20am%20${user_name.value}.%20I%20want%20to%20book%20a%20dive%20trip%20for%20${num_people.value}%20on%20the%20${date.value}.%20Please%20let%20know%20if%20it's%20possible%20.%20Thank%20very%20much!`
    window.location.href = `https://wa.me/${phoneNumber}?text=${text}`
  }
})

function checkInputs(){
  const nameValue = user_name.value.trim()
  const num_peopleValue = num_people.value
  const dateValue = new Date(date.value)
  const today = new Date()
  const isValid = true

  if(nameValue===''){
    setErrorFor(user_name, 'Your name is required')
    isValid = false
  } else {
    setSuccesFor(user_name)
  }

  if(num_peopleValue > 8 ){
    setErrorFor(num_people, 'It should be less than 8 people')
    isValid = false
  }
  else if(num_peopleValue < 1){
    setErrorFor(num_people, 'The number of people is required')
    isValid = false
  }
  else {
    setSuccesFor(num_people)
  }

  if(dateValue <= today){
    setErrorFor(date, 'Please select a valid date')
    isValid = false
  }
  else{
    setSuccesFor(date)
  }
  return isValid
}

function setErrorFor(input, msg){
  const formControl = input.parentElement;
  const small = formControl.querySelector('small')
  small.innerText = msg;
  formControl.className = 'form-control error'
}

function setSuccesFor(input){
  const formControl = input.parentElement;
  formControl.className = 'form-control success'
}