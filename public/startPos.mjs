function startPos (gameField, sprite) {
  return {
    x: Math.random() * (gameField.width - sprite.width),
    y: Math.random() * (gameField.height - sprite.height),
  };
};

try {
  module.exports = startPos;
} catch (error) {
  
}
export default startPos;
