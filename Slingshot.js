class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);

        this.catapultIMG1 = loadImage("sprites/sling1.png");
        this.catapultIMG2 = loadImage("sprites/sling2.png");
        this.catapultIMG3 = loadImage("sprites/sling3.png");

    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
  image(this.catapultIMG1,230,30);
  image(this.catapultIMG2,200,30);


        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
           stroke("brown")
           push();
            stroke(48,22,8);

            if(pointA.x < 200) {
             strokeWeight(3);
             line(pointA.x-20, pointA.y, pointB.x-20, pointB.y+20);
             line(pointA.x-20, pointA.y, pointB.x+30, pointB.y);
             image(this.catapultIMG3,pointA.x-30,pointA.y-10,15,30)
            } 
            else{
                strokeWeight(7);
                line(pointA.x-20, pointA.y, pointB.x-20, pointB.y+20);
                line(pointA.x-20, pointA.y, pointB.x+30, pointB.y);
                image(this.catapultIMG3,pointA.x-30,pointA.y-10,15,30)
            }
            pop();
            
        }

        
    }
    
}