(()=>{"use strict";function e(){let e=document.getElementById("quantity"),t=e.value;const n=parseInt(t)+1;e.value=n,console.warn("click",t,n)}function t(){let e,t=document.getElementById("quantity"),n=t.value;e=n>0?parseInt(n)-1:0,t.value=e,console.warn("click",n,e)}let n,o,a=[];function l(e,t){o=e,document.querySelector(t).innerHTML=function(e){return e.map((({name:e,category:t,allergens:n,weight:o,measureUnit:a,quantity:l,id:d})=>` \n            <tr>\n                <td>${e}</td>\n                <td>${t}</td>\n                <td>${n}</td>\n                <td>${o}</td>\n                <td>${a}</td>\n                <td>${l}</td>\n                <td>\n                  <a data-id="${d}" class="remove-btn">✖</a>\n                  <a data-id="${d}" class="edit-btn";>&#9998;</a>\n                </td>\n            </tr>`)).join("")}(e)}function d(e,t){return e.filter((e=>e.category===t))}function i(){document.querySelector("#modal").classList.add("open")}function c(){document.querySelector("#modal").classList.remove("open")}function r(e,t){const n=document.querySelector(`#${e} .tableContent`),o=function(e){const t=document.createElement("table");return t.id=e,t.innerHTML='\n    <thead>\n    <tr>\n    <th>Name</th>\n    <th>Category</th>\n    <th>Allergens</th>\n    <th>Weight</th>\n    <th>Measure Unit</th>\n    <th>Quantity</th>\n    </tr>\n    </thead>\n    <tbody class="displayedProducts"></tbody>',t}(t);n.appendChild(o)}r("card-fainoase","fainoaseTable"),r("card-conserve","conserveTable"),r("card-dulciuri","dulciuriTable"),r("card-borcane","borcaneTable"),r("card-condimente","condimenteTable"),document.querySelectorAll("[data-modal]").forEach((e=>{e.addEventListener("click",(e=>{i()}))})),fetch("http://localhost:3000/products-json",{method:"GET",headers:{"Content-type":"application/json"}}).then((e=>e.json())).then((e=>{a=e,function(e){const t=d(e,"Fainoase"),n=d(e,"Conserve"),o=d(e,"Dulciuri"),a=d(e,"Borcane"),i=d(e,"Condimente");l(t,"#fainoaseTable tbody"),l(n,"#conserveTable tbody"),l(o,"#dulciuriTable tbody"),l(a,"#borcaneTable tbody"),l(i,"#condimenteTable tbody")}(e)})),document.getElementById("pantryForm").addEventListener("submit",(function(e){e.preventDefault();const t={name:document.getElementById("name").value,category:document.getElementById("selectCategory").value,allergens:document.getElementById("allergens").value,measureUnit:document.getElementById("selectUnit").value,weight:document.getElementById("weight").value,quantity:document.getElementById("quantity").value};n?(t.id=n,function(e){return fetch("http://localhost:3000/products-json/update",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((e=>e.json()))}(t).then((e=>{e.success&&window.location.reload()}))):function(e){return fetch("http://localhost:3000/products-json/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((e=>e.json()))}(t).then((t=>{t.success&&(c(),window.location.reload(),e.target.reset(),i())}))})),document.querySelectorAll(".displayedProducts").forEach((e=>{e.addEventListener("click",(e=>{var t;e.target.matches("a.remove-btn")?(t=e.target.dataset.id,fetch("http://localhost:3000/products-json/delete",{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:t})}).then((e=>e.json()))).then((e=>{e.success&&window.location.reload()})):e.target.matches("a.edit-btn")&&(function(e){const t=a.find((t=>t.id===e));console.log("edit",e,t),n=e,document.getElementById("name").value=t.name,document.getElementById("selectCategory").value=t.category,document.getElementById("allergens").value=t.allergens,document.getElementById("selectUnit").value=t.measureUnit,document.getElementById("weight").value=t.weight,document.getElementById("quantity").value=t.quantity}(e.target.dataset.id),i())}))})),document.querySelectorAll(".button-close").forEach((e=>{e.addEventListener("click",c)})),document.querySelector("form").innerHTML='\n  <div class="modal-body">\n    <div class="form-control">\n        <label>Denumire</label>\n      <input placeholder="Adaugati denumire produs" type="text" name="name" id="name" />\n    </div>\n\n    <div class="form-control">\n        <label>Categorie</label>\n        <select id="selectCategory">\n          <option value="" selected disabled hidden>Alege categorie</option>\n          <option>Fainoase</option>\n          <option>Conserve</option>\n          <option>Dulciuri</option>\n          <option>Borcane</option>\n          <option>Condimente</option>\n        </select>\n    </div>\n\n    <div class="form-control">\n        <label>Alergeni</label>\n        <input placeholder="Adaugati alergenii" type="text" name="allergens" id="allergens" />\n    </div>\n\n    <div class="form-control">\n    <label>Gramaj</label>\n    <input placeholder="Adaugati gramajul" type="text" name="weight" id="weight" />\n    </div>\n\n    <div class="form-control">\n        <label>Unitate de masura</label>\n        <select id="selectUnit">\n          <option value="" selected disabled hidden>Alege unitate</option>\n          <option>mg</option>\n          <option>g</option>\n          <option>ml</option>\n          <option>l</option>\n        </select>\n    </div>\n\n    <div class="form-control">\n        <div class="quantity">\n            <label>Cantitate</label>\n            <button type="button" id="decrase-value">-</button>\n            <input id="quantity" value="0" type="number" min="0"/>\n          <button type="button" id="increase-value">+</button>\n        </div>\n    </div>\n  </div>\n  <div class="modal-footer">\n    <button type="submit">Save</>\n  </div>\n',document.getElementById("increase-value").addEventListener("click",e),document.getElementById("decrase-value").addEventListener("click",t)})();