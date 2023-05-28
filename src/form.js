export function addProductModalHTML() {
  const form = document.querySelector("form");
  const categories = [
    "Fainoase",
    "Conserve",
    "Dulciuri",
    "Borcane",
    "Condimente",
  ];

  form.innerHTML = `
  <div class="modal-body">
    <div class="form-control">
        <label>Denumire</label>
      <input placeholder="Adaugati denumire produs" type="text" name="name" id="name" />
    </div>

    <div class="form-control">
        <label>Categorie</label>
        <select id="selectCategory">
          <option value="" selected disabled hidden>Alege categorie</option>
          ${categories.map((c) => {
            return `<option>${c}</option>`;
          })}
        </select>
    </div>

    <div class="form-control">
        <label>Alergeni</label>
        <input placeholder="Adaugati alergenii" type="text" name="allergens" id="allergens" />
    </div>

    <div class="form-control">
    <label>Gramaj</label>
    <input placeholder="Adaugati gramajul" type="text" name="weight" id="weight" />
    </div>

    <div class="form-control">
        <label>Unitate de masura</label>
        <select id="selectUnit">
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
            <input id="quantity" value="0" type="number" min="0"/>
          <button type="button" id="increase-value">+</button>
        </div>
    </div>
  </div>
  <div class="modal-footer">
    <button type="submit">Save</>
  </div>
`;

  addEventOnQuantityButtons();
  return form;
}

function addEventOnQuantityButtons() {
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
