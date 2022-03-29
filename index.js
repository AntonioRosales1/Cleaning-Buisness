var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds

  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById(
    "countDown"
  ).innerHTML = `IMaid Cleaning <br> Easy Get 25% Off!! ${hours}h ${minutes}m ${seconds}s `;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countDown").innerHTML = "EXPIRED";
  }
}, 1000);

const track = document.querySelector(".carousel-track");
const slides = Array.from(track.children);
const nextButton = document.querySelector(`.carousel_button--right`);
const prevButton = document.querySelector(`carousel_button--left`);
const dotsNav = document.querySelector(`.carousel_nav`);
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;

const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + `px`;
};

slides.forEach(setSlidePosition);

//when click left slide moves left
//when click right slide moves right
nextButton.addEventListener(`click`, (e) => {
  const currentSlide = track.querySelector(`.current-Slide`);
  //   const nextSlide = currentSlide.nextElementSibling;
  //   const amountToMove = nextSlide.style.left;
  //   //move to the next slide
  //   track.style.transform = `translateX( ` + amountToMove + `)`;
});
//when move indicators, move to that slide
