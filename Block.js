class Block {
    constructor(x, y, width, height, colour) {
        var options = {
            'restitution' : 0.8,
            'friction' : 2.0,
            'density' : 1.0
        }

      this.body = Bodies.rectangle(x, y, width, height, colour, options);
      this.width = width;
      this.height = height;
      this.colour = colour;
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      rectMode(CENTER);
      fill(this.colour)
      strokeWeight(3)
      stroke("black")
      rect(pos.x, pos.y, this.width, this.height);
    }
  };
