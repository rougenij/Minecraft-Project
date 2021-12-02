export const Block = class {
  constructor(blockType) {
    this.blockType = blockType;
  }
  get type() {
    return this.blockType;
  }
  //   set blockType(blockType) {
  //     this.blockType = blockType;
  //   }
};

const block1 = new Block("dirt");
