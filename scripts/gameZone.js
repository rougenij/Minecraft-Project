// import { Block } from "./blocks.js";
// const matrixWorld = new Array(20).fill([...new Array(20).fill(0)]);

// function gameStart() {
//   generateWorld(); // Function that fills matrix array with block Object
//   drawWorld(); // Draws the world accroding to the generated matrix
// }

// function generateWorld() {
//   for (let i = matrixWorld.length - 1; i > matrixWorld.length - 6; i--) {
//     matrixWorld[i] = matrixWorld[i].map((b) => 1);
//   }
// }

// generateWorld();
// console.log(matrixWorld);
const playZone = document.querySelector(".gameZone-playscreen");
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
  mineable: ["dirt", "grass", "stone", "wood", "leaves"],
  notMineAble: [
    "sky",
    "cloud",
    "sunupleft",
    "sunupright",
    "sundownleft",
    "sundownright",
  ],
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
  if (
    mineAble.mineable.includes(e.target.classList.value) &&
    isAccessible(e.target)
  )
    console.log(matrix[x + 1][y]);
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
    matrix[x][y] = 0;
    tile.classList.remove(tile.classList);
    tile.classList.add(blocks[0]);
  }
}
