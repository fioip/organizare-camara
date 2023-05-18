(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>l});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([n.id,'* {\r\n  margin: 0px;\r\n  padding: 0px;\r\n  font-family: Georgia, "Times New Roman", Times, serif;\r\n}\r\n\r\nbody {\r\n  max-width: 1400px;\r\n  margin: 40px auto;\r\n  padding: 0 24px;\r\n  background: #f9f8f7;\r\n}\r\n\r\nh1 {\r\n  font-size: 40px;\r\n  color: #232a2f;\r\n}\r\n\r\np {\r\n  font-size: 16px;\r\n}\r\n\r\nbody {\r\n  position: relative;\r\n}\r\n\r\nbutton {\r\n  padding: 12px 20px;\r\n  border-radius: 6px;\r\n  background-color: #153147;\r\n  border: none;\r\n  font-size: 16px;\r\n  font-weight: 600;\r\n  color: #ffff;\r\n}\r\n\r\nbutton:hover {\r\n  background-color: #adb8bb;\r\n  cursor: pointer;\r\n  color: #153147;\r\n}\r\n\r\n.page-title-section {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n\r\n/* Modal */\r\n\r\n.modal.open .modal-overlay {\r\n  background-color: #000000c9;\r\n  position: fixed;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  z-index: 9;\r\n}\r\n\r\n.modal-container {\r\n  position: absolute;\r\n  flex-direction: column;\r\n  width: 600px;\r\n  height: 600px;\r\n  transition: all 0.3s ease;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  left: 0;\r\n  right: 0;\r\n  padding: 10px 20px 20px;\r\n  border: 1px solid #232a2f;\r\n  border-radius: 10px;\r\n  background-color: #edeae4;\r\n  display: none;\r\n  z-index: 9;\r\n}\r\n\r\n.modal.open .modal-container {\r\n  display: flex;\r\n}\r\n\r\n.modal-header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.modal-body {\r\n  flex-grow: 1;\r\n}\r\n\r\n.button-close {\r\n  padding: 10px;\r\n  background-color: unset;\r\n}\r\n\r\n.button-close:hover {\r\n  background-color: unset;\r\n}\r\n\r\n.button-close img {\r\n  height: 20px;\r\n  display: inline-block;\r\n}\r\n\r\n.modal-footer button {\r\n  float: right;\r\n}\r\n\r\n/* Form*/\r\n\r\nform {\r\n  display: flex;\r\n  flex-direction: column;\r\n  flex-grow: 1;\r\n}\r\n\r\n.form-control {\r\n  display: flex;\r\n  align-items: center;\r\n  margin-bottom: 20px;\r\n}\r\n\r\nlabel {\r\n  width: 150px;\r\n  display: inline-block;\r\n  margin-right: 10px;\r\n  font-weight: 600;\r\n}\r\n\r\ninput,\r\nselect {\r\n  flex-grow: 1;\r\n  border-radius: 4px;\r\n  padding: 10px 8px;\r\n  border: 1px solid #232a2f;\r\n  background: #f9f8f7;\r\n}\r\n\r\ninput:hover {\r\n  cursor: pointer;\r\n}\r\n\r\n.quantity {\r\n  display: flex;\r\n  align-items: center;\r\n  border-radius: 6px;\r\n  border: 1px solid #232a2f;\r\n  padding: 12px 20px;\r\n  margin: 80px auto 0;\r\n  max-width: 450px;\r\n}\r\n\r\n.quantity input {\r\n  margin: 0px 20px;\r\n}\r\n\r\n.quantity button {\r\n  padding: 4px 8px;\r\n  margin-left: 10px;\r\n  background-color: transparent;\r\n  background-color: #153147;\r\n  border: none;\r\n}\r\n\r\n.quantity button:hover {\r\n  background-color: #adb8bb;\r\n}\r\n\r\n/* Produse */\r\n\r\n.card {\r\n  display: flex;\r\n  justify-content: start;\r\n  width: 50%;\r\n  height: 30%;\r\n  border-radius: 20px;\r\n  position: relative;\r\n  margin-top: 15px;\r\n  color: #232a2f;\r\n}\r\n\r\n.card-img {\r\n  max-height: 500px;\r\n  border-radius: 20px;\r\n  max-width: 500px;\r\n}\r\n\r\n.card-title {\r\n  display: flex;\r\n  align-items: baseline;\r\n  margin-left: 5px;\r\n}\r\n\r\n/* Tabel */\r\n\r\n#tableID {\r\n  display: flex;\r\n  align-items: center;\r\n  margin-left: -100px;\r\n}\r\n\r\ntable td,\r\ntable th {\r\n  padding: 3px 5px;\r\n  border: 1px solid white;\r\n  text-align: center;\r\n  font-size: 14px;\r\n}\r\n\r\ntable th,\r\ntfoot {\r\n  background-color: #153147;\r\n  color: white;\r\n}\r\n\r\ntable tbody tr {\r\n  background-color: #8db5d3;\r\n}\r\n\r\ntable tbody tr:nth-child(even) {\r\n  background-color: #f9f8f7;\r\n}\r\n.imgContainer {\r\n  margin-top: 29px;\r\n}\r\n\r\n.remove-btn:hover {\r\n  background-color: white;\r\n  cursor: pointer;\r\n}\r\n.edit-btn:hover {\r\n  background-color: white;\r\n  cursor: pointer;\r\n}\r\n',""]);const l=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var l=0;l<this.length;l++){var d=this[l][0];null!=d&&(i[d]=!0)}for(var c=0;c<n.length;c++){var s=[].concat(n[c]);r&&i[s[0]]||(void 0!==a&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=a),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),o&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=o):s[4]="".concat(o)),e.push(s))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],l=0;l<n.length;l++){var d=n[l],c=r.base?d[0]+r.base:d[0],s=a[c]||0,u="".concat(c," ").concat(s);a[c]=s+1;var p=t(u),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)e[p].references++,e[p].updater(m);else{var f=o(m,r);r.byIndex=l,e.splice(l,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var l=t(a[i]);e[l].references--}for(var d=r(n,o),c=0;c<a.length;c++){var s=t(a[c]);0===e[s].references&&(e[s].updater(),e.splice(s,1))}a=d}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{var n=t(379),e=t.n(n),r=t(795),o=t.n(r),a=t(569),i=t.n(a),l=t(565),d=t.n(l),c=t(216),s=t.n(c),u=t(589),p=t.n(u),m=t(426),f={};function g(){let n=document.getElementById("quantity"),e=n.value;const t=parseInt(e)+1;n.value=t,console.warn("click",e,t)}function b(){let n,e=document.getElementById("quantity"),t=e.value;n=t>0?parseInt(t)-1:0,e.value=n,console.warn("click",t,n)}f.styleTagTransform=p(),f.setAttributes=d(),f.insert=i().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=s(),e()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;let h,y=[];const v={CREATE:{URL:"http://localhost:3000/teams/create",METHOD:"POST"},READ:{URL:"http://localhost:3000/products-json",METHOD:"GET"},UPDATE:{URL:"http://localhost:3000/teams/update",METHOD:"PUT"},DELETE:{URL:"http://localhost:3000/teams/delete",METHOD:"DELETE"}};let x;function E(n,e){x=n,document.querySelector(e).innerHTML=function(n){return n.map((({name:n,category:e,allergens:t,weight:r,measureUnit:o,quantity:a,id:i})=>` \n            <tr>\n                <td>${n}</td>\n                <td>${e}</td>\n                <td>${t}</td>\n                <td>${r}</td>\n                <td>${o}</td>\n                <td>${a}</td>\n                <td>\n                  <a data-id="${i}" class="remove-btn">✖</a>\n                  <a data-id="${i}" class="edit-btn";>&#9998;</a>\n                </td>\n            </tr>`)).join("")}(n)}function T(n,e){return n.filter((n=>n.category===e))}function w(){document.querySelector("#modal").classList.add("open")}function C(){document.querySelector("#modal").classList.remove("open")}function L(n,e){const t=document.querySelector(`#${n} .tableContent`),r=function(n){const e=document.createElement("table");return e.id=n,e.innerHTML='\n    <thead>\n    <tr>\n    <th>Name</th>\n    <th>Category</th>\n    <th>Allergens</th>\n    <th>Weight</th>\n    <th>Measure Unit</th>\n    <th>Quantity</th>\n    </tr>\n    </thead>\n    <tbody class="displayedProducts"></tbody>',e}(e);t.appendChild(r)}"fioip.github.io"===location.host&&(v.READ.URL="data/products.json",v.DELETE.URL="data/delete.json",v.CREATE.URL="data/create.json",v.UPDATE.URL="data/update.json",v.DELETE.METHOD="GET",v.CREATE.METHOD="GET",v.UPDATE.METHOD="GET"),L("card-fainoase","fainoaseTable"),L("card-conserve","conserveTable"),L("card-dulciuri","dulciuriTable"),L("card-borcane","borcaneTable"),L("card-condimente","condimenteTable"),document.querySelectorAll("[data-modal]").forEach((n=>{n.addEventListener("click",(n=>{w()}))})),fetch(v.READ.URL,{method:v.READ.METHOD,headers:{"Content-type":"application/json"}}).then((n=>n.json())).then((n=>{y=n,function(n){const e=T(n,"Fainoase"),t=T(n,"Conserve"),r=T(n,"Dulciuri"),o=T(n,"Borcane"),a=T(n,"Condimente");E(e,"#fainoaseTable tbody"),E(t,"#conserveTable tbody"),E(r,"#dulciuriTable tbody"),E(o,"#borcaneTable tbody"),E(a,"#condimenteTable tbody")}(n)})),document.getElementById("pantryForm").addEventListener("submit",(function(n){n.preventDefault();const e={name:document.getElementById("name").value,category:document.getElementById("selectCategory").value,allergens:document.getElementById("allergens").value,measureUnit:document.getElementById("selectUnit").value,weight:document.getElementById("weight").value,quantity:document.getElementById("quantity").value};h?(e.id=h,function(n){return fetch("http://localhost:3000/products-json/update",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then((n=>n.json()))}(e).then((n=>{n.success&&window.location.reload()}))):function(n){return fetch("http://localhost:3000/products-json/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then((n=>n.json()))}(e).then((e=>{e.success&&(C(),window.location.reload(),n.target.reset(),w())}))})),document.querySelectorAll(".displayedProducts").forEach((n=>{n.addEventListener("click",(n=>{var e;n.target.matches("a.remove-btn")?(e=n.target.dataset.id,fetch("http://localhost:3000/products-json/delete",{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e})}).then((n=>n.json()))).then((n=>{n.success&&window.location.reload()})):n.target.matches("a.edit-btn")&&(function(n){const e=y.find((e=>e.id===n));console.log("edit",n,e),h=n,document.getElementById("name").value=e.name,document.getElementById("selectCategory").value=e.category,document.getElementById("allergens").value=e.allergens,document.getElementById("selectUnit").value=e.measureUnit,document.getElementById("weight").value=e.weight,document.getElementById("quantity").value=e.quantity}(n.target.dataset.id),w())}))})),document.querySelectorAll(".button-close").forEach((n=>{n.addEventListener("click",C)})),document.querySelector("form").innerHTML='\n  <div class="modal-body">\n    <div class="form-control">\n        <label>Denumire</label>\n      <input placeholder="Adaugati denumire produs" type="text" name="name" id="name" />\n    </div>\n\n    <div class="form-control">\n        <label>Categorie</label>\n        <select id="selectCategory">\n          <option value="" selected disabled hidden>Alege categorie</option>\n          <option>Fainoase</option>\n          <option>Conserve</option>\n          <option>Dulciuri</option>\n          <option>Borcane</option>\n          <option>Condimente</option>\n        </select>\n    </div>\n\n    <div class="form-control">\n        <label>Alergeni</label>\n        <input placeholder="Adaugati alergenii" type="text" name="allergens" id="allergens" />\n    </div>\n\n    <div class="form-control">\n    <label>Gramaj</label>\n    <input placeholder="Adaugati gramajul" type="text" name="weight" id="weight" />\n    </div>\n\n    <div class="form-control">\n        <label>Unitate de masura</label>\n        <select id="selectUnit">\n          <option value="" selected disabled hidden>Alege unitate</option>\n          <option>mg</option>\n          <option>g</option>\n          <option>ml</option>\n          <option>l</option>\n        </select>\n    </div>\n\n    <div class="form-control">\n        <div class="quantity">\n            <label>Cantitate</label>\n            <button type="button" id="decrase-value">-</button>\n            <input id="quantity" value="0" type="number" min="0"/>\n          <button type="button" id="increase-value">+</button>\n        </div>\n    </div>\n  </div>\n  <div class="modal-footer">\n    <button type="submit">Save</>\n  </div>\n',document.getElementById("increase-value").addEventListener("click",g),document.getElementById("decrase-value").addEventListener("click",b)})()})();