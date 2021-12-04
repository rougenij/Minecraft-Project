const tools = [...document.querySelector(".gameZone-Inventory").children];

const toolsMaterial = {
  pickaxe: ["stone"],
  shovel: ["dirt", "grass"],
  axe: ["wood", "leaves"],
  none: [],
};
let selectedTool = toolsMaterial.none;
tools.forEach((element, i) => {
  element.addEventListener("click", t, false);
});

function t(e) {
  let target = e.target;
  let child = target.parentElement.firstElementChild;
  while (child) {
    console.log(child);
    if (child.classList.contains("selected") && child !== target) {
      child.classList.toggle("selected");
    }
    child = child.nextElementSibling;
  }
  target.classList.toggle("selected");
}
