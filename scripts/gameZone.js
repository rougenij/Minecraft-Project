const playZone = document.querySelector(".gameZone-playscreen");
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
let grassCounter = 0;
let stoneCounter = 0;
let dirtCounter = 0;
let leavesCounter = 0;
let woodCounter = 0;

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

function draw() {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      const block = document.createElement("div");
      block.addEventListener("click", isMineAble, false);
      block.classList.add(blocks[matrix[i][j]]);
      block.setAttribute("x", i);
      block.setAttribute("y", j);
      playZone.appendChild(block);
    }
  }
}
draw();

function isMineAble(e) {
  console.log(toolsMaterial[selectedTool]);
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

function add(tile) {
  switch (tile) {
    case "grass":
      grassEl.textContent = `${grassCounter + 1}`;
      grassCounter++;
      break;
    case "dirt":
      dirtEl.textContent = `${dirtCounter + 1}`;
      dirtCounter++;
      break;
    case "stone":
      stoneEl.textContent = `${stoneCounter + 1}`;
      stoneCounter++;
      break;
    case "wood":
      woodEl.textContent = `${woodCounter + 1}`;
      woodCounter++;
      break;
    case "leaves":
      leavesEl.textContent = `${leavesCounter + 1}`;
      leavesCounter++;
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
  toolEl[i].classList.toggle("selected");
  selectedTool = toolEl[i].classList[0];
  console.log(toolEl[i]);
  unselect(i);
}

function unselect(i) {
  tools.forEach((el, j) => {
    if (i != j) {
      toolEl[j].classList.remove("selected");
    }
  });
  if (!toolEl[i].classList.contains("selected")) {
    selectedTool = toolsMaterial.none;
  }
}
