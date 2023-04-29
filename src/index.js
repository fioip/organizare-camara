import { addProduct } from "./form";

function openModal() {
  const triggers = document.querySelectorAll("[data-modal]");
  triggers.forEach((trigger) => {
    trigger.addEventListener("click", (e) => {
      const modal = document.querySelector("#modal");
      modal.classList.add("open");
    });
  });
}

function closeModal() {
  const closeButtons = document.querySelectorAll(".button-close");
  closeButtons.forEach((closeButton) => {
    closeButton.addEventListener("click", (e) => {
      const modal = document.querySelector("#modal");
      modal.classList.remove("open");
    });
  });
}

// function totalClick(click) {
//   let totalClicks = document.getElementById("totalClicks");
//   const sum = parseInt(totalClicks.innerText) + click;
//   totalClicks.innerText = sum;

//   if (sum < 0) {
//     totalClicks.innerText = 0;
//   }
// }

const select = document.getElementById("selectCategory");
var arr = ["Fainoase", "Conserve", "Dulciuri", "Borcane", "Condimente"];

openModal();
closeModal();
addProduct();
