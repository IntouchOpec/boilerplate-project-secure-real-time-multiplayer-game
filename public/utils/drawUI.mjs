import gameConfig from "../gameConfig.mjs";

const { title, controls, gameWidth, padding, infoHeight, gameSize } =
  gameConfig;

/**
 * Draws the UI for the game
 * @module ./public/utils/drawUI
 * @see https://github.com/pinglu85/fcc-secure-real-time-multiplayer-game/blob/main/public/drawUI.mjs
 *
 * @param context   Used for rendering
 * @param score     Represents the player's score
 * @param rank      Represents the player's rank
 *
 */
function drawUI(context, score, rank) {
  // Info border
  context.beginPath();
  context.rect(padding, infoHeight, gameSize.width, gameSize.height);
  context.strokeStyle = "#020702";
  context.stroke();
  context.closePath();

  // Text color
  context.fillStyle = "#ffffff";

  // Game title
  context.font = `14px 'Press Start 2P'`;
  context.textAlign = "center";
  context.fillText(title, gameWidth / 2, infoHeight / 2.5);

  // Game controls
  context.font = `12px 'Press Start 2P'`;
  context.textAlign = "start";
  context.fillText(score, padding, infoHeight - padding);

  // Player's score
  context.font = `12px 'Press Start 2P'`;
  context.textAlign = "center";
  context.fillText(controls, gameWidth / 2, infoHeight - padding);

  // Player's rank
  context.font = `12px 'Press Start 2P'`;
  context.textAlign = "end";
  context.fillText(rank, gameWidth - padding, infoHeight - padding);
}

try {
  module.exports = drawUI
} catch (err)
{

}
export default  drawUI
