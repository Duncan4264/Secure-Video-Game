class Collectible {
  // constructor for variables
  constructor({x, y, value, id}) {
    this.x = x;
    this.y = y;
    this.value = value;
    this.id = id;
    this.radius = 20
  }
  // draw the image
  draw(context,img) {
    context.drawImage(img, this.x-this.radius, this.y-this.radius, 2*this.radius, 2*this.radius);
  }

}
// attempt to export module
try {
  module.exports = Collectible;
} catch(e) {}
// otherwise export constructor object by default
export default Collectible;
