function addProduct() {
  const form = document.querySelector("form");

  form.innerHTML = `
     <div>
         <label>Denumire:</label>
        <input />
     </div>
   
     <div>
         <label>Categorie:</label>
         <input />
     </div>
   
     <div>
         <label>Alergeni:</label>
         <input />
     </div>
   
     <div>
         <label>Unitate de masura:</label>
         <div class="select">
            <select name="unitate" id="unitate">
               <option selected disabled>Unitate</option>
               <option value="mg">mg</option>
               <option value="g">g</option>
               <option value="ml">ml</option>
               <option value="l">l</option>
            </select>
          </div>
     </div>

     <div>
         <label>Bucati:</label>
         <button>-</button>
         <input value="0" id="totalClicks" />
         <button>+</button>
     </div>
     `;
  return form;
}

addProduct();
