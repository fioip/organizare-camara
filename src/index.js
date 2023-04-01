function openModal() {
  const triggers = document.querySelectorAll("[data-modal]");
  triggers.forEach((trigger) => {
    trigger.addEventListener("click", function (e) {
      const modal = document.querySelector("#modal");
      modal.classList.add("open");
    });
  });
}

function closeModal() {
  const closeButtons = document.querySelectorAll(".button-close");
  closeButtons.forEach((closeButton) => {
    closeButton.addEventListener("click", function (e) {
      const modal = document.querySelector("#modal");
      modal.classList.remove("open");
    });
  });
}

function addLiveTextBox() {
  const form = document.querySelector("form");
  // form.className = "info-fixed-box hide-view arrow-left";
  // form.id = "live-text-box";
  // form.method = "GET";
  // form.action = "#";
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
  `;

  return form;
}

openModal();
closeModal();

addLiveTextBox();
