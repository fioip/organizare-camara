function addProduct() {
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
        <option>Dulciuri</option>
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

  <div class="quantity">
    <label>Cantitate</label>
    <input value ="0" id="quantity" />
    <button id="plus" onClick="incrementInputValue()" type="button">+</button>
    <button id="minus" onClick="decrementInputValue()" type="button">-</button>
  </div>
</div>
<div class="modal-footer">
  <button>Save</>
</div>
     `;
  return form;
}

addProduct();
