function openModal() {
  const triggers = document.querySelectorAll("[data-modal]");
  triggers.forEach((trigger) => {
    trigger.addEventListener("click", function (e) {
      const modal = document.querySelector("#modal");
      modal.classList.add("open");
    });
  });
}

function closeModal() {
  const closeButtons = document.querySelectorAll(".button-close");
  closeButtons.forEach((closeButton) => {
    closeButton.addEventListener("click", function (e) {
      const modal = document.querySelector("#modal");
      modal.classList.remove("open");
    });
  });
}

function addLiveTextBox() {
  const form = document.querySelector("form");
  // form.className = "info-fixed-box hide-view arrow-left";
  // form.id = "live-text-box";
  // form.method = "GET";
  // form.action = "#";
  form.innerHTML = `
  
  <div class="modal-body">
    <div class="form-control">
        <label>Denumire:</label>
      <input />
    </div>

    <div class="form-control">
        <label>Categorie:</label>
        <select id="selectCategory">
          <option value="" selected disabled hidden>Alege categorie</option>
          <option>Fainoase</option>
          <option>Dulciuri</option>
        </select>
    </div>

    <div class="form-control">
        <label>Alergeni:</label>
        <input />
    </div>

    <div class="form-control">
        <label>Unitate de masura:</label>
        <input />
    </div>

    <div class="quantity">
      <label>Cantitate</label>
      <input value ="0" id="quantity" />
      <button id="increase-value" onClick="increaseInputValue()" type="button">+</button>
      <button id="decrase-value" onClick="decreaseInputValue()" type="button">-</button>
    </div>
  </div>
  <div class="modal-footer">
    <button>Save</>
  </div>
  `;

  return form;
}

function increaseInputValue(e) {
  //e.preventDefault();
  let increaseValueButton = document.getElementById("increase-value");
  let input = document.getElementById("quantity");
  increaseValueButton.addEventListener("click", () => {
    let inputValue = input.value;
    const newValue = parseInt(inputValue) + 1;
    //inputValue = newValue;
    input.value = newValue;
    console.warn("click", inputValue, newValue);
  });
}

function decreaseInputValue(e) {
  let decreaseValueButton = document.getElementById("decrase-value");
  let input = document.getElementById("quantity");
  decreaseValueButton.addEventListener("click", () => {
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
addLiveTextBox();
selectOptions();
