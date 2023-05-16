let menucontainer = document.getElementById("menu");
let options = menucontainer.getElementsByClassName("menu-option");

for (var i = 0; i < options.length; i++) {
  options[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

//SHRINK-MENU
let menu = document.querySelector("#menu");
let pointer = document.querySelector(".pointer");

let ScienceSection = document.querySelector("#science-section");
let FoodSection = document.querySelector("#food-section");
let NatureSection = document.querySelector("#nature-section");
let AnimalsSection = document.querySelector("#animals-section");

let sciencetest = document.getElementById("science-menu");
let foodtest = document.getElementById("food-menu");
let naturetest = document.getElementById("nature-menu");
let animalstest = document.getElementById("animals-menu");

const actives = document.getElementsByClassName("active");

window.onscroll = function () {
  MenuFunction();
  ChangeMenuColor();
};

function ChangeMenuColor() {
  if (checkVisible(FoodSection)) {
    sciencetest.classList.remove("active");
    foodtest.classList.add("active");
    naturetest.classList.remove("active");
    animalstest.classList.remove("active");
  } else if (checkVisible(NatureSection)) {
    sciencetest.classList.remove("active");
    foodtest.classList.remove("active");
    naturetest.classList.add("active");
    animalstest.classList.remove("active");
  } else if (checkVisible(AnimalsSection)) {
    sciencetest.classList.remove("active");
    foodtest.classList.remove("active");
    naturetest.classList.remove("active");
    animalstest.classList.add("active");
  } else if (checkVisible(ScienceSection)) {
    sciencetest.classList.add("active");
    foodtest.classList.remove("active");
    naturetest.classList.remove("active");
    animalstest.classList.remove("active");
  }
}

function checkVisible(element) {
  let rect = element.getBoundingClientRect();
  let viewHeight = Math.max(
    document.documentElement.clientHeight,
    window.innerHeight
  );
  return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}

//Edit menu
function MenuFunction() {
  if (checkVisible(pointer) == true) {
    document.querySelector(".navbar").style.position = "static";
    document.querySelector(".navbar").style.padding = "30px 0";
  } else {
    document.querySelector(".navbar").style.position = "fixed";
    document.querySelector(".navbar").style.top = "0";
    document.querySelector(".navbar").style.padding = "5px 0";
    document.querySelector(".navbar").style.backgroundColor = "var(--bg-color)";
  }
}

//Zoom images
const images = document.querySelectorAll(".main img");
let imgSrc;
// get images src onclick
images.forEach((img) => {
  img.addEventListener("click", (e) => {
    imgSrc = e.target.src;
    //run modal function
    imgModal(imgSrc);
  });
});
//creating the modal
let imgModal = (src) => {
  const modal = document.createElement("div");
  modal.setAttribute("class", "modal");
  //add the modal to the main section or the parent element
  document.querySelector(".main").append(modal);
  //adding image to modal
  const newImage = document.createElement("img");
  newImage.setAttribute("src", src);
  //creating the close button
  const closeBtn = document.createElement("span");
  closeBtn.setAttribute("class", "closeBtn");
  //close function
  closeBtn.onclick = () => {
    modal.remove();
  };
  document
    .querySelector(".modal")
    .addEventListener("click", () => modal.remove());
  document.addEventListener("keydown", (evt) => {
    if (evt.key === "Escape") {
      modal.remove();
    }
  });
  modal.append(newImage, closeBtn);
};
