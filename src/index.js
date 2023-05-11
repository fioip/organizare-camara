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

function createProductRequest(product) {
  return fetch("http://localhost:3000/products-json/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  }).then((r) => r.json());
}

function getProductsHtml(products) {
  return products
    .map(
      //primesc un json si il transform in string
      ({ name, category, allergens, weight, measureUnit, quantity, id }) => ` 
            <tr>
                <td>${name}</td>
                <td>${category}</td>
                <td>${allergens}</td>
                <td>${weight}</td>
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

function displayProducts(products, tableSelector) {
  oldDisplayproducts = products;
  document.querySelector(tableSelector).innerHTML = getProductsHtml(products);
}

function getFilteredProducts(products, categoryName) {
  const filteredProducts = products.filter((product) => {
    return product.category === categoryName;
  });
  return filteredProducts;
}

function loadProducts() {
  loadProductsRequest().then((products) => {
    allProducts = products;
    displayAllProducts(products);
  });
}

function displayAllProducts(products) {
  const fainoaseArray = getFilteredProducts(products, "Fainoase");
  const conserveArray = getFilteredProducts(products, "Conserve");
  const dulciuriArray = getFilteredProducts(products, "Dulciuri");
  const borcaneArray = getFilteredProducts(products, "Borcane");
  const condimenteArray = getFilteredProducts(products, "Condimente");

  displayProducts(fainoaseArray, "#fainoaseTable tbody");
  displayProducts(conserveArray, "#conserveTable tbody");
  displayProducts(dulciuriArray, "#dulciuriTable tbody");
  displayProducts(borcaneArray, "#borcaneTable tbody");
  displayProducts(condimenteArray, "#condimenteTable tbody");
}

function readProduct() {
  return {
    name: document.getElementById("name").value,
    category: document.getElementById("selectCategory").value,
    allergens: document.getElementById("allergens").value,
    measureUnit: document.getElementById("selectUnit").value,
    weight: document.getElementById("weight").value,
    quantity: document.getElementById("quantity").value,
  };
}

function onSubmit(e) {
  e.preventDefault();
  const product = readProduct();
  createProductRequest(product).then((status) => {
    if (status.success) {
      product.id = status.id;
      allProducts = [...allProducts, product];
      displayAllProducts(allProducts);
      e.target.reset();
      closeModal();
    }
  });
}

function initEvents() {
  const form = document.getElementById("pantryForm");
  form.addEventListener("submit", onSubmit);
}

function openModal() {
  const triggers = document.querySelectorAll("[data-modal]");
  triggers.forEach((trigger) => {
    trigger.addEventListener("click", (e) => {
      const modal = document.querySelector("#modal");
      modal.classList.add("open");
    });
  });
}

function closeModalOnX() {
  const closeButtons = document.querySelectorAll(".button-close");
  closeButtons.forEach((closeButton) => {
    closeButton.addEventListener("click", closeModal);
  });
}

function closeModal() {
  const modal = document.querySelector("#modal");
  modal.classList.remove("open");
}

function createProductTable(tableId) {
  const tableNode = document.createElement("table");
  tableNode.id = tableId;
  tableNode.innerHTML = `
    <thead>
    <tr>
    <th>Name</th>
    <th>Category</th>
    <th>Allergens</th>
    <th>Weight</th>
    <th>Measure Unit</th>
    <th>Quantity</th>
    </tr>
    </thead>
    <tbody></tbody>`;
  return tableNode;
}

function initTable(cardName, tableName) {
  const productCardElement = document.querySelector(
    `#${cardName} .tableContent`
  );
  const productTableNode = createProductTable(tableName);
  productCardElement.appendChild(productTableNode);
}

function initTables() {
  initTable("card-fainoase", "fainoaseTable");
  initTable("card-conserve", "conserveTable");
  initTable("card-dulciuri", "dulciuriTable");
  initTable("card-borcane", "borcaneTable");
  initTable("card-condimente", "condimenteTable");
}

initTables();
loadProducts();
initEvents();
openModal();
closeModalOnX();
addProductModalHTML();
