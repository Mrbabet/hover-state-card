let cardOne = document.getElementById("cardOne");
let cardTwo = document.getElementById("cardTwo");
let cardThree = document.getElementById("cardThree");

let buttonActive = false;

cardOne.addEventListener("click", function () {
  if (!buttonActive) {
    cardOne.classList.add("active");
    buttonActive = true;
  } else {
    cardOne.classList.remove("active");
    buttonActive = false;
  }
});
cardTwo.addEventListener("click", function () {
  if (!buttonActive) {
    cardTwo.classList.add("active");
    buttonActive = true;
  } else {
    cardTwo.classList.remove("active");
    buttonActive = false;
  }
});
cardThree.addEventListener("click", function () {
  if (!buttonActive) {
    cardThree.classList.add("active");
    buttonActive = true;
  } else {
    cardThree.classList.remove("active");
    buttonActive = false;
  }
});
