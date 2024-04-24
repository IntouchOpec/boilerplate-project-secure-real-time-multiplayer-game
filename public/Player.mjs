import gameConfig from "./gameConfig.mjs";

const { gameSize, playerSprites, collectibleSprites } = gameConfig;
const gameOffsetTop = gameConfig.infoHeight;
const gameOffsetLeft = gameConfig.padding;

class Player {
  constructor({ x, y, score = 0, id }) {
    this.x = x;
    this.y = y;
    this.score = score;
    this.id = id;
    this.speed = 4;
    this.dir = null;
  }

  movePlayer(dir, speed) {
    switch (dir) {
      case "up":
        this.y -= this.y - speed < 0 ? 0 : speed;
        break;
      case "down":
        this.y =
          this.y + speed > gameSize.height - playerSprites.height
            ? gameSize.height - playerSprites.height
            : this.y + speed;
        break;
      case "left":
        this.x -= this.x - speed < 0 ? 0 : speed;
        break;
      case "right":
        this.x =
          this.x + speed > gameSize.width - playerSprites.width
            ? gameSize.width - playerSprites.width
            : this.x + speed;
    }
  }

  collision(item) {
    let itemWidth;
    let itemHeight;

    // Gets the width and height of the collectible
    Object.keys(collectibleSprites).forEach((key) => {
      if (collectibleSprites[key].src == item.src) {
        itemWidth = collectibleSprites[key].width;
        itemHeight = collectibleSprites[key].height;
      }
    });

    if (this.x == item.x && this.y == item.y) return true;

    // Contains all sides (from top left to bottom right) of the avatar
    const avatarSides = {
      left: {
        x: this.x,
        y: this.y,
      },
      right: {
        x: this.x + playerSprites.width,
        y: this.y + playerSprites.height,
      },
    };

    // Contains all sides (from top left to bottom right) of the collectible sprite
    const itemSides = {
      left: {
        x: item.x,
        y: item.y,
      },
      right: {
        x: item.x + itemWidth,
        y: item.y + itemHeight,
      },
    };

    // Checks if the player sprite intersected with the item
    if (
      avatarSides.left.x < itemSides.right.x &&
      itemSides.left.x < avatarSides.right.x &&
      avatarSides.right.y > itemSides.left.y &&
      itemSides.right.y > avatarSides.left.y
    ) {
      return true;
    }

    return false;
  }

  calculateRank(arr) {
    let players = arr.filter((player) => player.id != this.id);
    let rank = 1;

    players.forEach((player) => {
      if (this.score < player.score) {
        rank++;
      }
    });

    return `Rank: ${rank} / ${arr.length}`;
  }

  draw(context, sprite) {
    if (this.dir) {
      this.movePlayer(this.dir, this.speed);
    }

    const x = this.x + gameOffsetLeft;
    const y = this.y + gameOffsetTop;
    context.drawImage(sprite, x, y, sprite.width, sprite.height);
  }
}

try {
  module.exports = Player;
} catch (error) {
  
}

export default Player;