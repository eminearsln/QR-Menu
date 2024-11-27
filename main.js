import { renderMenuItems, renderButtons } from "./scripts/ui.js";

const buttonsArea = document.getElementById("buttons");
let data;
async function fetchMenu() {
  const res = await fetch("./db.json");
  data = await res.json();
}

window.addEventListener("DOMContentLoaded", () => {
  renderButtons();
  fetchMenu().then(() => renderMenuItems(data.menu));
});

buttonsArea.addEventListener("click", (e) => {
  if (e.target.id == "buttons") return;
  renderButtons(e.target.innerText);

  const categoryName = e.target.dataset.id;
  if (categoryName === "all") {
    renderMenuItems(data.menu);
  } else {
    const filtered = data.menu.filter((item) => item.category === categoryName);

    renderMenuItems(filtered);
  }
});
