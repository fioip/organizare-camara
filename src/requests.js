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

export function loadProductsRequest() {
  return fetch(API.READ.URL, {
    method: API.READ.METHOD,
    headers: {
      "Content-type": "application/json",
    },
  }).then((r) => r.json());
}

export function createProductRequest(product) {
  return fetch(API.CREATE.URL, {
    method: API.CREATE.METHOD,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  }).then((r) => r.json());
}

export function updateProductRequest(product) {
  return fetch(API.UPDATE.URL, {
    method: API.UPDATE.METHOD,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  }).then((r) => r.json());
}

export function deleteProductRequest(id) {
  return fetch(API.DELETE.URL, {
    method: API.DELETE.METHOD,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id }),
  }).then((r) => r.json());
}
