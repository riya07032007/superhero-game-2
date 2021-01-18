class Hero {
  constructor(x, y) {
    var options = {
        
        'frictionAir':0.005,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y,110,110, options);
    this.image=loadImage("images/Superhero-01.png")
    this.width = 110
    this.height = 110;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    ellipseMode(RADIUS);
    strokeWeight(4)
    stroke("pink")
    fill(255);
    image(this.image,0, 0, this.width, this.height);
    pop();
  }
};