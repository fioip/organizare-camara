export function addProduct() {
  const form = document.querySelector("form");

  form.innerHTML = `
  <div class="modal-body">
    <div class="form-control">
        <label>Denumire</label>
      <input />
    </div>

    <div class="form-control">
        <label>Categorie</label>
        <select id="selectCategory">
          <option value="" selected disabled hidden>Alege categorie</option>
          <option>Fainoase</option>
          <option>Conserve</option>
          <option>Dulciuri</option>
          <option>Borcane</option>
          <option>Condimente</option>
        </select>
    </div>

    <div class="form-control">
        <label>Alergeni</label>
        <input />
    </div>

    <div class="form-control">
        <label>Unitate de masura</label>
        <select id="selectCategory">
          <option value="" selected disabled hidden>Alege unitate</option>
          <option>mg</option>
          <option>g</option>
          <option>ml</option>
          <option>l</option>
        </select>
    </div>

    <div class="form-control">
        <div class="quantity">
            <label>Cantitate</label>
            <button type="button" id="decrase-value">-</button>
            <input id="quantity" value="0" />
          <button type="button" id="increase-value">+</button>
        </div>
    </div>
  </div>
  <div class="modal-footer">
    <button>Save</>
  </div>
`;

  addEventOnQuantityButtons();
  return form;
}

function addEventOnQuantityButtons() {
  console.warn("click");
  let increaseValueButton = document.getElementById("increase-value");
  increaseValueButton.addEventListener("click", increaseInputValue);
  let decreaseValueButton = document.getElementById("decrase-value");
  decreaseValueButton.addEventListener("click", decreaseInputValue);
}

function increaseInputValue() {
  let input = document.getElementById("quantity");
  let inputValue = input.value;
  const newValue = parseInt(inputValue) + 1;
  input.value = newValue;
  console.warn("click", inputValue, newValue);
}

function decreaseInputValue() {
  let input = document.getElementById("quantity");
  let inputValue = input.value;
  let newValue;

  if (inputValue > 0) newValue = parseInt(inputValue) - 1;
  else newValue = 0;

  input.value = newValue;
  console.warn("click", inputValue, newValue);
}
