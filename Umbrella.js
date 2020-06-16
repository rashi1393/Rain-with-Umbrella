class Umbrella {
    constructor(x,y){
        var options = {
            isStatic: true
        }
        this.umbrella = Bodies.circle(x,y,60,options);
        this.radius = 60;
        World.add(world, this.umbrella)
    }

    display(){
        var pos = this.umbrella.position;
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,60,60);
    }
}