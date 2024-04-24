/**
 * Module that adds shadows to all sprites
 * @module ./public/utils/shadows
 * @see https://github.com/pinglu85/fcc-secure-real-time-multiplayer-game/blob/main/public/utils/drawDropShadow.mjs
 *
 * @param context     Represents the sprites on the canvas
 *
 */
function shadows(context) {
  context.shadowColor = "rgba(0, 0, 0, 0.8)";
  context.shadowBlur = 5;
  context.shadowOffsetX = 0;
  context.shadowOffsetY = 0;
}
try {
  module.exports = shadows;
} catch (error) {
  
}

export default shadows;