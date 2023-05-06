import { addProductModalHTML } from "./form";

let allProducts = [];

function loadProductsRequest() {
  return fetch("http://localhost:3000/products-json", {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  }).then((r) => r.json());
}

// function createProductRequest(product) {
//   return (
//     fetch("http://localhost:3000/products-json/create", {
//       //se va efectua doar cand dau click pe submit
//       method: "POST", //cum transmit date
//       headers: {
//         "Content-Type": "application/json", //in ce format transmit date
//       },
//       body: JSON.stringify(product),
//     })
//       //1. Facem requestul => 2. Convertim la json => 3. Asteptam raspunsul care este un status
//       .then((r) => r.json())
//   );
// }

function getProductsHtml(products) {
  return products
    .map(
      //primesc un json si il transform in string
      ({ name, category, allergens, measureUnit, quantity, id }) => ` 
            <tr>
                <td>${name}</td>
                <td>${category}</td>
                <td>${allergens}</td>
                <td>${measureUnit}</td>
                <td>${quantity}</td>
                <td>
                  <a data-id="${id}" class="remove-btn">✖</a>
                  <a data-id="${id}" class="edit-btn">&#9998;</a>
                </td>
            </tr>`
    )
    .join("");
}

let oldDisplayproducts;

function displayProducts(products) {
  oldDisplayproducts = products;
  document.querySelector("#productsTable tbody").innerHTML =
    getProductsHtml(products);
}

// function initEvents() {
//   const form = document.getElementById("pantryForm");
//   form.addEventListener("submit", onSubmit);
// }

function loadProducts() {
  loadProductsRequest().then((products) => {
    allProducts = products;
    console.warn("aici", products);
    displayProducts(products);
  });
}

loadProducts();
//initEvents();

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

openModal();
closeModal();
addProductModalHTML();
