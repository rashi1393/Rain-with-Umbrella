class createDrop{
    constructor(x,y){
        this.rain = Bodies.rectangle(x,y,2,10)
        this.width = 2;
        this.height = 10;
        World.add(world, this.rain);
    }

    updateY(){     
        if(this.rain.position.y > 400){
            this.rain.position.x = random(0,400);
            this.rain.position.y = random(0,400);
        }
    }

    showDrop(){
        rectMode(CENTER);
        rect(this.rain.position.x,this.rain.position.y,this.width,this.height);
    }
}