let cardOne = document.getElementById("cardOne");
let cardTwo = document.getElementById("cardTwo");
let cardThree = document.getElementById("cardThree");

let buttonActive = false;

document.addEventListener("click", function () {
  if (!buttonActive) {
    cardOne.classList.add("active");
    cardTwo.classList.add("active");
    cardThree.classList.add("active");

    buttonActive = true;
  } else {
    cardOne.classList.remove("active");
    cardTwo.classList.remove("active");
    cardThree.classList.remove("active");
    buttonActive = false;
  }
});
