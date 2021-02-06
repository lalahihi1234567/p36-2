class Box{
    constructor(x, y) {
        var options = {
            'isStatic':false,
            'restitution':0.1
        }
        this.body = Bodies.rectangle(x, y, 70, 70, options);
        this.width = 70;
        this.height = 70;
        this.image = loadImage("s.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        rotate(angle);
        fill("white");
        stroke("green");
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.width, this.height);
        pop();
        }
}