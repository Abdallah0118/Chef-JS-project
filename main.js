var slides = document.querySelectorAll(".slide");
var currentSlide = 0;
var slideInterval = setInterval(nextSlide, 2000);

function nextSlide() {
  slides[currentSlide].className = "slide";
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].className = "slide active";
}

function prevSlide() {
  slides[currentSlide].className = "slide";
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  slides[currentSlide].className = "slide active";
}

// catagery
let cata = document.getElementsByClassName("cata");

function chosseBurger() {
  cata[0].style.display = "flex";
  cata[1].style.display = "none";
  cata[2].style.display = "none";
}
function chosseChecken() {
  cata[0].style.display = "none";
  cata[1].style.display = "flex";
  cata[2].style.display = "none";
}
function chosseDrink() {
  cata[0].style.display = "none";
  cata[1].style.display = "none";
  cata[2].style.display = "flex";
}

let cart = document.querySelector(".cart");
let close = document.querySelector(".close");

function openCart() {
  cart.style.right = "0";
}
function closeCart() {
  cart.style.right = "-300px";
}

let add = document.getElementsByClassName("add");

// add to cart
let countNumber = 0;
let cartList = document.getElementById("cartList");
let buttonClicked;
for (let i = 0; i < add.length; i++) {
  let addButton = add[i];
  addButton.addEventListener("click", function (event) {
    buttonClicked = event.target.parentElement.children;
    cartList.innerHTML += `<li class="yourchosse">You ordered : <span>${buttonClicked[1].innerHTML}</span></li>`;

    let counter = document.getElementById("counter");
    counter.innerHTML = `${countNumber++ + 1}`;
  });
}

// counter

// offer
var offer = document.querySelectorAll(".offer");
var index = 0;
var slideInterval = setInterval(next, 2000);

function next() {
  offer[index].className = "offer";
  index = (index + 1) % offer.length;
  offer[index].className = "slide active";
}

function prev() {
  offer[index].className = "offer";
  index = (index - 1 + offer.length) % offer.length;
  offer[index].className = "offer active";
}

// Get the button:
let mybutton = document.getElementById("myBtn");

// When  scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.documentElement.scrollTop = 0;
}

// form validation
// form validation

// form validation
// form validation
