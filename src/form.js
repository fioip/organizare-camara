function addProduct() {
  const form = document.querySelector("form");

  form.innerHTML = `
  <div class="modal-body">
  <div class="form-control">
      <label>Denumire</label>
    <input required/>
  </div>

  <div class="form-control">
      <label>Categorie</label>
      <select id="selectCategory" required>
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
      <input required/>
  </div>

  <div class="form-control">
      <label>Unitate de masura</label>
      <select id="selectCategory" required>
        <option value="" selected disabled hidden>Alege unitate</option>
        <option>mg</option>
        <option>g</option>
        <option>ml</option>
        <option>l</option>
      </select>
  </div>

  <div class="form-control">
      <div class="quantity">
          <label required>Cantitate</label>
          <button onclick="totalClick(-1)">-</button>
          <input id="totalClicks" value="0" />
        <button onclick="totalClick(1)">+</button>
      </div>
  </div>

</div>
<div class="modal-footer">
  <button>Save</>
</div>
     `;
  return form;
}

addProduct();
