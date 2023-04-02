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
         <input />
     </div>
     <div>
         <label>Bucati:</label>
         <input />
     </div>
     `;
  return form;
}

addProduct();
