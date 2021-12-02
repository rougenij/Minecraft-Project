import { Block } from "./blocks.js";
const matrixWorld = new Array(20).fill([...new Array(20).fill(0)]);

function gameStart() {
  generateWorld(); // Function that fills matrix array with block Object
  drawWorld(); // Draws the world accroding to the generated matrix
}

function generateWorld() {
  for (let i = matrixWorld.length - 1; i > matrixWorld.length - 6; i--) {
    matrixWorld[i] = matrixWorld[i].map((b) => 1);
  }
}

generateWorld();
console.log(matrixWorld);
