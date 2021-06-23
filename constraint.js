class CONSTRAINT{
    constructor(a,b){
     var options={
      bodyA:a,
      bodyB:b,
      length:50,
      stiffness:0.04, 
     }
    this.yoana=Matter.Constraint.create(options);
    World.add(world,this.yoana);

    }

    display(){
    line(this.yoana.bodyA.position.x,this.yoana.bodyA.position.y,
        this.yoana.bodyB.position.x,this.yoana.bodyB.position.y); 
    }
}