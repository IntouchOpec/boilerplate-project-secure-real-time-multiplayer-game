import gameConfig from "./gameConfig.mjs";

const gameOffsetTop = gameConfig.infoHeight;
const gameOffsetLeft = gameConfig.padding;
class Collectible {
  constructor({ x, y, value = 1, id, src = "" }) {
    this.x = x;
    this.y = y;
    this.value = value;
    this.id = id;
    this.src = src;
  }

  draw(context, sprites) {
    const x = this.x + gameOffsetLeft;
    const y = this.y + gameOffsetTop;
    const image = sprites.find((sprite) => sprite.src.includes(this.src));
    context.drawImage(image, x, y, image.width, image.height);
  }
}

try {
  module.exports = Collectible;
} catch (error) {
  
}

export default Collectible;
