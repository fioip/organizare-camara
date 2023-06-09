import { resetFormValues } from "./index";

export function openModal() {
  const modal = document.querySelector("#modal");
  modal.classList.add("open");
}

export function openEditModal() {
  openModal();
  const editHdr = document.getElementById("modalHdr");
  editHdr.innerHTML = "Editeaza";
}

export function openAddProductModal() {
  const triggers = document.querySelectorAll("[data-modal]");
  triggers.forEach((trigger) => {
    trigger.addEventListener("click", (e) => {
      openModal();
    });
  });
}

export function closeModalOnX() {
  const closeButtons = document.querySelectorAll(".button-close");
  closeButtons.forEach((closeButton) => {
    closeButton.addEventListener("click", closeModal);
  });
}

export function closeModal() {
  const modal = document.querySelector("#modal");
  modal.classList.remove("open");
  resetFormValues();
  const editHdr = document.getElementById("modalHdr");
  editHdr.innerHTML = "Adauga produs";
}
