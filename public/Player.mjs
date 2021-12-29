import { dimension } from './dimension.mjs';

class Player {
  // constructor for variables
  constructor({x, y, score, id, radius = 30}) {
    this.x = x;
    this.y = y;
    this.score = score;
    this.id = id;
    // hitbox
    this.radius = radius;
    
  }
  // switch case to move characters around the dimension
  movePlayer(dir, speed) {
    switch(dir) {
      case 'up':
        this.y  = Math.max(dimension.minY+this.radius, this.y - speed);
        break;
      case 'down':
        this.y  = Math.min(dimension.maxY-this.radius, this.y + speed);
        break;
      case 'left':
        this.x  = Math.max(dimension.minX+this.radius, this.x - speed);
        break;
      case 'right':
        this.x  = Math.min(dimension.maxX-this.radius, this.x + speed);
        break;
    }
  }
// if there'es a collision between the player and the collectible
  collision(item) {
    // calculate distance between the two objects
    var dx = this.x - item.x;
    var dy = this.y - item.y;
    var distance = Math.sqrt(dx * dx + dy * dy);
    // if the distance is less than the sum of their radii, they are colliding
    if (distance < this.radius + item.radius) {
      return true;
    }
    return false;
  }
  // draw the player object on the canvas
  draw(context,img){
    context.drawImage(img, this.x-this.radius, this.y-this.radius, 2*this.radius, 2*this.radius);
  }
// update the player object
  calculateRank(arr) {
    // sort the array by score
    const sort = arr.sort((a, b) => b.score - a.score);
    // find the index of the player
    let position = 0
    // loop through the array
    sort.forEach((player, index) => {
      // if the player's id matches the player's id in the array then set the position to the index + 1
      if(this.id === player.id) position = index+1;
    });
    // return the position
    return `Rank: ${position} / ${arr.length}`;
  }

}

// export module
try {
  module.exports = Player;
} catch(e) {}
// otherwise export constructor object by default
export default Player;