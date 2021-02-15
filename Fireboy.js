class Fireboy {
    constructor(x,y,width,height){
      
      var options = {
        isStatic:true,
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.radius =radius;
      this.width =width;
      this.height =height;
      this.image = loadImage("fireboy.png");
      World.add(world, this.body);
    
    }
      display() {
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        ellipseMode(CENTER);
        stroke("red");
        strokeWeight(4);
        fill(255);
        image(this.image,0,0,this.radius,this.radius);
        pop();
      }
    };
      
     
    

    
    
  