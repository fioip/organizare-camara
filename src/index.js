import "./style.css";
import { addProductModalHTML } from "./form";

let allProducts = [];
let editId;

const API = {
  CREATE: {
    URL: "http://localhost:3000/products-json/create",
    METHOD: "POST",
  },
  READ: {
    URL: "http://localhost:3000/products-json",
    METHOD: "GET",
  },
  UPDATE: {
    URL: "http://localhost:3000/products-json/update",
    METHOD: "PUT",
  },
  DELETE: {
    URL: "http://localhost:3000/products-json/delete",
    METHOD: "DELETE",
  },
};

// for demo purposes...
const isDemo = location.host === "fioip.github.io";
const inlineChanges = isDemo;
if (isDemo) {
  API.READ.URL = "data/products.json";
  API.DELETE.URL = "data/delete.json";
  API.CREATE.URL = "data/create.json";
  API.UPDATE.URL = "data/update.json";

  API.DELETE.METHOD = "GET";
  API.CREATE.METHOD = "GET";
  API.UPDATE.METHOD = "GET";
}

function loadProductsRequest() {
  return fetch(API.READ.URL, {
    method: API.READ.METHOD,
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

function updateProductRequest(product) {
  return fetch("http://localhost:3000/products-json/update", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  }).then((r) => r.json());
}

function deleteProductRequest(id) {
  return fetch("http://localhost:3000/products-json/delete", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id }),
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
                  <a data-id="${id}" class="edit-btn";>&#9998;</a>
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
  if (editId) {
    product.id = editId;
    updateProductRequest(product).then((status) => {
      if (status.success) {
        window.location.reload();
      }
    });
  } else {
    createProductRequest(product).then((status) => {
      if (status.success) {
        closeModal();
        window.location.reload();
        e.target.reset();
        openModal();
      }
    });
  }
}

function prepareEdit(id) {
  const product = allProducts.find((product) => product.id === id);
  console.log("edit", id, product);
  editId = id;

  document.getElementById("name").value = product.name;
  document.getElementById("selectCategory").value = product.category;
  document.getElementById("allergens").value = product.allergens;
  document.getElementById("selectUnit").value = product.measureUnit;
  document.getElementById("weight").value = product.weight;
  document.getElementById("quantity").value = product.quantity;
}

function initEvents() {
  const form = document.getElementById("pantryForm");
  form.addEventListener("submit", onSubmit);

  const tableRows = document.querySelectorAll(".displayedProducts");
  tableRows.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      if (e.target.matches("a.remove-btn")) {
        const id = e.target.dataset.id;
        deleteProductRequest(id).then((status) => {
          if (status.success) {
            window.location.reload();
          }
        });
      } else if (e.target.matches("a.edit-btn")) {
        const id = e.target.dataset.id;
        prepareEdit(id);
        openModal();
      }
    });
  });
}

function openModal() {
  const modal = document.querySelector("#modal");
  modal.classList.add("open");
}

function openAddProductModal() {
  const triggers = document.querySelectorAll("[data-modal]");
  triggers.forEach((trigger) => {
    trigger.addEventListener("click", (e) => {
      openModal();
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
    <tbody class="displayedProducts"></tbody>`;
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
openAddProductModal();
loadProducts();
initEvents();
closeModalOnX();
addProductModalHTML();
