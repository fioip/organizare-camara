import { addProductModalHTML } from "./form";

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

openModal();
closeModal();
addProductModalHTML();
