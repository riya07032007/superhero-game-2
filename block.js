class Block{
  constructor(x,y,width,height) {
  var options={
     isStatic:false

  }

  this.body= Bodies.rectangle(x,y,width,height,options)
  this.width=width
  this.height=height
  World.add(world,this.body)
}


display(){
rectMode(CENTER);
stroke("black")
strokeWeight("2")
rect(this.body.position.x,this.body.position.y,this.width,this.height)
  }
}