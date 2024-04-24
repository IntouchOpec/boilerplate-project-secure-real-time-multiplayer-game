/**
 * Pre-loads sprites
 * @module ./public/utils/loadSprite
 * @see @see https://github.com/pinglu85/fcc-secure-real-time-multiplayer-game/blob/main/public/game.mjs
 *
 * @param width     Represents the desired width
 * @param height    Represents the desired height
 * @param src       Represents the location of the sprite
 *
 * @returns         Returns the sprite
 */
const loadSprite = (width, height, src) => {
  const sprite = new Image(width, height);
  sprite.src = src;
  return sprite;
};

try {
module.exports = loadSprite;
} catch (error) {
  
}

export default  loadSprite
