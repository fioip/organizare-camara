import "./style.css";
import { addProductModalHTML } from "./form";
import {
  createProductRequest,
  deleteProductRequest,
  updateProductRequest,
  loadProductsRequest,
} from "./requests";
import {
  openModal,
  openAddProductModal,
  closeModal,
  closeModalOnX,
} from "./modal-actions";

let allProducts = [];
let editId;
let globalTableId;

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
  let productsToShow = products.slice(0, 3);
  const loadButton = document.querySelector(".load-button");
  document.querySelector(tableSelector).innerHTML =
    getProductsHtml(productsToShow);
  if (productsToShow.length < products.length) {
    loadButton.style.display = "block";
  }
  loadButton.addEventListener("click", () => {
    if (loadButton.innerText.trim() == "Arata mai mult") {
      document.querySelector(tableSelector).innerHTML =
        getProductsHtml(products);
      loadButton.innerHTML = "Arata mai putin";
    } else {
      document.querySelector(tableSelector).innerHTML =
        getProductsHtml(productsToShow);
      loadButton.innerHTML = "Arata mai mult";
    }
  });
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
    <th></th>
    </tr>
    </thead>
    <tbody class="displayedProducts"></tbody>
    <button data-id="${tableId}" class="load-button"> Arata mai mult </button>
    `;
  return tableNode;
}

function initTable(cardName, tableId) {
  const productCardElement = document.querySelector(
    `#${cardName} .tableContent`
  );
  const productTableNode = createProductTable(tableId);
  productCardElement.appendChild(productTableNode);
  globalTableId = tableId;
}

console.warn("table id", globalTableId);

function initTables() {
  initTable("card-fainoase", "fainoaseTable");
  initTable("card-conserve", "conserveTable");
  initTable("card-dulciuri", "dulciuriTable");
  initTable("card-borcane", "borcaneTable");
  initTable("card-condimente", "condimenteTable");
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

initTables();
openAddProductModal();
loadProducts();
initEvents();
closeModalOnX();
addProductModalHTML();
