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

// function incrementInputValue() {
//   let increaseValueButton = document.getElementById("plus");
//   let input = document.getElementById("quantity");

//   increaseValueButton.addEventListener("click", (e) => {
//     if (e.target.matches("#plus")) {
//       let newValue = parseInt(input.value) + 1;
//       console.warn("New Value: ", newValue, typeof newValue);
//       console.warn("Input Value b: ", input.value, typeof input.value);
//       input.value = newValue;
//       console.warn("Input Value a: ", input.value, typeof input.value);
//     }
//   });
// }

// function decrementInputValue() {
//   let decreaseValueButton = document.getElementById("minus");
//   let input = document.getElementById("quantity");
//   decreaseValueButton.addEventListener("click", (e) => {
//     if (e.target.matches("#minus")) {
//       console.warn("decrease");
//     }

//     let inputValue = input.value;
//     const newValue = parseInt(inputValue) - 1;
//     input.value = newValue;
//     console.warn("click", inputValue, newValue);
//   });
// }

function totalClick(click) {
  let totalClicks = document.getElementById("totalClicks");
  const sum = parseInt(totalClicks.innerText) + click;
  totalClicks.innerText = sum;

  if (sum < 0) {
    totalClicks.innerText = 0;
  }
}

const select = document.getElementById("selectCategory");
var arr = ["Fainoase", "Conserve", "Dulciuri", "Borcane", "Condimente"];

openModal();
closeModal();
