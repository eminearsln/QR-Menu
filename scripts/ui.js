import { buttonData } from "./constants.js";
const buttonsArea = document.getElementById("buttons");
const menuList = document.getElementById("menu-list");

export const renderMenuItems = (data) => {
  const cardHTML = data
    .map(
      (item) => `<a
  id="card"
  href="/detail.html?id=${item.id}"
  class="d-flex flex-column flex-md-row text-decoration-none text-dark gap-3"
  ><img
  class="rounded shadow img-fluid"
    src="${item.img}"
  />
  <div>
    <div class="d-flex justify-content-between">
      <h5>${item.title}</h5>
      <p class="text-success fw-bold">${(item.price * 20).toFixed(2)}</p>
    </div>
    <p class="lead">
${item.desc}
    </p>
  </div></a>`
    )
    .join("");
  menuList.innerHTML = cardHTML;
};

export const renderButtons = (activeText) => {
  buttonsArea.innerHTML = "";
  buttonData.forEach((btn) => {
    const buttonElement = document.createElement("button");
    buttonElement.className = "btn btn-outline-secondary";
    buttonElement.setAttribute("data-id", btn.value);
    buttonElement.innerText = btn.text;
    if (btn.text === activeText) {
      buttonElement.classList.add("btn-secondary", "text-white");
    }
    buttonsArea.appendChild(buttonElement);
  });
};
/*
      <!-- <button data-id="all" class="btn btn-outline-secondary">Hepsi</button>

*/
