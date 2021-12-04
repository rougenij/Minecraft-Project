const playZone = document.querySelector(".gameZone-playscreen");
const allGameZoneEl = document.querySelector("#gameZone");
const landingPage = document.querySelector(".landingpage");
const InventoryEl = document.querySelector(".gameZone-Inventory");
const toolEl = document.querySelectorAll(".itemSlot");
const tools = [...document.querySelector(".gameZone-Inventory").children];
//* Tools Elements
const pickaxeEl = document.querySelector(".pickaxe");
const axeEl = document.querySelector(".axe");
const shovelEl = document.querySelector(".shovel");
//* Inventory resoures Elements
const stoneEl = document.querySelector(".stone-counter");
const woodEl = document.querySelector(".wood-counter");
const grassEl = document.querySelector(".grass-counter");
const dirtEl = document.querySelector(".dirt-counter");
const leavesEl = document.querySelector(".leaves-counter");
// Landing Page Buttons \\
const startBtn = document.querySelector("[data-stargame]");
const tutorialBtn = document.querySelector("[data-tutorial]");
const tutorialMsgEl = document.querySelector("[data-tutorialMsg");
const gameButtonsEl = document.querySelectorAll(".buttons");
// Game Buttons \\
const resetBtn = document.querySelector("[data-reset");
const restartBtn = document.querySelector("[data-restart");

startBtn.addEventListener("click", () => {
  landingPage.classList.add("none");
  allGameZoneEl.classList.toggle("none");
  InventoryEl.classList.toggle("none");
});
tutorialBtn.addEventListener("click", () => {
  tutorialMsgEl.textContent =
    "Choose an assembly tool and start working. Each tool can be used for specific elements only. Once you removed an element, you can replace it anywhere you would like on the ground";
});

resetBtn.addEventListener("click", () => {
  stoneEl.textContent = "";
  woodEl.textContent = "";
  leavesEl.textContent = "";
  dirtEl.textContent = "";
  grassEl.textContent = "";
  playZone.innerHTML = "";
  reset();
});
function reset() {
  for (let i = 0; i < notTouchedMatrix.length; i++) {
    for (let j = 0; j < notTouchedMatrix[i].length; j++) {
      const block = document.createElement("div");
      block.addEventListener("click", isActive, false);
      block.classList.add(blocks[notTouchedMatrix[i][j]]);
      block.setAttribute("x", i);
      block.setAttribute("y", j);
      playZone.appendChild(block);
    }
  }
}
// The blocks to build the matrix
const blocks = {
  0: "sky",
  1: "dirt",
  2: "grass",
  3: "stone",
  4: "wood",
  5: "leaves",
  6: "cloud",
  7: "sunupleft",
  8: "sunupright",
  9: "sundownleft",
  10: "sundownright",
};

const mineAble = {
  mineableBlock: ["dirt", "grass", "stone", "wood", "leaves"],
  notMineAble: [
    "sky",
    "cloud",
    "sunupleft",
    "sunupright",
    "sundownleft",
    "sundownright",
  ],
};
// Global Variables
let counters = {
  grass: 0,
  stone: 0,
  dirt: 0,
  leaves: 0,
  wood: 0,
};

// Tools Materials
const toolsMaterial = {
  pickaxe: ["stone"],
  shovel: ["dirt", "grass"],
  axe: ["wood", "leaves"],
  none: [],
};

let matrix = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 8, 0],
  [0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 9, 10, 0],
  [0, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 6, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0],
  [3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5, 0, 0, 0],
  [3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5, 0, 0, 0],
  [3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0],
  [3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0],
  [3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0],
  [1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];
let notTouchedMatrix = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 8, 0],
  [0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 9, 10, 0],
  [0, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 6, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0],
  [3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5, 0, 0, 0],
  [3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5, 0, 0, 0],
  [3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0],
  [3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0],
  [3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0],
  [1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

function draw() {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      const block = document.createElement("div");
      block.addEventListener("click", isActive, false);
      block.classList.add(blocks[matrix[i][j]]);
      block.setAttribute("x", i);
      block.setAttribute("y", j);
      playZone.appendChild(block);
    }
  }
}
draw();

function isActive(e) {
  if (isSlotSelected()) {
    switch (selectedTool) {
      case "pickaxe":
      case "axe":
      case "shovel":
        isMineAble(e);
        break;
      default:
        isPlaceable(e.target);
        break;
    }
  }
}
function isMineAble(e) {
  if (toolsMaterial[selectedTool].includes(e.target.classList.value)) {
    if (
      mineAble.mineableBlock.includes(e.target.classList.value) &&
      isAccessible(e.target)
    ) {
    }
  }
}

function isAccessible(tile) {
  const x = parseInt(tile.getAttribute("x"));
  const y = parseInt(tile.getAttribute("y"));
  if (
    matrix[x + 1][y] === 0 ||
    matrix[x - 1][y] === 0 ||
    matrix[x][y - 1] === 0 ||
    matrix[x][y + 1] === 0
  ) {
    add(tile.classList.value);
    matrix[x][y] = 0;
    tile.classList.remove(tile.classList);
    tile.classList.add(blocks[0]);
  }
}
function isSlotSelected() {
  if (selectedTool == toolsMaterial.none) {
    return false;
  }
  return true;
}

function isPlaceable(tile) {
  if (counters[selectedTool] > 0) {
    const x = parseInt(tile.getAttribute("x"));
    const y = parseInt(tile.getAttribute("y"));
    let tileType = tile.classList.value;
    if (
      (matrix[x + 1][y] === 0 ||
        matrix[x - 1][y] === 0 ||
        matrix[x][y - 1] === 0 ||
        matrix[x][y + 1] === 0) &&
      tileType === "sky"
    ) {
      decrese(selectedTool);
      matrix[x][y] = blocks[selectedTool];
      tile.classList.remove(tileType);
      tile.classList.add(selectedTool);
    }
  }
}

function add(tile) {
  switch (tile) {
    case "grass":
      grassEl.textContent = `${counters.grass + 1}`;
      counters.grass++;
      break;
    case "dirt":
      dirtEl.textContent = `${counters.dirt + 1}`;
      counters.dirt++;
      break;
    case "stone":
      stoneEl.textContent = `${counters.stone + 1}`;
      counters.stone++;
      break;
    case "wood":
      woodEl.textContent = `${counters.wood + 1}`;
      counters.wood++;
      break;
    case "leaves":
      leavesEl.textContent = `${counters.leaves + 1}`;
      counters.leaves++;
      break;
  }
}
function decrese(tile) {
  switch (tile) {
    case "grass":
      grassEl.textContent = `${counters.grass - 1}`;
      counters.grass--;
      break;
    case "dirt":
      dirtEl.textContent = `${counters.dirt - 1}`;
      counters.dirt--;
      break;
    case "stone":
      stoneEl.textContent = `${counters.stone - 1}`;
      counters.stone--;
      break;
    case "wood":
      woodEl.textContent = `${counters.wood - 1}`;
      counters.wood--;
      break;
    case "leaves":
      leavesEl.textContent = `${counters.leaves - 1}`;
      counters.leaves--;
      break;
  }
}
let selectedTool = toolsMaterial.none;
tools.forEach((element, i) => {
  element.addEventListener("click", () => {
    select(i);
  });
});

function select(i) {
  tools[i].classList.toggle("selected");
  selectedTool = tools[i].classList[0];
  unselect(i);
}

function unselect(i) {
  tools.forEach((el, j) => {
    if (i != j) {
      tools[j].classList.remove("selected");
    }
  });
  if (!toolEl[i].classList.contains("selected")) {
    selectedTool = toolsMaterial.none;
  }
}
