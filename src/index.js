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

function incrementInputValue() {
  let increaseValueButton = document.getElementById("plus");
  let input = document.getElementById("quantity");

  increaseValueButton.addEventListener("click", (e) => {
    if (e.target.matches("#plus")) {
      let newValue = parseInt(input.value) + 1;
      console.warn("New Value: ", newValue, typeof newValue);
      console.warn("Input Value b: ", input.value, typeof input.value);
      input.value = newValue;
      console.warn("Input Value a: ", input.value, typeof input.value);
    }
  });
}

// function incrementInputValue() {
//   const plus = document.getElementById("plus");
//   const num = document.getElementById("quantity");

//   let sum = 1;
//   plus.addEventListener("click", () => {
//     sum++;
//     num.value = sum;
//     console.warn(sum);
//   });
// }

function decrementInputValue() {
  let decreaseValueButton = document.getElementById("minus");
  let input = document.getElementById("quantity");
  decreaseValueButton.addEventListener("click", (e) => {
    if (e.target.matches("#minus")) {
      console.warn("decrease");
    }

    let inputValue = input.value;
    const newValue = parseInt(inputValue) - 1;
    input.value = newValue;
    console.warn("click", inputValue, newValue);
  });
}

const select = document.getElementById("selectCategory");
var arr = ["Fainoase", "Conserve", "Dulciuri", "Borcane", "Condimente"];

openModal();
closeModal();
